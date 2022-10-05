
{
	setTimeout(() => document.body.classList.add('render'), 60);
	setInterval(() => { setRandomPhoto(); }, 2500);
    // const fontType = [ "Josefin Sans", "Open Sans", "Montserrat", "Kaushan Script", "Dancing Script"];
	// function setRandomFont() {
	// 	let fontNum = Math.floor(Math.random() * 5) + 1;
	// 	document.getElementsByClassName("home")[0].style.fontFamily = fontType[fontNum];
	// }
	function setRandomPhoto() {
		let num = Math.floor(Math.random() * 15) + 1;
		document.getElementById("propic").src = `./img/face${num}.jpeg`;
	}
}
