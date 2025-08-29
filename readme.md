# Questions:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

# Answers:

1. getElementById is used when you want to grab just one element by its id. It only gives you that single element, so you know exactly what you’re working with. getElementsByClassName gets all elements that have the same class, and it gives you a live collection that updates automatically if the page changes. querySelector and querySelectorAll are more flexible. querySelector finds the first thing that matches a CSS selector, while querySelectorAll finds all matches and gives you a list that’s easy to loop through.

2. To add a new element to a page, you first create it using document.createElement. Then you can give it some text or a class to style it. After that, you attach it to the page using appendChild or insertBefore. For example, you could make a new <div>, put “Hello” inside it, give it a class, and then add it to the body of the page.

3. Event bubbling is what happens when an event starts at the element you click on and then spreads up to its parent elements. For instance, if you click a button inside a div, the button’s click handler runs first, and then the div’s click handler runs. It’s like the event bubbles up from the inner element to the outer ones.

4. Event delegation is when you put an event listener on a parent element instead of adding one to every single child. Because of bubbling, the parent can detect when any of its children are clicked. This is super useful for lists or content that changes, because you don’t have to add a listener to every new item you create.

5. preventDefault() stops the browser from doing what it normally does for an event, like following a link or submitting a form. stopPropagation() stops the event from moving up to parent elements, so other handlers won’t run. Basically, one stops the browser’s default action, and the other stops the event from spreading.