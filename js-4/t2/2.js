const target = document.querySelector("#target");

const firstItem = document.createElement("li");
firstItem.innerText = "First item";
target.appendChild(firstItem);

const secondItem = document.createElement("li");
secondItem.innerText = "Second item";
secondItem.classList.add("my-item");
target.appendChild(secondItem);

const thirdItem = document.createElement("li");
thirdItem.innerText = "Third item";
target.appendChild(thirdItem);