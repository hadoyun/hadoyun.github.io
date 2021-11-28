const backgrondImage = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
];

const chosenImage = backgrondImage[Math.floor(Math.random()*backgrondImage.length)];

//어디에도 없는 태그 생성!
const bgImage = document.createElement("img");
// chosenImage를 이용해 랜덤하게 주소 생성
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);