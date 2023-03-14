let getTopBanner = document.getElementsByClassName("item-container-items");
let getTopBarMenu = document.getElementById("top-menu");


for (let i = 0; i < getTopBanner.length; i++) {
    




    getTopBanner[i].addEventListener("mouseover", function() {
        showMenu();
        
    });
    
}


document.getElementById("top-menu").addEventListener("mouseleave", function() {
    closeMenu();
});


function showMenu() {

    time = setInterval(function() {
     getTopBarMenu.style.offsetHeight = getTopBarMenu.style.offsetHeight + 10 + 'px';
    },5)

    console.log(getTopBarMenu.style.offsetHeight);
    setTimeout(function() {
     
     clearInterval(time);
     getTopBarMenu.style.display = "block";
    },200);

}

function closeMenu() {


       setInterval(function() {
        getTopBarMenu.style.offsetHeight = getTopBarMenu.style.offsetHeight - 10 + 'px';
       },5)

       setTimeout(function() {
        getTopBarMenu.style.display = "none";
       },200);
};



var topMenuDownContent = document.getElementsByClassName("top-menu-items-down");
var topMenuItems = document.getElementsByClassName("item-container-menu-items");

for (let i = 0; i < topMenuItems.length; i++) {
    topMenuItems[i].addEventListener("mouseover",function() {
        topMenuDownContent[i].style.visibility = "visible";
    })
    
}


for (let i = 0; i < topMenuDownContent.length; i++) {
    topMenuDownContent[i].addEventListener("mouseleave",function() {
        topMenuDownContent[i].style.visibility = "hidden";
    })
    
}











var mobileMenuButton = document.querySelector("#menu-button");
var mobileMenu = document.querySelector("#mobile-menu");
var flag = false;

mobileMenuButton.addEventListener("click",function() {
    if (flag == false) {
        flag = true;
        mobileMenu.style.display = "block";
    } else
    {
        flag = false;
        mobileMenu.style.display = "none";
    }
});