let redBtn1 = document.getElementById("red1");
let blackBtn = document.getElementById("black");
let imgchange1 = document.getElementById("imgchange1");

redBtn1.onclick = function() {
  imgchange1.src = "./recursos/vipink.jpg";
};

blackBtn.onclick = function() {
  imgchange1.src = "./recursos/vi.webp";
};

let redBtn2 = document.getElementById("red2");
let blueBtn = document.getElementById("blue");
let imgchange2 = document.getElementById("imgchange2");

redBtn2.onclick = function() {
  imgchange2.src = "./recursos/jinxred.webp";
};

blueBtn.onclick = function() {
  imgchange2.src = "./recursos/jinxblue.webp";
};



