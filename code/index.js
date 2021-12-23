import  {add}  from "./calc";
import("./index.css");

// import image


console.log(add(5, 5));
console.log(add(10, 5));


const h1 = document.createElement("h1");
h1.innerText = "Hello Webpack";
h1.classList.add("redcolor")

// document.createElement("img").src = image

document.getElementById("root").appendChild(h1)

//To do
let form = document.querySelector('form');
        let count = 1;

        let addData = function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let quantity = document.getElementById("quantity").value;
            let priority = document.getElementById("priority").value;
            createItem(name, quantity, priority);
        }

        let complete = function(event) {
            let parent = event.target.parentNode;
            parent.style.background = "green";
        }

        let deleted = function(event) {
            let parent = event.target.parentNode;
            parent.remove();
        }

        function createItem(name, quantity, priority) {
            let parent = document.querySelector('table');

            let row = document.createElement('tr');
            let c1 = document.createElement('td');
            c1.textContent = +count;
            let c2 = document.createElement('td');
            c2.textContent = name;
            let c3 = document.createElement('td');
            c3.textContent = quantity;
            let c4 = document.createElement('td');
            c4.textContent = priority;
            let c5 = document.createElement('td');
            c5.textContent = "Done-"+count;
            c5.addEventListener('click', complete);
            let c6 = document.createElement('td');
            c6.textContent = "Remove-"+count;
            c6.addEventListener('click', deleted)

            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);

            parent.appendChild(row);

            count++;
        }

        form.addEventListener('submit', addData);