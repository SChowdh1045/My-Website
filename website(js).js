//******************** Changing the theme colors ********************//

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")


for (let i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

//Function to avoid repetition in changing button background colors
function btnBackgroundColor(enter_leave,btn_Theme){
	const toTopBtn = document.querySelector("#backToTop");

	if(enter_leave === "mouseenter"){
		toTopBtn.addEventListener("mouseenter", () => {toTopBtn.style.backgroundColor = btn_Theme});
	}
	else if(enter_leave === "mouseleave"){
		toTopBtn.addEventListener("mouseleave", () => {toTopBtn.style.backgroundColor = btn_Theme});
	}
}

function setTheme(mode){
	const toTopBtn = document.querySelector("#backToTop");

	//Button Background Colors ; can be default or when hovering over the button
	let lightDefault = "#252727";
	let lightHover = "#595959";
	let blueDefault = "#05407a";
	let blueHover = "#0066cc";
	let purpleDefault = "#862d86";
	let purpleHover = "#c653c6";

	if(mode == 'light'){
		document.querySelector("#theme-style").href = 'default.css'
		toTopBtn.style.backgroundColor = lightDefault;
		btnBackgroundColor("mouseenter", lightHover);
		btnBackgroundColor("mouseleave", lightDefault);
	}

	if(mode == 'blue'){
		document.querySelector("#theme-style").href = 'blue.css'
		toTopBtn.style.backgroundColor = blueDefault;
		btnBackgroundColor("mouseenter", blueHover);
		btnBackgroundColor("mouseleave", blueDefault);
	}

	if(mode == 'purple'){
		document.querySelector("#theme-style").href = 'purple.css'
		toTopBtn.style.backgroundColor = purpleDefault;
		btnBackgroundColor("mouseenter", purpleHover);
		btnBackgroundColor("mouseleave", purpleDefault);
	}

	localStorage.setItem('theme', mode)
}


//******************** Showing/Disappearing the scroll-to-top button while scrolling ********************//

const toTop = document.querySelector("#backToTop");

//To make the scroll-to-top button appear/disappear while scrolling
function scrollingFunction(){
	if(window.scrollY > 420){
		if(!toTop.classList.contains("btnEntrance")){
			toTop.classList.remove("btnExit");
			toTop.classList.add("btnEntrance");
			toTop.style.display = "block";
		}
	}
	else{
		if(toTop.classList.contains("btnEntrance")){
			toTop.classList.remove("btnEntrance");
			toTop.classList.add("btnExit");
			setTimeout(() => {toTop.style.display = "none"}, 200); //Add a delay before making the button disappear
		}
	}
}

document.addEventListener("scroll", scrollingFunction);

//Just to scroll back to top of the page upon clicking the button
toTop.addEventListener("click", () => {window.scrollTo(0,0)});


//******************** Contact Form ********************//