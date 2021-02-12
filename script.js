"use strict";

const subscribeModal = document.getElementById("subscribe-modal");
const close = subscribeModal.querySelector(".modal__close");

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

window.addEventListener("load", () => {
    if (!getCookie("modalClosed")) subscribeModal.classList.add('modal_active');
});

close.addEventListener("click", event => {
    event.preventDefault();
    
    let date = new Date;
    date.setDate(date.getDate() + 1);
    date = date.toUTCString();

    document.cookie = "modalClosed=true; Expires=" + date;
    subscribeModal.classList.remove("modal_active");
});





/*const subscribeModal = document.getElementById("subscribe-modal");

const getCookie = name => {
	const value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	
	if (parts.length === 2) {
		return parts
			.pop()
			.split(";")
			.shift();
	}
}

window.addEventListener("load", () => {
	getCookie("modalClose") ? false : subscribeModal.classList.add("modal_active");
})

document.addEventListener("click", event => {
	if (event.target.classList.contains("modal__close")) {
		document.cookie = "modalClose=true";
		subscribeModal.classList.remove("modal_active");
		getCookie("modalClose");
	}
})





console.log(document.cookie)*/

// From Internet
/*function getCookie(name) {
   var cookieName = name + "="
   var docCookie = document.cookie
   var cookieStart
   var end

   if (docCookie.length>0) {
      cookieStart = docCookie.indexOf(cookieName)
      if (cookieStart != -1) {
         cookieStart = cookieStart + cookieName.length
         end = docCookie.indexOf(";",cookieStart)
         if (end == -1) {
            end = docCookie.length
         }
         return unescape(docCookie.substring(cookieStart,end))
      }
   }
   return false
}*/



/*let modalClose = document.querySelector('.modal__close');
let subscribeModal = document.getElementById('subscribe-modal');

const getCookie = (name) => { 
    const value = "; " + document.cookie; 
    let parts = value.split("; " + name + "="); 
    
    if (parts.length === 2) { 
        return parts 
        .pop() 
        .split(";") 
        .shift(); 
    } 
}

window.addEventListener('load', function() {
    if (getCookie('modalOpen')) {
        return false;
    } else {
        subscribeModal.classList.add('modal_active'); 
    }
});

modalClose.addEventListener('click', function(event) {
    event.target.closest('.modal').classList.remove('modal_active');
    
    if (getCookie('modalOpen')) {
        return false;
    } else {
        let date = new Date();
    
        date.setDate(date.getDate() + 1);
        date = date.toUTCString();

        document.cookie = 'modalOpen=true; path=/; expires=' + date;
    }
});*/

