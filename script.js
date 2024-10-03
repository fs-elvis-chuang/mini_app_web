/*
    註解
 */
// 取得 h1元素
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!~~~~~";

// 取得 h1元素
var myHTML = document.querySelector("html");
myHTML.onclick = function () {
    alert("Ouch! Stop poking me!!!!!!!!!!!!!!!!!!");
};

var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

