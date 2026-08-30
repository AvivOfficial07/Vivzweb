const listIcon = document.getElementById("list-icon");
const listMenu = document.getElementById("list-menu");





listIcon.addEventListener("click",() => {
  listMenu.classList.toggle("hidden");
  // alert("yo kamu klik tombol");
  listIcon.parentElement.children[0].classList.toggle("list-icon")
});





