const images = ["0.jpg", "1.jpg", "2.jpg"]; // 사진과 이름 같아야 함

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = 'bg';
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
