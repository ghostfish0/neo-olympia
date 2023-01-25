const top_side = document.getElementById("top-side");

const handleOnMove = e => {
	const p = e.clientY / window.innerHeight * 100;

	top_side.style.height = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);

// document.onmousemove = e => handleOnMove(e.touches[0]);