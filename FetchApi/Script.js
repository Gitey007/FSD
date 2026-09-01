const container = document.getElementById("container");
const btn = document.getElementById("btn");
const disp = document.getElementById("display");
const load = document.getElementById("loader");

async function fetch1() {
  // alert("hiii");
  try {
    loader.innerHTML = '<h2>loading data .....</h2>';
    const serverData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await serverData.json();
    // console.log(jsonData[0].title);
    // disp.innerHTML = `${jsonData[0].title}`;
    let table = `<table border = 2px>
    ${
        jsonData.map((ele)=>(
    `<tr>
    <td><img src =" ${ele.image}" height = 200 width = 200> </img></td>
    <td>${ele.title}</td>
    <td>${ele.description}</td>
    <td>${ele.price}</td>
    <td>${ele.category}</td>
    </tr>`
        ))
    }
    </table>`
    disp.innerHTML=table;
  } catch (e) {
    console.log(e);
  } finally {
    loader.innerHTML = '';
  }
}
btn.addEventListener("click", fetch1);
