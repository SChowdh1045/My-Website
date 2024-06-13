//******************** Changing the theme colors ********************//

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)
}

// "themeDots" gets divs which has the class "theme-dot", which are the color theme options for the website
let themeDots = document.getElementsByClassName("theme-dot")

// The for-loop is used to set up the event listeners when the page first loads, and after that, the event handlers take care of responding to the 'click' events.
// The for-loop does not run again when clicked on a div; only the event handler function runs.
for (let i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		// "dataset.mode" gets the value of the "data-mode" attribute in the specified div
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	const theme_style = document.querySelector("#theme-style");	 // For the website color theme (in the head tag of the html file)
	const navbar_img = document.querySelector("#home_btn");  // For the home button image color on the top left of the navbar
	const homepage_img = document.querySelector("#Website img");  // To change the color of my "Wesbite" image in the "Projects" section
	const toTopBtn = document.querySelector("#backToTop");  // The back-to-top button color

	//Button Background Colors ; can be default or when hovering over the button
	let lightDefault = "#252727";
	let lightHover = "#595959";

	let blueDefault = "#05407a";
	let blueHover = "#0066cc";
	
	let purpleDefault = "#862d86";
	let purpleHover = "#c653c6";

	if(mode == 'light'){
		theme_style.href = 'default.css';
		navbar_img.innerHTML = "<img src=\"images\\home-b.png\" alt=home button>"
		homepage_img.src = "images/homepage_W.png";

		toTopBtn.style.backgroundColor = lightDefault;
		btnBackgroundColor("mouseenter", lightHover);
		btnBackgroundColor("mouseleave", lightDefault);		
	}

	if(mode == 'blue'){
		theme_style.href = 'blue.css';
		navbar_img.innerHTML = "<img src=\"images\\home-w.png\" alt=home button>"
		homepage_img.src = "images/homepage_B.png";

		toTopBtn.style.backgroundColor = blueDefault;
		btnBackgroundColor("mouseenter", blueHover);
		btnBackgroundColor("mouseleave", blueDefault);
	}

	if(mode == 'purple'){
		theme_style.href = 'purple.css';
		navbar_img.innerHTML = "<img src=\"images\\home-w.png\" alt=home button>"
		homepage_img.src = "images/homepage_P.png";

		toTopBtn.style.backgroundColor = purpleDefault;
		btnBackgroundColor("mouseenter", purpleHover);
		btnBackgroundColor("mouseleave", purpleDefault);
	}

	localStorage.setItem('theme', mode)
}

// Function to avoid repetition in changing the scroll-to-top button background colors
function btnBackgroundColor(enter_leave, btn_Theme){
	const toTopBtn = document.querySelector("#backToTop");

	if(enter_leave === "mouseenter"){
		toTopBtn.addEventListener("mouseenter", () => {toTopBtn.style.backgroundColor = btn_Theme});
	}
	else if(enter_leave === "mouseleave"){
		toTopBtn.addEventListener("mouseleave", () => {toTopBtn.style.backgroundColor = btn_Theme});
	}
}

//******************** Showing/Disappearing the scroll-to-top button while scrolling ********************//

const toTop = document.querySelector("#backToTop");

// Selecting all the sections that I want to apply the scroll-animation to
const sections = document.querySelectorAll('.scroll_animation_inactive');

// To make the scroll-to-top button appear/disappear while scrolling
// Also to make the sections appear when they are in the viewport (the scroll-animation)
function handleScroll(){
	sections.forEach(section => {
		if (isInViewport(section)) {
		  section.classList.add('active');
		}
	  });

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

// Function to check if an element is in the viewport to apply the scroll-animation
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight - 50 || document.documentElement.clientHeight - 50) // 'window.innerHeight' is the height of the browser window. 'document.documentElement.clientHeight' is the height of the viewport.
    );
}

window.addEventListener("scroll", handleScroll);

//Just to scroll back to top of the page upon clicking the button
toTop.addEventListener("click", () => {window.scrollTo(0,0)});
