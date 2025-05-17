document.querySelectorAll(".sepeteEkle").forEach( function(button) { // bu satırdaki function "sepeteEkle" sınfına ait bütün butonları sırayla gezer.
            button.addEventListener("click", function () {              // bu butona tıklanınca çalışacan fonksiyon.
                let girisYaptiMi = localStorage.getItem("giris");

                if (girisYaptiMi === "true") {
                    alert("Sepete eklendi!");
                } else {
                    // Bootstrap modal'ı göster
                    let modal = new bootstrap.Modal(document.getElementById('loginModal'));
                    modal.show();

                    // Butona bir kez tıklanırsa yönlendirme yap
                    const modalBtn = document.getElementById("modalRedirectBtn");

                    // Önce eski listener varsa kaldır (önlem)
                    modalBtn.onclick = null;

                    // Sonra yeni listener tanımla
                    modalBtn.onclick = function () {
                        window.location.href = "register.html";
                    };
                }

            });
        }
    )