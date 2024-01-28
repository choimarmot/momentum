const images = ["0.jpg", "1.jpg", "2.jpg"]; // 사진과 이름 같아야 함

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage}`;
