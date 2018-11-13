let btn_ir_arriba = document.querySelector('.ir-arriba'),
    header        = document.querySelector('.header');

btn_ir_arriba.addEventListener('click', topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
	scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.ir-arriba').style.display = "block";
        document.querySelector('.header').style.padding ="0";
    } else {
        document.querySelector('.ir-arriba').style.display = "none";
        document.querySelector('.header').style.padding ="30px";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
    	slideIndex = 1
    } 
    if (n < 1) {
    	slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}