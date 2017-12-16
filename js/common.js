var menuButton = document.querySelector(".menu_button");
function menu() {
	var nav = document.querySelector(".navigation");
	var className = nav.className;
    if( className.indexOf(' toggle_on') == -1 ) {
        className += ' toggle_on';
        this.classList.add("on");
    }
    else {
        className = className.replace(' toggle_on', '');
        this.classList.remove("on");
        nav.style.maxHeight = "0px";
    }
    nav.className = className;
    if (nav.className.indexOf(' toggle_on') != -1 ) {
    	setTimeout(function(){
	    	nav.style.maxHeight = "450px";
	    }, 100)
    }   
    return false;
}
menuButton.addEventListener("click", menu, false); 


var searchButton = document.querySelector('.navigation input[type="button"]');

function collapsedField() {
	var searchField = document.querySelector('.navigation input[type="search"]');
	if( searchField.className.indexOf('collapsed') == -1 ) {
        return searchField.classList.add("collapsed");
    } 
    if( searchField.className.indexOf('collapsed') != -1 ) {
    	return searchField.classList.remove("collapsed");
    }
	
}

searchButton.addEventListener("click", collapsedField, false)
