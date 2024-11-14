function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    // Kar tanesinin başlangıç pozisyonu ve boyutu rastgele olsun
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

    document.getElementById("snow-container").appendChild(snowflake);

    // Kar tanesinin düşme animasyonu
    snowflake.animate(
        [
            { transform: `translateY(0px)` },
            { transform: `translateY(100vh)` }
        ],
        {
            duration: Math.random() * 3000 + 2000, // Hızını rastgele ayarlıyoruz
            easing: "linear",
            iterations: 1,
        }
    ).onfinish = () => {
        snowflake.remove(); // Ekrandan çıkınca kar tanesini sil
    };
}

// Kar tanelerini belli aralıklarla oluştur
setInterval(createSnowflake, 100);

document.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');
    const playMusic = () => {
        music.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    };

    // Kullanıcı etkileşimi sonrası müziği başlat
    document.body.addEventListener('click', playMusic);
    document.body.addEventListener('keydown', playMusic);
});

