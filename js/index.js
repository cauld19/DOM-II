// Your code goes here

/* mouseover */

let funBusLogo = document.querySelector('.logo-heading')


funBusLogo.addEventListener('mouseover', (event) => {
    funBusLogo.style.transform = 'scale(1.3)';
    funBusLogo.style.transition = 'transform 0.5s';
});



/* mouse out */

funBusLogo.addEventListener('mouseout', (event) => {
    funBusLogo.style.transform = 'scale(1.0)';
    funBusLogo.style.transition = 'transform 0.5s';
});

/* keydown */

window.addEventListener("keydown", (event) => {
    alert("You have pressed a key down. Are you confused?");
});

/* wheel */

let mapImg = document.querySelector('.img-content img');
mapImg.addEventListener('wheel', (event) => {
    mapImg.style.transform = 'scale(0.5)';
    mapImg.style.transition = 'transform 0.5s';
})

/* drag */

let boatImg = document.querySelector('.img-content .img-fluid');
boatImg.addEventListener('drag', (event) => {
    boatImg.style.display = 'none';
})

/* copy */

window.addEventListener('copy', (event) => {
    alert('This is copyright material. do not copy')
})


/* dbclick */

let funBusImage = document.querySelector('.intro img');

funBusImage.addEventListener('dblclick', (event) => {
    funBusImage.style.transform = 'rotate(7deg)';
})

/* mousemove */

let allImage = document.querySelectorAll('img');

allImage.forEach((image) => {
    image.addEventListener('mousemove', (event) => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 2s';
    })
});

/* resize */

let bottomText = document.querySelectorAll('.destination p')

window.addEventListener('resize', (event) => {
    bottomText.forEach((item) => {
        item.style.color = 'red';
    })
})

/* focus */

let footer = document.querySelector('footer');

window.addEventListener('focus', (event) => {
    footer.style.background = "blue";
    footer.style.transition = "color 3s";
})

console.log(footer)

/* stop propogation */

let destinationContent = document.querySelector('.content-destination');
destinationContent.addEventListener('click', () => {
    destinationContent.style.background = 'grey'
})

let destinationContentPara = document.querySelector('.content-destination h2');
destinationContentPara.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('h2 was pressed')
});

/* prevent default */

let navLink = document.querySelectorAll('.nav-link');
navLink.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.style.color = "red"
        e.preventDefault();
    })
})
console.log(navLink)

