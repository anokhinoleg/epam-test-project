var filters = document.querySelector("section.filters ul");
var inserted = document.querySelector("div.inserted");

function selectedProp(e) {
	e.preventDefault();	
	var target = e.target;
	if ( target.tagName != "A" || target.className.indexOf(" selected_prop") != -1 || target.getAttribute("aria-haspopup")) {
		return;
	}
	var text = target.text;
	var parent = target.parentNode.parentNode;
	var selected_p = parent.parentNode.querySelector('a[aria-haspopup="true"]').children;

	selected_p[0].className = "opt"; 
	selected_p[1].style.fontSize = "14px";
	selected_p[1].style.color = "red";
	selected_p[1].innerHTML = text;

	var inserted_p = document.querySelectorAll('a[aria-haspopup="true"]');
	var arr = [];
	
	for (var i = 0; i < inserted_p.length; i++) {
		if (inserted_p[i].children[1].innerHTML == "") {
			arr[i] = "<p>" + inserted_p[i].textContent + " </p>";
		} else {
			arr[i] = "<p style='color:red;'>" + inserted_p[i].children[1].textContent + " </p>";
		}
			
	}

	inserted.innerHTML = arr.join(", ") ;		
	parent = parent.children;

	for (var i = 0; i < parent.length; i++) {
		parent[i].querySelector("a").classList.remove("selected_prop");
	}

	target.parentNode.parentNode.parentNode.classList.add("highlight");
	target.classList.add("selected_prop");
	
}

filters.addEventListener("click", selectedProp, false);


var filtButton = document.querySelector("button.filter_button");

function filtersBlock() {
	var filters = document.querySelector("section.filters");
    if(getComputedStyle(filters).display == "none") {
        filters.style.display = "block";
    }
    else {		    
	    filters.style.display = "none";		 
    }
}

filtButton.addEventListener("click", filtersBlock, false)

var links = document.querySelectorAll(".navigation ul li a");
var url = window.location.href;
links.forEach(function (currentValue, index, array) {
	url = url.substring(url.indexOf(currentValue.getAttribute("href")))
	if (url === currentValue.getAttribute("href")) {
		currentValue.classList.add("selected_prop");			
	}
});