const configmenu = document.getElementById("configmenu");
const configsave = document.getElementById("configsave");

let drawlistCnt = inputlength.value;
let drawlist = [];
let flickDelay = flickdelay.value;

const row_1 = document.getElementById("row-1");
const row_3 = document.getElementById("row-3");
const row_0 = document.getElementById("row-0");
const row_2 = document.getElementById("row-2");
const row_4 = document.getElementById("row-4");
const congrat = document.getElementById("congrat");
const fireworks = document.getElementsByClassName("firework");
const btn = document.getElementById("btn");
const announcement = document.getElementById("announcement");
const flickTime = 3000;

function generateDrawlist(length) {
	drawlist = [];
	for(let i = 1; i <= length; i++) {	drawlist[i - 1] = 'LW-' + ('000' + i).substr(-3);}
    if (shufflelist.checked) 
		shuffle(drawlist);	
	drawlist = [drawlist[drawlist.length - 2], drawlist[drawlist.length - 1], ...drawlist, drawlist[0], drawlist[1]];
	setRows(2);
}

function importDrawlist(selectedFile) {
    var fr=new FileReader();
    fr.onload=function(){
        const arr = fr.result.split(/\r?\n/);
        drawlist = arr;
	    if (shufflelist.checked) 
			shuffle(drawlist);
        drawlist = [drawlist[drawlist.length - 2], drawlist[drawlist.length - 1], ...drawlist, drawlist[0], drawlist[1]];
		setRows(2);
    }
    fr.readAsText(selectedFile);
}

function changeBackground(selectedFile) {
    var fr=new FileReader();
    fr.onloadend=function(){
        document.body.style.backgroundImage = "url(" + fr.result + ")";    
    }
    fr.readAsDataURL(selectedFile);	
}

function setRows(i) {
	row_1.innerHTML = drawlist[i - 2];
	row_3.innerHTML = drawlist[i - 1];
	row_0.innerHTML = drawlist[i];
	row_2.innerHTML = drawlist[i + 1];
	row_4.innerHTML = drawlist[i + 2];
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let isDrawing = false;
let drawIndex = 0;
let drawShuffled = [];