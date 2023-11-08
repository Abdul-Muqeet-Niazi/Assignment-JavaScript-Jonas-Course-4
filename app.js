// Here we see about JavaScript Important Variables, Definition and its uses etc.
"use strict";

// What is DOM ?
// DOM as 'Document Object Model', Uses for recruit html elements and makes a link between html/css with JavaScript,And as many
// Beginners think it is the part of javaScript but Unfotunately it is not that every user might thought,The JavaScript has covered EcmaScript
// project so why we use it in javaScript bcz some of its fundamental is linked with web browsers and API which is the references of JAVASCRIPT, where it is made for
// linking b/w JavaScript and HTML/CSS as you can change everything by the use of DOM, Here as we described their properties and variables

// OR //

// The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

// QuerySelector :
// it is a property, which is basically used for recruit/pick the element of html/css;

console.log(document.querySelector(".Header")); // Here it takes the element from html which is specified by class, as we use dot before reruiting the element just like in css.
// but it takes the element the whole element we want to recruit only text so,

console.log(document.querySelector(".Header").textContent); // now it takes the text 😉
// As you can also cange the value/Text of your key/H1

// console.log((document.querySelector(".Header").textContent = "Hello World!"));
// Now it had change the value or text not in console but also in Document, as I have to comment it.

// Value :
// it is a property to recruit the value of an element. Example: Input

console.log(document.querySelector(".Header").value); // As it shows the result as undefined bcz we do not gave the value in html file it is a text.
// Now for changing the value,

console.log((document.querySelector(".Header").value = "Hello Lenovo"));
// Done it 😎

// AddEventListener :
// Now, an event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press, or many other events.
// Then, with an event listener, we can wait for a certain event to happen, and then react to it. And it contains three parameters (1- event(like CLICK), 2- Function(to tell the listener what to do), 3- False and True(which is Optional).
// And in addeventlistener the function cannot be called so the JavaScript engine automatically call the Function when we call/click the event.

document.querySelector(".Header").addEventListener("click", function () {
  console.log("Hi, I am Header");

  //   document.querySelector('.Header').textContent = "Now you see me!"
  // Here can also change the message into another message when you click the header text. for checking the result uncomment it!
});

// So now how ever you click on the header it will log the message!

