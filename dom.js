console.log(document); // it shows the document provided by the browser id is index.html
const banner = document.getElementById("page-banner");
console.log(banner); // it takes elementby id

const titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles)); //it checks if this is an array
console.log(Array.isArray(Array.from(titles))); //it convert what is not an array into an array

Array.from(titles).forEach((books) => {
  console.log(books);
});
console.log(titles[0]); // it stores element as an HTML collection. it like an array and you can access it with index of or a [] notation but cannot perform foreach on it

const bookCollection = document.querySelectorAll(".name");
bookCollection.forEach((book) => {
  book.textContent += "(book title)"; // this will change the text content of the .name class
  console.log(book.textContent);
});

//change and edit inner html

const bookList = document.querySelector("#book-list");
bookList.innerHTML += "<h3> More books are coming... </h3>";
// the will add to the inner html with the target id of book-list '
console.log(bookList);

// DOM NODES
const banner2 = document.getElementById("page-banner");
console.log(`there node type is ${banner2.nodeType}`); // this will check what node type it is.// you cna check w3 school to understand the node type
console.log(`there child node is ${banner2.hasChildNodes()}`); //it check if the node has a child node there and return either true or false
console.log(`there node name is ${banner2.nodeName}`); // the name of the node

const clonedBanner = banner2.cloneNode(true); // it allows you to clone node. you have to pass a parameter true so that it cannget all the child element in that node
console.log(clonedBanner);

const bookList2 = document.querySelector("#book-list");
console.log(`there parent node name is ${bookList2.parentNode}`); // allows you to find the parent node of th element
console.log(`there parent node name is ${bookList2.parentElement}`); // the name of the node
console.log(`there child node name is ${bookList2.childNodes}`); // it finds all the children node in the element
console.log(`there child node name is ${bookList2.children}`); // it finds all the children node in the element

const bookList3 = document.querySelector("#book-list");
console.log(`there are the next siblings ${bookList3.nextSibling}`); // it allows you to find the next sibling and what comes after the booklist id
console.log(`the next element siblings ${bookList3.nextElementSibling}`); // it allows you to find the next element sibling ie the element that comes after the booklist id
console.log(`the previous siblings ${bookList3.previousSibling}`); // it allows you to find the next sibling and what comes after the booklist id
console.log(
  `there previous element siblings ${bookList3.previousElementSibling}`
); // it allows you to find the previous element sibling ie the element that comes after the booklist id

// to targeta particular element we can do

bookList3.previousElementSibling.querySelector("p").innerHTML +=
  "<br/> we offer the best books";
//it checks the book-list id and looks for the previous elementt sibling ans use the query selector to target the p tag and change and updated the following p

//DOM EVENTS

// ADD  an EventListner method first to the target element you want to do an event on
// ADD the even you want to listen for, that is the event you want to happen
// the second parameter is a create a call back function that will fire when the event is licked to react to it. it takesthe event parameter e
// e is the event
//target is a property on the event object  and tell us the element that was clicked and what is the target elemet

const headTitle = document.querySelector(".cta");
headTitle.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e);
});

// const deleteBtn = document.querySelectorAll(".delete");
// deleteBtn.forEach((readBook) => {
//   readBook.addEventListener("click", function (e) {
//     const li = e.target.parentElement; // we want when we click on the button we remove the li that contains the button which is a parent element to the button
//     li.parentNode.removeChild(li);
//     //parent. remove child  i.e the parent node of the li which is the ul. and we are saying for the ul we want to remove the li
//   });
// });
// deleteBtn.addEventListener('click', function )
const link = document.querySelector("a");
link.addEventListener("click", function (e) {
  e.preventDefault(); // it prevent the default behaviour of the element to act. ie it will not direct the person to the defined link
  console.log(`navigation to ${e.target.textContent} somewher else`);
});

// event bubbling
// note that if an event listner is added to an elenent and is also added to the parent of that same element, they both trigger that is the first one will trigger and the other one will also trigger
const buttonList = document.querySelector("ul");
buttonList.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    //if the target which is the button has a class name of delte run the folloeing
    const li = e.target.parentElement; // the target element which is the button grab the parent element which is the the li
    li.parentNode.removeChild(li); // or remove child
  }
});

//FORMS

//when a form is created the main aim is to submit the form. when the button is clicked an action is fired and the default is to refresh. the main thing is to listen to the form. attach an event to the form to listen to a submit action than prevent the default behaviour

const addForm = document.forms["add-book"]; //this allows you to refrence the form which as an id of add-book

addForm.addEventListener("submit", function (e) {
  e.preventDefault(); // this is to prevent the default behaviour of the form
  const value = addForm.querySelector('input[type="text"]').value;
  // this refrence the form but checks for the in put that conatins the value and attach a .value which take what the user inputs. it is a property that grabs the value of the input field
  //creating an element
  // you need to create elments

  const liContainer = document.createElement("li"); // element are created using a createElement method. you check the procedure of how they area arrrange an create the element like that. orders are important has the li list in the bbok-list area conatins a two span class as children
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // if you notice the span tags are appened in the li tag and the li tag is appended in the ul tag APPENED TO DOCUMENT .. IT MEANS ADDING INTO THE DOCUMENT
  liContainer.appendChild(bookName);
  liContainer.appendChild(deleteBtn);
  buttonList.appendChild(liContainer);

  // ADDING CONTENT
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  // AADING STYLE AND ADDING CLASS
  deleteBtn.classList.add("delete");
}); // add an event listener to submit, it is the form that submit when we click a button

// CHANGING AND UPDATING ATTRIBUTE
const mainBtn = document.querySelector(".cta");
headTitle.style.color = "orange";
mainBtn.setAttribute("style", "background: blue"); //you can change any attribute on a page
mainBtn.hasAttribute("class"); // it checks if you have an attribute of class
mainBtn.removeAttribute("class"); // it removes the class attribute
mainBtn.setAttribute("class", "delete");
console.log(mainBtn);

mainBtn.getAttribute("class"); // you pass through what attribute you want to check

//CHECKBOX EVENTc

const hideBooks = document.querySelector("#hide");
hideBooks.addEventListener("change", function (e) {
  //the event here is the chnage, it will check if there is any chnages to the #hide element
  if (hideBooks.checked) {
    // .checked is a property, it is saying if the checkbox is checked do what is in the block code that is hide the ul in which the block code belong to
    // buttonList.setAttribute("style", "dispaly: none");
    buttonList.style.display = "none";
  } else {
    buttonList.style.display = "block";
    // buttonList.setAttribute("style", "display:block");
  }
});

//SEARCH BAR

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase(); // it means you want to grab the value of what is in the target field which is the input. the value is converted to lower case

  const bookTitle = document.querySelectorAll("li"); //refrence the li tag, the li tags contains the title of the books we want so we will cycle through each li and compare the value
  bookTitle.forEach((novel) => {
    // this is to grab the title of the book which is the text content of the each li ie the first element child that is in the li . that is the span tag
    const title = novel.firstElementChild.textContent;

    // Now we want to check if the value of what is typed in which is stored in the term storage is === to the book title

    if (title.toLowerCase().indexOf(term) != -1) {
      novel.style.display = "block";
    } //change the title to lowercase, use index of to get the index of the value and compare it to that of the string
    else {
      novel.style.display = "none";
    }
  });
}); // the key up event is when a key is clicked and released that is a key up event. when that happens it finds the valuee of what is in the import field. the text is taken and compared with the database. if they are in the titile that are kept otherwise they remain hidden
