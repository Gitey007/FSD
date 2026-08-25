const container = document.getElementById("container");
const btn = document.getElementById("btn");
const h1 = document.createElement("h1");
h1.innerText = "ABES Engineering College";
const loader = document.createElement("h2");
loader.innerText = "Loading...";
const img = document.createElement("img");
function ping() {
  try {
    loader.innerText = "Loading data........";
    container.appendChild(loader);
    const welcome = document.createElement("h2");
    welcome.innerText = "Welcome to DOM";
    welcome.style.color = "red";
    container.appendChild(welcome);
    container.appendChild(h1);
    img.src = 'www.facebook.com/tr?id=2721807504774016&ev=PageView&noscript=1';
    img.height = 200;
    img.width = 200;
    container.appendChild(img);
  } catch (e) {
    loader.innerText = "Error";
    console.log(e);
  }
}
btn.addEventListener("click", ping);
