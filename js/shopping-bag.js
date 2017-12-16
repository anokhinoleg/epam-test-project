var size = document.querySelector("p.size");
var color = document.querySelector("p.color");

function activeProperty (e) {
	var parentTaget = e.currentTarget;
	e.preventDefault();
	var target = e.target;
	if ( target.tagName != "A" || target.className.indexOf(" active_prop") != -1 ) {
		return;
	}
	var parentTaget = parentTaget.children;
	for (var i = 0; i < parentTaget.length; i++) {
		parentTaget[i].classList.remove("active_prop");
	}
	return target.classList.add("active_prop");
}
size.addEventListener("click", activeProperty);
color.addEventListener("click", activeProperty);


var addToBagButton = document.querySelector("a.add");

function addItemToBag() {
	var totalPrice = document.querySelector("span.total_price");
	var quantity = document.querySelector("span.quantity");		
	var re = /([0-9]){1,}/;
	var i = totalPrice.innerHTML.search(re);
	var j = quantity.innerHTML.search(re);			
	var total = totalPrice.innerHTML.substring(i);
	var quan = quantity.innerHTML.substring(j,  quantity.innerHTML.length-1);
	quan = +quan + 1;
	quantity.innerHTML = quantity.innerHTML.replace(re, quan);
	var price = Math.floor(Math.random() * (400 - 250)) + 250;
	total = +total + price;
	totalPrice.innerHTML = totalPrice.innerHTML.replace(re, total);	
}

addToBagButton.addEventListener("click", addItemToBag, false);
