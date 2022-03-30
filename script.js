"use strict";

const url = "information.json";
let cards = document.querySelectorAll(".cards");

let list = [];

fetch(url).then((res) =>
  res.json().then((data) => {
    list = data;
    // maker();
    cards.forEach((el, index) => {
      addInfo(index);
      el.addEventListener("click", function () {
        const winHtml = `<!DOCTYPE html>
    <html>
    <link rel="stylesheet" href="style.css">
        <head>
            <title>Window with Blob</title>
        </head>
        <body style="display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center">
            <h1 style="font-family: monospace";>${list[index].name}</h1>
            <h2 style="font-family: monospace";>${list[index].address}</h2>
            <iframe src="${list[index].map}" style="width: 400px; height: 300px;" frameborder="0"></iframe>
            <h3 style="font-family: monospace";>${list[index].description}</h3>
        </body>
        <script src="script.js"></script>
    </html>`;

        const winUrl = URL.createObjectURL(
          new Blob([winHtml], { type: "text/html" })
        );

        const win = window.open(
          winUrl,
          '_blank',
          `width=500,height=400,screenX=200,screenY=200`
        );
      });
    });
  })
);

// first page stuff

function addInfo(index) {
  let title = document.querySelectorAll(".card-title");
  title[index].textContent = list[index].name;
  cards[index].setAttribute("id", index);
}