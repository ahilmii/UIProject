document.addEventListener("click", function(e) {
  
  const btn = e.target.closest(".sepeteEkle");
  if (!btn) return;

  e.preventDefault();
  e.stopPropagation();

  let girisYaptiMi = localStorage.getItem("giris");
  
  if (girisYaptiMi === "true") {
    alert("Sepete eklendi!");
  } else {

    let modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
    
    document.getElementById("modalRedirectBtn").onclick = () =>
    window.location.href = "register.html";
  }

});





    // Mobilde Products’a tıklayınca alt menü aç/kapat
document.addEventListener("DOMContentLoaded", function () {
  const productMenuItem = document.querySelector("li.product > a");

  productMenuItem.addEventListener("click", function (e) {
    // Eğer ekran genişliği mobilse
    if (window.innerWidth <= 780) {
      e.preventDefault(); // "product.html"e gitmesini engelle
      const parentLi = this.parentElement;
      parentLi.classList.toggle("open"); // class ekle/kaldır
    }
  });
});    