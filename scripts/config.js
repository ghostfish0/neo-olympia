generateDrawlist(drawlistCnt);

if (inputlength_radio.checked == true) {
	inputfile.disabled = true;
	inputlength.disabled = false;	
}
if (inputfile_radio.checked == true) {
	inputfile.disabled = false;
	inputfile.required = true;
	inputlength.disabled = true;	
}

inputlength_radio.addEventListener('change', function() {
	inputfile.disabled = true;
	inputlength.disabled = false;
})
inputfile_radio.addEventListener('change', function() {
	inputfile.disabled = false;
	inputfile.required = true;
	inputlength.disabled = true;
})

configmenu.addEventListener('submit', reloadconfig, false);

document.addEventListener('keypress', function (e) {
	if (e.key == ',' && isDrawing == false) {
		if (configmenu.classList.toggle("hidden"))
			document.body.style.cursor = "none";
		else
			document.body.style.cursor = "inherit";
	}
});

function reloadconfig(event) {
	const data = new FormData(configmenu);
	// console.log(data);

	for(const entry of data) {
		switch(entry[0]) {
			case 'inputlength': generateDrawlist(entry[1]); break;
			case 'inputfile': importDrawlist(entry[1]); break;
			case 'bgimg': 
				if (entry[1].name == "" ) break;
				changeBackground(entry[1]); 
				break;
			case 'flickdelay': flickDelay = entry[1];
		}
	}

	event.preventDefault();
}
