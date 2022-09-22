//async js
//it govern how we perform task that takes time to do like how we request from api
//it is a code that can start now nd finish later
// js is  asingl threaded language whwere on e ststement runs befor the other, if they are getting a data, they perform a call backk function which extcute the rest of the code before returning the API request

console.log(1);
console.log(2);
setTimeout(() => {
  console.log("async callback function");
}, 2000); //this i an async code, this is a reques t function , the browser takes the request and operate on it outside the scope of the thread and take the callback function and put it to one side and excute it when the data come back. it continues running the rest of the code until the data returns
console.log(3);
console.log(4);

//HTTP REQUESTS
//HTTP request is the process of colloect a data from a dadtabase and dpo somehing with it.
//we make the request to an API endpoint. they are url that a paticular server exposes to us so that we can get data from them example getting  song from sopify making a http rquest to spotify and getting a response data

//EXAMPLE OF AN API ENDPOINT

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//HOW TO MAKE AN HTTP REQUEST
const request = new XMLHttpRequest(); //CREATE A REQUEST OBJECT, the xml. this is what send the reuest to the browser

//TO TRACK THE PROGRESS OF A REQUEST

request.addEventListener("readystatechange", () => {
  console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("cant fetch your data");
  }
  // response text is the data gotten from the end point api
}); //readystate ie the state the request is, it brings the request object

request.open("GET", "todo.json"); //this take 2 argnu, the type of request you want to make and where you want to get the response from the api endpoint

request.send();

// STATUS CODES

//CALLBACK FUNCTION

const getTodo = (callback) => {
  const request = new XMLHttpRequest(); //CREATE A REQUEST OBJECT, the xml. this is what send the reuest to the browser

  //TO TRACK THE PROGRESS OF A REQUEST

  request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      //JSON
      //json are turned in a javascript object to make it mor accessible
      const data = JSON.parse(request.responseText);
      callback(undefined, data); //the callback function is called i.e it runs what is in the code block in line 67 i.e the function that was passed in the todo function. so in this case the error is undefined and the response is the data
    } else if (request.readyState === 4) {
      callback("cant get data", undefined);
    }
    // response text is the data gotten from the end point api
  }); //readystate ie the state the request is, it brings the request object

  request.open("GET", '"https://jsonplaceholder.typicode.com/todos/'); //this take 2 argnu, the type of request you want to make and where you want to get the response from the api endpoint

  request.send();
}; //we can pass a call back function by passing a call back function that can be called mutiple time by adding new dufferent claaback function in
console.log(5);
console.log(6);
console.log(7);

getTodo(function (error, data) {
  console.log("callback has fired");
  if (error) {
    console.log(error);
  } // log error if there is an error which has been defined in the todo function
  else {
    console.log(data);
  }
}); // this is passing another function as a parameter for get to do function which make it a call back function. ie a different condition can be written for each of the call back function, as it passed as an argument, it must be taken as a parameter in the to do function

console.log(8);
console.log(9);
console.log(0);

//JSON
//json are turned in a javascript object to make it mor accessible

//CALLBACK HELL
const newTodo = (resource) => {
  //the resource folder contains all the jso  files, it is passed into the open methos and is the api url endpoint
  return new Promise(function (resolve, reject) {
    // this is the function that contains the network request
    const secondRequest = new XMLHttpRequest(); //CREATE A REQUEST OBJECT, the
    //TO TRACK THE PROGRESS OF A REQUEST
    secondRequest.addEventListener("readystatechange", () => {
      console.log(secondRequest, secondRequest.readyState);
      if (secondRequest.readyState === 4 && secondRequest.status === 200) {
        const secondata = JSON.parse(secondRequest.responseText);

        resolve(secondata);
      } //the callback function is called i.e it runs what is in the code block in line 67 i.e the function that was passed in the todo function. so in this case the error is undefined and the response is the data
      else if (secondRequest.readyState === 4) {
        reject("error in getting resource");
      }
    });

    secondRequest.open("GET", resource); //this take 2 argnu, the type of request you want to make and where you want to get the response from the api endpoint

    secondRequest.send();
  });
};
// CALLBACK HELL
// [newTodo("todoList/shaun.json", (error, secondata) => {
//   console.log(secondata);
//   newTodo("todoList/luwi.json", (error, secondata) => {
//     console.log(secondata);
//     newTodo("todoList/ryu.json", (error, secondata) => {
//       console.log(secondata);
//     });
//   });
// }); ]

newTodo("todoList/shaun.json")
  .then(function (secondata) {
    console.log("promised resolved", secondata);
    return newTodo("todoList/luwi.json"); // because the major return a promise using return also return the promise
  })
  .then((secondata) => {
    console.log("promised resolved 2", secondata);
    return newTodo("todoList/ryu.json");
  })
  .then((secondata) => {
    console.log("promised resolved 3", secondata);
  })
  // PROMISE CHAINING
  //chain promises gives us the ability to replace the callback hell function
  //when the first function is fired we get the first round of data but we want to get mutiple data

  .catch(function (error) {
    console.log("error in reqeusting data", error);
  });

// they are different json files that coming in in different time, we have to wait to get the first befor making an request for a seconfd one . if you making request from multiple api that is where it comesin

// PROMISES

const getSomethig = () => {
  //contains network request
  //1 * we return a new promise
  // a promise is something that take time to do something it will lead either to one or two outcomes.  to resolved(we get the data we want ) or rejected (we get error at some pint and it is rejected)

  return new Promise((resolve, reject) => {
    //the network request is done insidde the call back function
    // where we fetch something
    //we get access to twonparameter the reject and resolved
    // resolve("some data");
    reject("some error");
    //it checks if it a resove or an reject
  }); //which is a function that takes in a call back function
};

getSomethig()
  .then(function (data) {
    console.log(data);
    // a callback function of the data in the promise is passed
  })
  .catch((error) => {
    console.log(error);
  });
// this is a call back function is there is a rejection;
// it comes to the catch method to catch the error if the data is not recieved
//it either going to reject or resolve at some point when a promise is gotten add a .then

//NATIVE FETCH API
//a promise is saying at one point i will either resolve to a success or reject when there is an error
// fetch api works in a way that the promise is only rejected when you dont get a network response either offline canot reach api
fetch("todoList/luwi.json")
  .then((response) => {
    console.log("resolved api", response);
    // to get the data we have to call the .json method that is like using json.parse
    return response.json(); //this return the overall value of the promise and not the actual data
  })
  .then((data) => {
    console.log(data);
    //this takes back the data we get from the .json promise method that when resolve produces our data
  })
  .catch((err) => {
    console.log("rejected", err);
  });

//ASYNC AND AWAIT
//they allow us to chain promises together in a readable way
// 1 create a async function that when called returns a promise
// 2 use AWAIT  it means stop javascrpit from assigning a variable until the promise has been resolved and stored in the responce object, it is not blocking the rest of the code.
// 3 use the json method which returns a promise to chain on the promise and the response is stored in newdata so we will get the data
// 4 return the data so that you can get access to it when the main function is called
//5 tag a .then method when the promise has been resolved and want to be called

const getTodos = async () => {
  const response2 = await fetch("todoList/ryu.json");
  if(response2.status !== 200){
   throw new Error('cannot fetch the data')
  }
  const newData = await response2.json;
  return newData;
};
console.log("milk");
console.log("blane");

console.log("rice pudding");

getTodos().then((newData) => {
  console.log("await resolved", newData);
}).catch('rejected', err.message)
console.log("juice");
console.log("nut");
console.log("coco");
