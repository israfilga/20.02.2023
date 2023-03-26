let addButton = document.querySelector(".form-btn");
let input = document.getElementById("inputText");
let pList = document.querySelector(".list");
addButton.addEventListener("click", function () {
  let listItem = document.createElement("p");
  let paragraph = document.createElement("p");
  let deleteBtn = document.createElement("button");
  paragraph.classList.add("paragraph");
  listItem.classList.add("list-item");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = "Delete";
  pList.appendChild(listItem);
  listItem.appendChild(paragraph);
  listItem.appendChild(deleteBtn);
  paragraph.innerHTML = input.value;
  input.value = "";
  deleteBtn.addEventListener("click",function(){
    listItem.remove();
  })
});
