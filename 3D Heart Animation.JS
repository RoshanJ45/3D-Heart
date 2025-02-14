        const heart = document.querySelector(".heart3d");
        for (let i = 1; i <= 36; i++) {
            let rib = document.createElement("div");
            rib.style.animation = `appear 1s ${i * 0.1}s infinite alternate linear`;
            rib.style.transform = `rotateY(${i * 10}deg) rotateZ(45deg) translateX(62px)`;
            heart.appendChild(rib);
        }
    
