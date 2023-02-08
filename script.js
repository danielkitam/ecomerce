const bar = document.getElementById('bar');
const navBar = document.getElementById('navbar');
const closeIcon = document.getElementById('close');
const product = document.querySelector('.pro');

// function productHandler() {
//     // window.location.replace('http://www.google.com');
//     product[1].style.display = 'none';
// }

// product.addEventListener('click', productHandler);

if(bar) {
    bar.addEventListener('click', () => {
       // navBar.style.right = 0;
       navBar.classList.add('active');
    });
}

if(closeIcon) {
    closeIcon.addEventListener('click', () => {
       // navBar.style.right = '-350px';
       navBar.classList.remove('active');
    });
}

// let MainImg = document.getElementById('MainImg');
// let smallImg = document.getElementsByClassName('small-img');
// const imgUp = document.getElementById('im');

// imgUp.addEventListener('click', () => {
//     console.log(imgUp.src);
// });
