// Selecting Elements
const mainHeading = document.getElementById('mainHeading');
const toggleButton = document.querySelector('.toggleButton');
const addButton = document.querySelector('.addButton');
const removeButton = document.querySelector('.removeButton');
const itemList = document.getElementById('itemList');
const items = document.querySelectorAll('.item');
const infoSection = document.getElementById('infoSection');

// Modifying Content
mainHeading.textContent = 'Advanced DOM Manipulation Example';

// Changing Styles
mainHeading.style.textTransform = 'uppercase';

// Event Handling: Toggle visibility of items
toggleButton.addEventListener('click', () => {
    itemList.classList.toggle('hidden');
    toggleButton.textContent = itemList.classList.contains('hidden') ? 'Show Items' : 'Hide Items';
});

// Event Handling: Add a new item to the list
addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

// Event Handling: Remove the last item from the list
removeButton.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    } else {
        alert('No more items to remove.');
    }
});

// Changing Attributes: Dynamically update attributes
infoSection.addEventListener('mouseover', () => {
    infoSection.querySelector('p').setAttribute('title', 'You hovered over the text!');
});

infoSection.addEventListener('mouseout', () => {
    infoSection.querySelector('p').removeAttribute('title');
});

// Creating Elements: Adding a new element on hover
infoSection.addEventListener('mouseover', () => {
    const hoverMessage = document.createElement('div');
    hoverMessage.textContent = 'You are hovering over the info section!';
    hoverMessage.style.marginTop = '10px';
    hoverMessage.id = 'hoverMessage';
    infoSection.appendChild(hoverMessage);
});

infoSection.addEventListener('mouseout', () => {
    const hoverMessage = document.getElementById('hoverMessage');
    if (hoverMessage) {
        infoSection.removeChild(hoverMessage);
    }
});
