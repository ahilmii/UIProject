// productsData.js
// products dizisi
const products = [
        {
            name: "erkek-blazer-ceket",
            title: "Slim Fit Men's Blazer Elegant and Modern Look",
            brand: "Style Of Turkish Men",
            price: "1.399,99 TL",
            category: "Upper Wear",
            color:"7 Color",
            image1: "assets/erkek-blazer-ceket-1.webp",
            image2: "assets/erkek-blazer-ceket-2.webp",
            comments:"12",
            seller: "Alley",
            reviews: [
                { user: "user1", rating:5,   text:"18 gündür ürünü bekliyorum halen gelmedi, üstte dursun diye 5 yıldız veriyorum!!!"},
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
                { user: "user5", rating:5,   text:"Gömleğin rengi ve bedeni tam istediğim gibi, güvenle alabilirsiniz :)"},
            ],
        },
        {
            name: "kisa-kollu-cizgili-erkek-gomlek",
            title: "Navy Blue Regular Fit Short Sleeve Striped Men's Shirt",
            brand: "SOTM Vision",
            price: "999,99 TL",
            category: "Upper Wear",
            color:"4 Color",
            image1: "assets/originalHuseyin2.png",
            image2: "assets/originalHuseyin3.png",
            comments:"18",
            seller: "YILMAZ",
            reviews: [
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3, text:"30 derecede yıkama yapın, yoksa çekebilir"},
                { user: "user5", rating:5, text:"Gömleğin rengi ve bedeni tam istediğim gibi, güvenle alabilirsiniz :)"},
            ],
        },
        {
            name: "umut1",
            title : "Men's Off White Linen Look Button Down Summer Shirt",
            brand: "SOTM Classic",
            price: "579,99 TL",
            category: "Upper Wear",
            color:"2 Color",
            image1: "assets/umut1.png",
            image2: "assets/umut2.png",
            comments:"4",
            seller: "HEALME",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
        {
            name: "uzun-kollu-erkek-ceket-gomlek",
            title: "Regular Fit Long Sleeve Men's Shirt Jacket",
            brand: "SOUTHBLUE",
            price: "1499,99 TL",
            category: "Upper Wear",
            color:"5 Color",
            image1: "assets/uzun-kollu-erkek-ceket-gomlek-1.webp",
            image2: "assets/uzun-kollu-erkek-ceket-gomlek-2.webp",
            comments:"33",
            seller: "Big Stone",
            reviews: [
                { user: "user1", rating:5,   text:"Gömlek gerçekten çok şık duruyor, herkes nereden aldığımı soruyor.!!"},
                { user: "user2", rating:3.5, text:"Gömlek güzel ama dikiş yerlerinde hafif potluk var."},
            ]
        },
         {
            name: "kahverengi-ayakabi-sneak1",
            title : "Brown Laced Men's Sneakers",
            brand: "God Shoes",
            price: "2399,99 TL",
            category: "Shoes",
            color:"4 Color",
            image1: "assets/kahverengi-ayakabi-sneak1.webp",
            image2: "assets/kahverengi-ayakabi-sneak2.webp",
            comments:"4",
            seller: "Hamza Al",
            reviews: [  
                { user: "user2", rating:4.5, text:"gayet iyi"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
        {
            name: "kahverengi-pantalon1",
            title : "Brown Standard Pattern Men's Trousers",
            brand: "SOTM Modern",
            price: "279,99 TL",
            category: "Trousers",
            color:"1 Color",
            image1: "assets/kahverengi-pantalon1.webp",
            image2: "assets/kahverengi-pantalon2.webp",
            comments:"4",
            seller: "Micheal Jackson",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
        {
            name: "lacivert-klasik-ayakabi1",
            title : "Navy Blue Men's Classic Shoes",
            brand: "God Shoes",
            price: "479,99 TL",
            category: "Shoes",
            color:"4 Color",
            image1: "assets/lacivert-klasik-ayakabi1.webp",
            image2: "assets/lacivert-klasik-ayakabi2.webp",
            comments:"4",
            seller: "Ali Sezer",
            reviews: [  
                { user: "user2", rating:4.5, text:"gayet iyi"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
        {
            name: "bej-cizgili-desen-gofreli-ceket",
            title : "Beige Striped Pattern Embossed Mono Collar Flexible Slim Fit Jacket",
            brand: "SOTM Class",
            price: "6999,99 TL",
            category: "Upper Wear",
            color:"4 Color",
            image1: "./assets/bej-cizgili-desen-gofreli-ceket-1.webp",
            image2: "./assets/bej-cizgili-desen-gofreli-ceket-2.webp",
            comments:"4",
            seller: "HEALME",
            reviews: [
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
                { user: "user5", rating:5,   text:"Gömleğin rengi ve bedeni tam istediğim gibi, güvenle alabilirsiniz :)"},
            ]
            
        },
        {
            name: "lacivert-polo-yaka-kisa-kollu-pike-erkek-tisort",
            title : "Lacivert Polo Yaka Kısa Kollu Pike Erkek",
            brand: "POLO",
            price: "345,99 TL",
            category: "Upper Wear",
            color:"7 Color",
            image1: "assets/lacivert-polo-yaka-kisa-kollu-pike-erkek-tisort1.webp",
            image2: "assets/lacivert-polo-yaka-kisa-kollu-pike-erkek-tisort2.webp",
            comments:"8",
            seller: "HEALME",
            reviews: [
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
         {
            name: "beyaz-spor-ayakabi1",
            title : "White Laced Men's Sneakers",
            brand: "Cool Shoes",
            price: "2399,99 TL",
            category: "Shoes",
            color:"4 Color",
            image1: "assets/beyaz-spor-ayakabi1.webp",
            image2: "assets/beyaz-spor-ayakabi2.webp",
            comments:"4",
            seller: "HEALME",
            reviews: [  
                { user: "user2", rating:4.5, text:"gayet iyi"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
        {
            name: "polo-yaka-kisa-kollu-pike-erkek-tisort2",
            title : "Polo Collar Short Sleeve Pique Men's T-Shirt",
            brand: "SOTM Classic",
            price: "399,99 TL",
            category: "Upper Wear",
            color:"4 Color",
            image1: "assets/polo-yaka-kisa-kollu-pike-erkek-tisort2.webp",
            image2: "assets/polo-yaka-kisa-kollu-pike-erkek-tisort1.webp",
            comments:"4",
            seller: "HEALME",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
            ]
            
        },
        {
            name: "siyah-standart-pantalon1",
            title : "Black Standard Fit Men's Trousers",
            brand: "SOTM Version",
            price: "799,99 TL",
            category: "Trousers",
            color:"4 Color",
            image1: "assets/siyah-standart-pantalon1.webp",
            image2: "assets/siyah-standart-pantalon2.webp",
            comments:"3",
            seller: "FARUK",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                
            ]
            
        },
        
         {
            name: "bej-pantalon1",
            title : "Beige Standard Pattern Linen Look Men's Pleated Trousers",
            brand: "SOTM Version",
            price: "799,99 TL",
            category: "Trousers",
            color:"4 Color",
            image1: "assets/bej-pantalon1.webp",
            image2: "assets/bej-pantalon2.webp",
            comments:"3",
            seller: "FARUK",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                
            ]
            
        },
        {
            name: "siyah-file-ayakabi1",
            title : "Black Mesh Detailed Men's Sneakers",
            brand: "SOTM Modern",
            price: "879,99 TL",
            category: "Shoes",
            color:"1 Color",
            image1: "assets/siyah-file-ayakabi1.webp",
            image2: "assets/siyah-file-ayakabi2.webp",
            comments:"3",
            seller: "Fatih Sultan Mehmet",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                
            ]
            
        },
        
        {
            name: "antrasit-rahat-erkek-pantallon1",
            title : "Anthracite Relaxed Fit Men's Cargo Trousers",
            brand: "SOTM Modern",
            price: "279,99 TL",
            category: "Trousers",
            color:"1 Color",
            image1: "assets/antrasit-rahat-erkek-pantallon1.webp",
            image2: "assets/antrasit-rahat-erkek-pantallon2.webp",
            comments:"3",
            seller: "Elvis Presley",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                
            ]
            
        },
        
        {
            name: "ekru (1)",
            title : "Ecru Regular Fit Men's Trousers",
            brand: "SOTM Modern",
            price: "1079,99 TL",
            category: "Trousers",
            color: "8 Color",
            image1: "assets/ekru (1).webp",
            image2: "assets/ekru (2).webp",
            comments:"3",
            seller: "Dua Lipa",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                
            ]
            
        },
        {
            name: "gri-rahat-pantalon1",
            title : "Grey Casual Fit Men's Trousers",
            brand: "SOTM Modern",
            price: "199,99 TL",
            category: "Trousers",
            color: "8 Color",
            image1: "assets/gri-rahat-pantalon1.webp",
            image2: "assets/gri-rahat-pantalon1.webp",
            comments:"3",
            seller: "Dua Lipa",
            reviews: [  
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                
            ]
            
        },
          {
            name: "yesil-regular-fit-keten-erkek-gomlek1",
            title : "Green Regular Fit Linen Blend Men's Shirt",
            brand: "SOTM Classic",
            price: "699,99 TL",
            category: "Upper Wear",
            category: "Upper Wear",
            color:"4 Color",
            image1: "./assets/yesil-regular-fit-keten-erkek-gomlek1.webp",
            image2: "./assets/yesil-regular-fit-keten-erkek-gomlek2.webp",
            comments:"4",
            seller: "HEALME",
            reviews: [
                { user: "user1", rating:4.5, text:"çok rahat çok profesyonel"},
                { user: "user2", rating:4.5, text:"mankenin instası var mı"},
                { user: "user3", rating:2.5, text:"Gömleği kağıttan mı yaptınız anlamadım, ütülerken yandı!!!!"},
                { user: "user4", rating:3,   text:"30 derecede yıkama yapın, yoksa çekebilir"},
                { user: "user5", rating:5,   text:"Gömleğin rengi ve bedeni tam istediğim gibi, güvenle alabilirsiniz :)"},
            ]
            
        },

];

// Yıldızları oluşturan yardımcı fonksiyon
function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="fa-regular fa-star" style="color: #FFD43B;"></i>';
    }
    return starsHtml;
}

// DOMContentLoaded olayı, HTML tamamen yüklendiğinde tetiklenir
document.addEventListener('DOMContentLoaded', function() {



    // Navbar'ı güncelleme fonksiyonu (Tüm sayfalarda çalışacak)
    function updateNavbarForAuthStatus() {
        // Register linkini bulmak için daha spesifik bir seçici kullanabiliriz
        const registerLiElement = document.querySelector('nav ul li:last-child'); // Son li elementini varsaydım
        if (registerLiElement) {
            const authStatus = localStorage.getItem("giris");
            const username = localStorage.getItem("username");

            if (authStatus === "true") {
                // Giriş yapıldıysa "My Account" olarak değiştir
                // İç HTML'i tamamen değiştiriyoruz
                registerLiElement.innerHTML = `
                    <a href="my-account.html">My Account
                        <i class="fa-solid fa-user" style="color:#cab726"></i>
                    </a>`;
                registerLiElement.title = `Hoş geldiniz, ${username || 'Kullanıcı'}!`;
            } else {
                // Giriş yapılmadıysa "Register" olarak kalsın
                registerLiElement.innerHTML = `
                    <a href="auth.html">Register
                        <i class="fa-solid fa-user" style="color:#cab726"></i>
                    </a>`;
            }
        }
    }

    // Sayfa yüklendiğinde navbar'ı güncelle
    updateNavbarForAuthStatus();




    
    // Sepete Ekle Bölümü (Tüm sayfalarda "sepeteEkle" butonu varsa çalışır)
    document.addEventListener("click", function(e) {
        const btn = e.target.closest(".sepeteEkle");
        if (!btn) return;

        e.preventDefault();
        e.stopPropagation();

        let girisYaptiMi = localStorage.getItem("giris");

        if (girisYaptiMi === "true") {
            alert("Sepete eklendi!");

            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const prodName = btn.dataset.name;
            cart.push(prodName);
            localStorage.setItem("cart", JSON.stringify(cart));
            // Sepet içeriğini buraya ekleyebilirsin
        } else {
            // Bootstrap Modalını göster
            let loginModalElement = document.getElementById('loginModal');
            if (!loginModalElement) {
                // Eğer modal HTML'de yoksa, dinamik olarak oluştur
                loginModalElement = document.createElement('div');
                loginModalElement.id = 'loginModal';
                loginModalElement.className = 'modal fade';
                loginModalElement.setAttribute('tabindex', '-1');
                loginModalElement.setAttribute('aria-labelledby', 'loginModalLabel');
                loginModalElement.setAttribute('aria-hidden', 'true');
                loginModalElement.innerHTML = `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="loginModalLabel">Giriş Yap / Kaydol</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Bu işlemi yapabilmek için lütfen giriş yapın veya kaydolun.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                                <button type="button" class="btn btn-primary" id="modalRedirectBtn">Giriş Yap / Kaydol</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(loginModalElement);
            }

            let modal = new bootstrap.Modal(loginModalElement);
            modal.show();

            // Modal açıldıktan sonra yönlendirme butonuna olay dinleyici ekle
            const modalRedirectBtn = document.getElementById("modalRedirectBtn");
            if (modalRedirectBtn) {
                modalRedirectBtn.onclick = () => {
                    window.location.href = "auth.html"; // Yeni auth.html dosyasına yönlendir
                };
            }
        }
    });





    // product-detail.html için kod
    const productDetailContainer = document.getElementById('product-detail');
    if (productDetailContainer) {
        const queryString = window.location.search;
        const queryParams = new URLSearchParams(queryString);
        const nameOfURL = queryParams.get('name');

        const product = products.find(p => p.name === nameOfURL);

        if (product) {
            productDetailContainer.innerHTML = `
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 my-5 align-items-center justify-content-center g-3">
                    <div class="col-12 col-lg-4 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-3 h-100 transition-card">
                            <div class="position-relative">
                                <img src="${product.image1}" class="card-img-top rounded-top-3 img-fluid" style="object-fit: cover;">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-3 h-100 transition-card">
                            <div class="position-relative">
                                <img src="${product.image2}" class="card-img-top rounded-top-3 img-fluid" style="object-fit: cover;">
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-3 h-100 transition-card">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title fw-bold text-dark mb-1">${product.brand}</h5>
                                <p class="card-text mb-3">${product.title}</p>
                                <div class="d-flex align-items-center mb-1">
                                    <div class="me-2">
                                        ${generateStars(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length || 0)}
                                        <small class="">(${product.comments})</small>
                                        <div class="card-text mb-3">
                                            <a href="" style="color: #222; text-decoration: underline;">
                                                <span><i class="fa-solid fa-comment" style="color: #cab796;"></i></span>
                                                Rate the Product
                                            </a>
                                        </div>
                                        <div class="card-text mb-3">Seller : <span style="color:#428bca;">${product.seller}</span> (Return Period: 14 Days)</div>
                                    </div>
                                </div>
                                <div class="mt-auto">
                                    <hr style="width:100%; margin: 5px;">
                                    <div class="d-flex align-items-center">
                                        <span class="display-6 fw-bold"  style="dcolor:#222;">${product.price}</span>
                                    </div>
                                    <hr style="width:100%; margin: 5px;">
                                    <button class="sepeteEkle btn w-100 mt-3"  style="background-color:#D8C4A0 ; color:#222;" data-name="${product.name}">
                                   
                                        <i class="fa-solid fa-cart-shopping me-2"></i>Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="card border-0 shadow-sm rounded-3 h-100 transition-card mt-3">
                            <div class="card-body d-flex flex-column">
                                <p class="card-text mt-1 mb-1">This product will be shipped by seller <span style="color:#428bca;">${product.seller}</span>. </p>
                                <hr style="height: 1px; border: 0;border-top: 1px solid rgba(0, 0, 0, 0.08);margin: 10px; padding: 0;">
                                <p class="card-text text-left mt-1 mb-1"> <span><i class="fa-solid fa-rotate-left" style="color: #222;"></i></span> Returns within  <strong>10 days</strong>. </p>
                                <hr style="height: 1px; border: 0; border-top: 1px solid rgba(0, 0, 0, 0.08);margin: 10px; padding: 0;">
                                <p class="card-text text-left mt-1 mb-1" style="font-size: 17px;"> <span><i class="fi fi-br-percent-70" style="color: #428bca; font-size: 22px; padding: 3px;"></i></span> Don’t miss discounts of up to 70%! </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-3 mt-4 mb-2">
                    <div class="col-12 col-lg-12">
                        <div class="card-body" style="background-color:#ebf0f5;">
                            <h5 class="card-title" style="font-weight:700;">Ürün Değerlendirme</h5>
                            <div class="review-list">
                                ${product.reviews.map(review => `
                                    <div class="review-item mb-4">
                                        <div class="d-flex align-items-center mb-1">
                                            ${generateStars(review.rating)}
                                        </div>
                                        <p class="fw-bold mb-1">${review.user}</p>
                                        <p class="mb-2">${review.text}</p>
                                    </div>
                                    <hr style="width:100%; margin-top: 0; margin-bottom: 16px;">
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            productDetailContainer.innerHTML = `<p class="text-danger">Ürün bulunamadı.</p>`;
        }
    }

    // product.html için kod
    const productContainer = document.querySelector('#product-list-container');
    if (productContainer) { // Sadece product.html sayfasında çalışacak kodlar
        // Ürünleri HTML'e yerleştiren fonksiyon
        function displayProducts(filteredProducts, categoryToHighlight = 'All') {
            let htmlContent = '';
            if (filteredProducts.length === 0) {
                htmlContent = '<p class="text-center text-muted col-12">Bu kategoriye ait ürün bulunamadı.</p>';
            } else {
                filteredProducts.forEach(product => {
                    htmlContent += `
                        <div class="col-6 col-lg-4 col-xl-3 d-flex">
                            <a href="product-detail.html?name=${product.name}" class="card-link">
                                <div class="card border-0 shadow-sm rounded-3 h-100 transition-card flex-fill">
                                    <div class="position-relative">
                                        <img src="${product.image1}"
                                          class="card-img-top rounded-top-3 img-fluid"
                                         style="object-fit: cover;"/>
                                        <span class="position-absolute top-0 end-0 m-2 badge bg-light text-dark rounded-pill px-3 py-2 shadow-sm">
                                            <i class="fa-solid fa-palette me-1 text-primary"></i>3 Color
                                        </span>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title fw-bold text-dark mb-1">${product.brand}</h5>
                                        <p class="card-text text-muted mb-3">${product.title}</p>
                                        <div class="d-flex align-items-center mb-1">
                                            <div class="me-2">
                                                ${generateStars(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length || 0)}
                                                <small class="text-muted">(${product.comments})</small>
                                            </div>
                                        </div>
                                        <div class="mt-auto">
                                            <div class="d-flex align-items-center">
                                                <span class="display-6 fw-bold" style="color:black;">${product.price}</span>
                                            </div>
                                            <button class="sepeteEkle btn w-100 mt-auto" style="background-color:#cab796; color:black;" data-name="${product.name}">
                                                
                                                <i class="fa-solid fa-cart-shopping me-2"></i>Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                });
            }
            productContainer.innerHTML = htmlContent;

            // Highlight the active button in the horizontal filter
            document.querySelectorAll('#category-filter-buttons .btn').forEach(button => {
                if (button.dataset.category === categoryToHighlight) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });

            // Highlight the active link in the navbar dropdown
            document.querySelectorAll('.Product-drowdown_menu a').forEach(link => {
                if (link.dataset.category === categoryToHighlight) {
                    link.classList.add('active-nav-link'); // Yeni bir CSS sınıfı ekleyebilirsin
                } else {
                    link.classList.remove('active-nav-link');
                }
            });
        }


        // Kategori filtreleme butonlarına olay dinleyici ekle (Navbar için)
        document.querySelectorAll('.Product-drowdown_menu a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
                const category = this.dataset.category; // data-category özelliğini al
                let filteredProducts;
                if (category === 'All') {
                    filteredProducts = products;
                } else {
                    filteredProducts = products.filter(product => product.category === category);
                }
                displayProducts(filteredProducts, category); // Kategoriyi de gönder
                // URL'yi güncelle
                const newUrl = `${window.location.origin}${window.location.pathname}?category=${encodeURIComponent(category)}`;
                history.pushState({ category: category }, '', newUrl);
            });
        });

        // product.html sayfasındaki filtreleme butonlarına olay dinleyici ekle (Yeni eklenen filtreleme paneli için)
        document.querySelectorAll('#category-filter-buttons .btn').forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                let filteredProducts;
                if (category === 'All') {
                    filteredProducts = products;
                } else {
                    filteredProducts = products.filter(product => product.category === category);
                }
                displayProducts(filteredProducts, category); // Kategoriyi de gönder
                // URL'yi güncelle
                const newUrl = `${window.location.origin}${window.location.pathname}?category=${encodeURIComponent(category)}`;
                history.pushState({ category: category }, '', newUrl);
            });
        });


        // Ana "Products" linkine tıklandığında tüm ürünleri göstermek için
        const mainProductsLink = document.querySelector('.product > a[href="product.html"]');
        if (mainProductsLink) { // Linkin varlığını kontrol et
            mainProductsLink.addEventListener('click', function(event) {
                event.preventDefault();
                displayProducts(products, 'All'); // Tüm ürünleri göster ve 'All' olarak işaretle
                // URL'yi güncelle
                const newUrl = `${window.location.origin}${window.location.pathname}`; // Kategori parametresi olmadan
                history.pushState({}, '', newUrl);
            });
        }

        // Tarayıcının geri/ileri tuşlarına basıldığında URL'yi ve içeriği güncelle
        window.addEventListener('popstate', function(event) {
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');
            if (category) {
                const decodedCategory = decodeURIComponent(category);
                const filteredProducts = products.filter(product => product.category === decodedCategory);
                displayProducts(filteredProducts, decodedCategory);
            } else {
                displayProducts(products, 'All');
            }
        });


        // Sayfa yüklendiğinde URL'deki kategori parametresini kontrol et ve ilk yüklemeyi yap
        const urlParams = new URLSearchParams(window.location.search);
        const initialCategory = urlParams.get('category');

        if (initialCategory) {
            const decodedCategory = decodeURIComponent(initialCategory);
            const filteredProducts = products.filter(product => product.category === decodedCategory);
            displayProducts(filteredProducts, decodedCategory);
        } else {
            displayProducts(products, 'All'); // Başlangıçta tüm ürünleri göster ve 'All' olarak işaretle
        }
    }
});