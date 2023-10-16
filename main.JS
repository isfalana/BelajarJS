// console.log("Hello World");
// alert("ada notifikasi");
// prompt("pinjam sejuta");

// var promnet = "coding";
// console.log(promnet);
// var promnet = "coding IS Asik";
// console.log(promnet);

// console.log(promnet);
// var promnet = "coding IS Asik";
// console.log(promnet);

// let promnet = "coding is fun";
// console.log(promnet);
// let promnet = "coding is fun";
// console.log(promnet);

// const promnet = "coding is My life";
// console.log(promnet);
// const promnet = "coding is My life yes";
// console.log(promnet);

// let totalPoint = prompt("Masukan poin Anda");
// if (totalPoint >= 100) {
//   document.write("congratulations");
// } else {
//   document.write("Keep trying");
// }

// let x = 6;
// let y = 3;
// console.log(x < 10 && y > 1);
// console.log(x < 10 && y < 1);
// console.log(x == 5 || y == 5);
// console.log(x == 6 || y == 5);
// console.log(!(x == y));

// document.write(x < 10 && y > 1);
// document.write("<br>");
// document.write(x < 10 && y < 1);
// document.write("<br>");
// document.write(x == 5 || y == 5);
// document.write("<br>");
// document.write(x == 6 || y == 5);
// document.write("<br>");
// document.write(!(x == y));

// let p = document.querySelector("p");
// let button = document.querySelector("button");
// let input = document.querySelector("input");
// button = addEventListener("click", function () {
//   let isi = input.value;
//   console.log(isi);
//   p.innerHTML = isi;
// });

const inputList = document.getElementById("input-list");
const listInput = document.getElementById("list");

function tambah() {
  if (inputList.value === "") {
    alert("jangan biarkan kosong!!!");
  } else {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "daftar-list";
    li.appendChild(checkbox);
    let namaTugas = document.createTextNode(inputList.value);
    li.appendChild(namaTugas);

    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "x";
    tombolHapus.className = "tombol-hapus";
    li.appendChild(tombolHapus);
    list.appendChild(li);

    inputList.value = "";
    li.style.listStyleType = "none";
    tombolHapus.style.listStyleType = "none";

    tombolHapus.addEventListener("click", function () {
      li.remove();
    });

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });
  }
}
