

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

function rangeFunction() {	
  var a = document.getElementById("lrange").value;
  console.log(a);
  var b = document.getElementById("rrange").value;
  console.log(b);
  var c = getRandomInt(a, b);
  x = document.getElementById("displayNumber");
  x.style.cssText  = "font-size:44px;color:white;"
  x = c;
  window.addEventListener("keydown", checkKeyPressR, false);
  function checkKeyPressR(key) {  
	  if (key.keyCode == "82") {
		  numbers.add(x);
	  }
  }

  if(b <= 99 && b >= 10){
    if(x < 100 && x >= 10){
      document.getElementById("displayNumber").innerHTML = x;
      }
      else if(x < 10 && x >= 0){
      num = "0" + x;
      document.getElementById("displayNumber").innerHTML = num;
    }
  }
  else if(b <= 9){
    document.getElementById("displayNumber").innerHTML = x;
  }
  else{
    if(x < 100 && x >= 10){
    num = "0" + x;
    document.getElementById("displayNumber").innerHTML = num;
    }
    else if(x < 10 && x >= 0){
    num = "00" + x;
    document.getElementById("displayNumber").innerHTML = num;
    }
    else{
    document.getElementById("displayNumber").innerHTML = x;
    }
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

