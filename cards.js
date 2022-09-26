

function showOnClick() {
  var x = document.getElementById("displayNumber");
  var y = Math.floor(Math.random() * 1000);
  x.style.cssText  = "font-size:44px;color:white;"
  if (x.style.display === "none") {
	document.getElementById("displayNumber").innerHTML = y;
  } else {
    document.getElementById("displayNumber").innerHTML = y;
  }
}	
function showHelp() {
  var x = document.getElementById("Pomoc");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function showOptions() {
  var x = document.getElementById("Options");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '37') {
    }
    else if (e.keyCode == '39') {
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let num;
var x;
const numbers = new Set();


var imagesArray = ["deck/1.png", "deck/2.png", "deck/3.png", "deck/4.png", "deck/5.png", "deck/6.png", "deck/7.png", "deck/8.png", "deck/9.png", "deck/10.png", "deck/11.png", "deck/12.png", "deck/13.png", "deck/14.png", "deck/15.png", "deck/16png", "deck/17.png", "deck/18.png", "deck/19.png", "deck/21.png", "deck/22.png", "deck/23.png", "deck/24.png", "deck/25.png", "deck/26.png", "deck/27.png", "deck/28.png", "deck/29.png", "deck/30.png", "deck/31.png", "deck/32.png", "deck/33.png", "deck/34.png", "deck/35.png", "deck/36.png", "deck/37.png", "deck/38.png", "deck/39.png", "deck/40.png", "deck/41.png", "deck/42.png", "deck/43.png", "deck/44.png", "deck/45.png", "deck/46.png", "deck/47.png", "deck/48.png", "deck/49.png", "deck/50.png", "deck/51.png", "deck/52.png"];

function rangeFunction(){
	var a = document.getElementById("cards").value;
	console.log(a);
	if(a == 2){
		var karta2;
		var karta3;
		
		karta2 = Math.floor(Math.random() * 53);
		karta3 = karta2;
		document.canvas2.src = imagesArray[karta2];
		
		while(karta3 === karta2){
			karta3 = Math.floor(Math.random() * 53);
		}
		document.canvas3.src = imagesArray[karta3];
		document.canvas.src = src="blank.jpg";
		document.canvas4.src = src="blank.jpg";
	}
	else if(a == 3){
		var karta1;
		var karta2;
		var karta3;
		
		karta1 = Math.floor(Math.random() * 53);
		karta2 = karta1;
		karta3 = karta1;
		document.canvas.src = imagesArray[karta1];
		
		while(karta2 === karta1){
			karta2 = Math.floor(Math.random() * 53);
		}
		document.canvas2.src = imagesArray[karta2];
		
		while(karta3 === karta1 || karta3 === karta2){
			karta3 = Math.floor(Math.random() * 53);
		}
		document.canvas3.src = imagesArray[karta3];
	}
	else{
		var karta1;
		var karta2;
		var karta3;
		var karta4;
		
		karta1 = Math.floor(Math.random() * 53);
		karta2 = karta1;
		karta3 = karta1;
		karta4 = karta1;
		document.canvas.src = imagesArray[karta1];
		
		while(karta2 === karta1){
			karta2 = Math.floor(Math.random() * 53);
		}
		document.canvas2.src = imagesArray[karta2];
		
		while(karta3 === karta1 || karta3 === karta2){
			karta3 = Math.floor(Math.random() * 53);
		}
		document.canvas3.src = imagesArray[karta3];
		
		while(karta4 === karta1 || karta4 === karta2 || karta4 === karta3){
			karta4 = Math.floor(Math.random() * 53);
		}
		document.canvas4.src = imagesArray[karta4];
	}
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "39") {
	rangeFunction();
 }
}
window.addEventListener("keydown", checkKeyPressRight, false);

function checkKeyPressRight(key) {
	if (key.keyCode == "38") {
		rangeFunction2();
	}
}

function getRandomItem(set) {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

function rangeFunction2() {	
 if(numbers.size === 0){
	
 }
 else{
  var r = getRandomItem(numbers);
  if(r < 100 && r >= 10){
	num = "0" + r;
	document.getElementById("displayNumber").innerHTML = num;
  }
  else if(r < 10 && r >= 0){
	num = "00" + r;
	document.getElementById("displayNumber").innerHTML = num;
  }
  else{
	document.getElementById("displayNumber").innerHTML = r;
  }
 }
}

function autoPlay() {
	var v = document.getElementById("interwał").value;
	console.log(v);	
	myInterval = setInterval(rangeFunction, v);
}
window.addEventListener("keydown", checkKeyPressP, false);
function checkKeyPressP(key) {
	if (key.keyCode == "80") {
		clearInterval(myInterval);
	}
}
function showOptions2() {
  var x = document.getElementById("Options2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/*
  window.addEventListener("keydown", checkKeyPressT, false);
    function checkKeyPressT(key) {
	if (key.keyCode == "84") {
		const Arr = Array.from(numbers);
		var index = Arr.indexOf(r);
		if (index !== -1) {
		  Arr.splice(index, 1);
		}
		numbers = new Set(Arr);
	}
  }
*/

