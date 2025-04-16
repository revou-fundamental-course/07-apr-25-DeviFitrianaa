function replaceName() {
  let name = prompt("Halo, siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

// document.getElementById("gantiname").addEventListener("click", function () {
//   replaceName();
// });
