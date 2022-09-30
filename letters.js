

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




var num;
let x;
const numbers = new Set();
var lettersArray = ["AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AW", "BA", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BW", "CA", "CB", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CW", "DA", "DB", "DC", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DW", "EA", "EB", "ED", "EC", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EW", "FA", "FB", "FC", "FD", "FE", "FG", "FH", "FI", "FJ", "FK", "FL", "FM", "FN", "FO", "FP", "FQ", "FR", "FS", "FT", "FU", "FW", "GA", "GB", "GC", "GD", "GE", "GF", "GH", "GI", "GJ", "GK", "GL", "GM", "GN", "GO", "GP", "GQ", "GP", "GR", "GA", "GT", "GU", "GW", "HA", "HB", "HC", "HD", "HE", "HF", "HG", "HI", "HJ", "HK", "HL", "HM", "HN", "HO", "HP", "HQ", "HR", "HS", "HT", "HU", "HW", "IA", "IB", "IC", "ID", "IE", "IF", "IG", "IH", "IJ", "IK", "IL", "IM", "IN", "IO", "IP", "IQ", "IR", "IS", "IT", "IU", "IW", "JA", "JB", "JC", "JD", "JE", "JF", "JG", "JH", "JI", "JK", "JL", "JM", "JM", "JO", "JP", "JQ", "JR", "JS", "JT", "JU", "JW", "KA", "KB", "KC", "KD", "KE", "KF", "KG", "KH", "KI", "KJ", "KL", "KM", "KN", "KO", "KP", "KQ", "KR", "KS", "KT", "KU", "KW", "LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", "LI", "LI", "LK", "LM", "LN", "LO", "LP", "LQ", "LR", "LS", "LT", "LU", "LW", "MA", "MB", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MJ", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MW", "NA", "NB", "NC", "ND", "NE", "NF", "NG", "NH", "NI", "NJ", "NK", "NL", "NM", "NO", "NP", "NQ", "NR", "NS", "NT", "NU", "NW", "OA", "OB", "OC", "OD", "OE", "OF", "OG", "OH", "OI", "OJ", "OK", "OL", "OM", "ON", "OP", "OQ", "OR", "OS", "OT", "OU", "OW", "PA", "PB", "PC", "PD", "PE", "PF", "PG", "PH", "PI", "PJ", "PK", "PL", "PM", "PN", "PO", "PQ", "PR", "PS", "PT", "PU", "PW", "QA", "QB", "QC", "QD", "QE", "QF", "QG", "QH", "QI", "QJ", "QK", "QL", "QM", "QN", "QO", "QP", "QR", "QS", "QT", "QU", "QW", "RA", "RB", "RC", "RD", "RE", "RF", "RG", "RH", "RI", "RJ", "RK", "RL", "RM", "RN", "RO", "RP", "RS", "RT", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SF", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SP", "SQ", "SR", "ST", "SU", "SW", "TA", "TB", "TC", "TD", "TE", "TF", "TG", "TH", "TI", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TQ", "TR", "TS", "TU", "TW", "UA", "UB", "UC", "UD", "UE", "UF", "UG", "UH", "UI", "UJ", "UK", "UL", "UM", "UN", "UO", "UP", "UQ", "UR", "US", "UT", "UW", "WA", "WB", "WC", "WD", "WE", "WF", "WG", "WH", "WI", "WJ", "WK", "WL", "WM", "WN", "WO", "WP", "WQ", "WR", "WS", "WT", "WU"];

function rangeFunction() {	
  let a = document.getElementById("lrange").value;
  console.log(a);
  let b = document.getElementById("rrange").value;
  console.log(b);

  var indexa = lettersArray.indexOf(a);
  var indexb = lettersArray.indexOf(b);
  var c = getRandomInt(indexa, indexb);
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

