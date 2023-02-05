const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain : function() {
        console.log("Meow!");
    }
}

cat.complain();


// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function addList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
}
}

addList(cats);

// Question 8

function createCats(cats) {
    
    let htmlSend = "";

    for(let i = 0; i < cats.length; i++) {

        let ageMissing = "Age unknown";

        if(cats[i].age) {
            ageMissing = cats[i].age;
        }

        htmlSend += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${cats[i].age}</p>
                </div>`;
        }
        return htmlSend;
}

const returnedHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = returnedHTML;