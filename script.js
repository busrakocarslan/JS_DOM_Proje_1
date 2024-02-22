const sayfa = document.querySelector("body");
sayfa.style.backgroundColor = "blanchedalmond";

const head = document.querySelector("#header");
console.log(head);
head.textContent = "JavaScript Dom Assignment-1";
head.style.color = "purple";
head.style.fontSize = "24px";
head.style.textAlign = "center";
head.style.padding = "24px";
head.style.backgroundColor = "lightGray";

const item = document.querySelector(".div-item");
console.log(item);
item.style.backgroundColor = "lightGray";
item.style.color = "pink";
item.style.textAlign = "center";
item.style.display = "flex";
item.style.justifyContent = "center";
item.style.gap = "3rem";

const button1 = document.querySelector("div button:first-child");
button1.style.fontSize = "24px";
button1.style.border = "none";
button1.style.backgroundColor = "inherit";

const button2 = document.querySelector("div button:last-child");
button2.style.backgroundColor = "purple";
button2.style.color = "white";
button2.style.border = "4px solid orange";
button2.style.borderRadius = "50%";

const aLinks = document.querySelectorAll("div button a");

aLinks.forEach((a) => {
  a.style.color = "orange";
  a.target = "_blank";
  a.style.textDecoration = "none";
});

document.getElementById("baslik").textContent = "JavaScript Dom Assignment 1";

const girisler = document.querySelector("#girisler");
girisler.style.display = "flex";
girisler.style.justifyContent = "center";
girisler.style.alingItems = "center";
girisler.style.gap = "0.5rem";
girisler.style.margin = "5rem";

value = girisler.children[1];
value.style.backgroundColor = "lightSteelBlue";
value.value = "Anthony";
value.disabled = true;

value2 = girisler.children[4];
value2.style.backgroundColor = "lightSteelBlue";
value2.value = "123456";
value2.type = "text";
value2.disabled = true;

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "orange";
btn.style.color = "gray";
btn.style.border = "none";
btn.style.borderRadius = "5%";
btn.style.padding = "2px";
btn.textContent = "Giriş Yap!";
btn.style.cursor = "pointer";

let theme = "light";

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "gray";
  btn.style.color = "orange";
  btn.textContent = "gönderildi";

  setTimeout(() => {
    btn.style.backgroundColor = "orange"; // Eski rengine geri dönmek için boş bir değer atayabilirsiniz
    btn.style.color = "gray"; // Eski rengine geri dönmek için boş bir değer atayabilirsiniz
    btn.textContent = "Giriş Yap!"; // Eski metni geri yükleyin
  }, 2000);
});

const Projects = document.getElementById("projects");
Projects.style.textAlign = "left";
Projects.style.margin = "0 auto";
Projects.style.width = "fit-content";
Projects.style.lineHeight = "2rem";
Projects.style.cursor = "pointer";
Projects.textContent = "JS Dom Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

for (let i = 0; i < myProjects.length; i++) {
  const eklenen = document.createElement("li");
  eklenen.innerText = myProjects[i];
  Projects.appendChild(eklenen);
}
