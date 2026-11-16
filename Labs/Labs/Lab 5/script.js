//IT24101675
//Nanayakkara S.N.N.

let title = document.getElementsByTagName("h1")[0];
let image = document.images[0];
let form = document.forms[0];

console.log(title);
console.log(image);
console.log(form);

window.onload = function () {
  console.log("Page URL:", document.URL);
  console.log("Last Modified:", document.lastModified);
  document.title = "Travel Adventures - DOM Lab";
};

title.style.color = "darkblue";
title.style.fontSize = "35px";
title.style.fontFamily = "Arial";

setTimeout(function () {
  document.body.style.backgroundColor = "#5490C5";
}, 2000);

image.onmouseover = function () {
  image.style.border = "5px solid orange";
};

image.onmouseout = function () {
  image.style.border = "none";
};

document.getElementById("name").onkeyup = function () {
  this.style.backgroundColor = "#e4d6af";
};

form.onsubmit = function (event) {
  event.preventDefault();
  addTraveler();
};

let costTable = document.getElementById("costTable");

if (costTable) {
  costTable.addEventListener("click", function () {
    alert("You clicked on the Trip cost table!");
  });
}

function addTraveler() {
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value, 10);
  let email = document.getElementById("email").value;

  let table = document.getElementById("travelerTable");
  let row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = age;
  row.insertCell(2).innerText = email;

  let deleteCell = row.insertCell(3);
  let btn = document.createElement("button");
  btn.innerText = "Delete";

  btn.onclick = function () {
    table.deleteRow(row.rowIndex);
    updateCount();  
  };

  deleteCell.appendChild(btn);
  //task 3
  if (age < 18) {
    row.style.backgroundColor = "#fff3cd";
  } else if (age >= 60) {
    row.style.backgroundColor = "#d1ecf1";
  }

  form.reset();
  updateCount();  
}

//Task 1

let table = document.getElementById("travelerTable");

//parentNode usage
let formContainer = form.parentNode;

//children usage
let inputs = form.children;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].tagName === "INPUT") {
    inputs[i].style.backgroundColor = "#eef";
  }
  console.log("Child tag: ", inputs[i].tagName);   
}

//Task 2

let countPara = document.createElement("p");
countPara.id = "travellerCount";
countPara.innerText = "Total Registered Travelers: 0";
document.body.appendChild(countPara);

function updateCount() {
  //rows length includes header row,so -1
  let count = table.rows.length - 1;
  countPara.innerText = "Total Registered Travelers: " + count;
}

//task 4

let submitBtn = document.querySelector("input[type='submit']");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");

submitBtn.disabled = true;

function validateForm() {
  let valid = true;

  if (nameInput.value.trim() === "") {
    nameInput.style.border = "2px solid red";
    valid = false;
  } else {
    nameInput.style.border = "";
  }
  //simple validation for age
  let ageVal = parseInt(ageInput.value, 10);
  if (isNaN(ageVal) || ageVal <= 0) {
    ageInput.style.border = "2px solid red";
    valid = false;
  } else {
    ageInput.style.border = "";
  }

  if (!emailInput.value.includes("@")) {
    emailInput.style.border = "2px solid red";
    valid = false;
  } else {
    emailInput.style.border = "";
  }

  submitBtn.disabled = !valid;
}

nameInput.onkeyup = validateForm;
ageInput.onkeyup = validateForm;
emailInput.onkeyup = validateForm;

//task 5

document.getElementById("ageFilter").onchange = function () {
    let filter = this.value;
    let rows = table.rows;

    for (let i = 1; i < rows.length; i++) {
        let age = parseInt(rows[i].cells[1].innerText, 10);
        rows[i].style.display = "table-row";

    if (filter === "under18" && age >= 18)
        rows[i].style.display = "none";

    if (filter === "adult" && (age < 18 || age >= 60))
        rows[i].style.display = "none";

    if (filter === "senior" && age < 60)
        rows[i].style.display = "none";
    }
};

//task 6 

table.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    let row = e.target.parentNode.parentNode;
    row.remove();
    updateCount();
  }
});

// In-class test: Dynamic Item List
let itemForm = document.getElementById("itemForm");
let itemName = document.getElementById("itemName");
let itemQty = document.getElementById("itemQty");
let itemError = document.getElementById("itemError");
let itemList = document.getElementById("itemList");

if (itemForm) {
  // Add item
  itemForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = itemName.value.trim();
    let qty = parseInt(itemQty.value, 10);

    //  Validation
    if (name === "" || isNaN(qty) || qty <= 0) {
      itemError.innerText = "Please enter item name and positive quantity!";
      return;
    }

    itemError.innerText = "";

    // Create <li>
    let li = document.createElement("li");
    li.innerHTML = `${name} - ${qty} <button class="deleteBtn">Delete</button>`;
    itemList.appendChild(li);

    // reset
    itemForm.reset();
  });

  //  Delete using event delegation
  itemList.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
      let li = e.target.parentNode;
      itemList.removeChild(li);
    }
  });
}