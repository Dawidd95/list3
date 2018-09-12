function init() {
	let acc = document.getElementsByClassName("intro__menu");

	for ( let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", showContent);
	}

	function showContent() {
        this.nextElementSibling.classList.toggle("open-overlay");
    }
}

document.addEventListener("DOMContentLoaded", init);