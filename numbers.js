

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
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
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
/*........................................................*/

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

/*........................................................*/

//var lettersArray = [165, 171, 120, 130, 146, 150, 171, 197, 208, 235, 236, 245, 273, 274, 284, 285, 286, 307, 310, 312, 316, 319, 314, 312, 341, 351, 352, 358, 359, 360, 361, 362, 364, 368, 379, 382, 389, 409, 410, 412, 413, 415, 418, 419, 428, 440, 446, 456, 458, 461, 462, 463, 464, 465, 466, 467, 471, 476, 477, 492, 493, 502, 506, 508, 509, 510, 511, 518, 519, 520, 526, 529, 530, 551, 568, 592, 593, 602, 603, 609, 612, 618, 619, 620, 624, 626, 628, 629, 630, 631, 635, 639, 640, 646, 645, 651, 652, 678, 679, 684, 693, 695, 697, 705, 708, 709, 714, 723, 724, 733, 735, 741, 742, 752, 753, 758, 764, 767, 768, 769, 772, 773, 778, 784, 785, 792, 793, 795, 796, 813, 826, 829, 832, 839, 840, 841, 842, 843, 849, 850, 853, 860, 867, 869, 873, 874, 882, 892, 893, 897, 894, 910, 911, 914, 952, 958, 959, 961, 962, 967, 968, 971, 973, 974, 978, 979, 982, 983, 985, 987, 989, 990, 992, 264, 445, 448, 449, 472, 473, 481, 514, 515, 517, 521, 531, 578, 579, 590, 594, 595, 596, 599, 600, 641, 642, 659, 660, 661, 662, 669, 670, 692, 706, 713, 740, 763, 800, 801, 802, 803, 806, 807, 828, 838, 865, 895, 917, 921, 937, 938, 939, 940];
/*........................................................
function rangeFunction() {	
  var a = document.getElementById("lrange").value;
  console.log(a);
  var b = document.getElementById("rrange").value;
  console.log(b);

  var c = getRandomInt(0, 221);
  x = document.getElementById("displayNumber");
  x.style.cssText  = "font-size:44px;color:white;"
  x = lettersArray[c];
  window.addEventListener("keydown", checkKeyPressR, false);
  function checkKeyPressR(key) {  
	  if (key.keyCode == "82") {
		  numbers.add(x);
	  }
  }
  
  document.getElementById("displayNumber").innerHTML = x;
}
........................................................*/






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
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

