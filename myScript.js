var mainImages = document.querySelector("#main-container");
var arrowLeft = document.getElementById("word-content-arrow-left");
var arrowRight = document.getElementById("word-content-arrow-right");
var indexOfMainImage = 1;




arrowRight.addEventListener("click",function() {
    changeIndexOfMainImage(1);
})


arrowLeft.addEventListener("click",function() {
    changeIndexOfMainImage(-1);
})




function wordChange() {
    switch (indexOfMainImage)
    {
        case 1:
            document.querySelector("#word-title").innerHTML = "2023微信公开课Pro";
            document.querySelector("#word-content").innerHTML = "点击会看腾讯年度旗舰活动'2023微信公开课PRO-在场";
            break;

        case 2:
            document.querySelector("#word-title").innerHTML = "腾讯99公益日不断完善全民公益的互联网解决方案";
            document.querySelector("#word-content").innerHTML = "99公益日一直秉持全民公益的理念，鼓励网友通过网络将公益做成人人皆可参与的全民活动，为全民公益提供了互联网解决方案。";
            break;
        
        case 3:
            document.querySelector("#word-title").innerHTML = "腾讯携手行业伙伴开放专利，以数字化助力碳减排";
            document.querySelector("#word-content").innerHTML = "中国产业互联网发展联盟碳中和专业委员会及开放技术联盟成立。";
            break;
        case 4:
            document.querySelector("#word-title").innerHTML = "腾讯公布二零二二年第三季业绩";
            document.querySelector("#word-content").innerHTML = "";
            break;

    }
}


function changeIndexOfMainImage(i) {

    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.width = "10px";
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.backgroundColor = "white";
    

    indexOfMainImage += i;

    if (indexOfMainImage > 5) {
        indexOfMainImage = 1;
    } else if (indexOfMainImage < 1){
        indexOfMainImage = 5;
    }

    mainImages.style.backgroundImage = "url(image/main" + indexOfMainImage +".png)";
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.width = "30px";
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.backgroundColor = "#0052D9";

    wordChange();


    

    



}

function jumpToIndexOfImage(i) {
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.width = "10px";
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.backgroundColor = "white";
    indexOfMainImage = i;
    mainImages.style.backgroundImage = "url(image/main" + indexOfMainImage +".png)";
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.width = "30px";
    document.getElementsByClassName("dots")[indexOfMainImage - 1].style.backgroundColor = "#0052D9";
    
    wordChange();
}


















var lifeConnectBox = document.getElementById("active-box-image1");
var techologyBox = document.getElementById("active-box-image2");
var nowAndFutureBox =document.getElementById("active-box-image3");

var activeBoxContent1 = document.getElementById("active-box-word-content1");
var activeBoxContent2 = document.getElementById("active-box-word-content2");
var activeBoxContent3 = document.getElementById("active-box-word-content3");


activeBoxContent1.addEventListener("mouseout",function () {
    activeBoxContent1.style.animationName = "";
});

activeBoxContent2.addEventListener("mouseout",function () {
    activeBoxContent2.style.animationName = "";
});

activeBoxContent3.addEventListener("mouseout",function () {
    activeBoxContent3.style.animationName = "";
});


activeBoxContent1.addEventListener("mouseover",activeBoxContentAnimation1);

activeBoxContent2.addEventListener("mouseover",function () {
    activeBoxContentAnimation2();
});

activeBoxContent3 .addEventListener("mouseover",function () {
    activeBoxContentAnimation3();
});

function activeBoxContentAnimation1() {
    activeBoxContent1.style.animationName = "arrowFlowAnimation";
    activeBoxContent1.style.animationDuration = "0.5s";

    
}

function activeBoxContentAnimation2() {
    activeBoxContent2.style.animationName = "arrowFlowAnimation";
    activeBoxContent2.style.animationDuration = "0.5s";

}

function activeBoxContentAnimation3() {
    activeBoxContent3.style.animationName = "arrowFlowAnimation";
    activeBoxContent3.style.animationDuration = "0.5s";

}











var blueBox = document.getElementsByClassName("blue-block");
var arrowBox = document.getElementsByClassName("active-box-arrow");

function changeZIndex1() {
    lifeConnectBox.style.zIndex = "3";
    techologyBox.style.zIndex = "1";
    nowAndFutureBox.style.zIndex = "1";

    activeBoxContent1.style.transform = "translateX(30px)"
    activeBoxContent2.style.transform = "translateX(0px)"
    activeBoxContent3.style.transform = "translateX(0px)"
    activeBoxContent1.style.color = "white";
    activeBoxContent2.style.color = "rgb(141, 143, 146)";
    activeBoxContent3.style.color = "rgb(141, 143, 146)";
    blueBox[0].style.display = "block";
    blueBox[1].style.display = "none";
    blueBox[2].style.display = "none";
    arrowBox[0].style.display = "block";
    arrowBox[1].style.display = "none";
    arrowBox[2].style.display = "none";

}
function changeZIndex2() {
    lifeConnectBox.style.zIndex = "1";
    techologyBox.style.zIndex = "3";
    nowAndFutureBox.style.zIndex = "1";

    activeBoxContent2.style.transform = "translateX(30px)"
    activeBoxContent1.style.transform = "translateX(0px)"
    activeBoxContent3.style.transform = "translateX(0px)"
    activeBoxContent2.style.color = "white";
    activeBoxContent1.style.color = "rgb(141, 143, 146)";
    activeBoxContent3.style.color = "rgb(141, 143, 146)";
    blueBox[1].style.display = "block";
    blueBox[0].style.display = "none";
    blueBox[2].style.display = "none";
    arrowBox[1].style.display = "block";
    arrowBox[0].style.display = "none";
    arrowBox[2].style.display = "none";
}


function changeZIndex3() {
    lifeConnectBox.style.zIndex = "1";
    techologyBox.style.zIndex = "1";
    nowAndFutureBox.style.zIndex = "3";
    activeBoxContent3.style.transform = "translateX(30px)"
    activeBoxContent2.style.transform = "translateX(0px)"
    activeBoxContent1.style.transform = "translateX(0px)"
    activeBoxContent3.style.color = "white";
    activeBoxContent2.style.color = "rgb(141, 143, 146)";
    activeBoxContent1.style.color = "rgb(141, 143, 146)";
    blueBox[2].style.display = "block";
    blueBox[1].style.display = "none";
    blueBox[0].style.display = "none";
    arrowBox[2].style.display = "block";
    arrowBox[1].style.display = "none";
    arrowBox[0].style.display = "none";
}















let joinUs = document.querySelector("#join-us-media-menu");
let isFlowJoin = false;
function menuShowJoin() {

    if (isFlowJoin == false)
    {
        joinUs.style.display = "block"
        isFlowJoin = true;
    } else
    {
        joinUs.style.display = "none"
        isFlowJoin = false;
    }
}


let ConnectUs = document.querySelector("#connect-us-media-menu");
let isFlowConnect = false;
function menuShowConnect() {

    if (isFlowConnect == false)
    {
        ConnectUs.style.display = "block"
        isFlowConnect = true;
    } else
    {
        ConnectUs.style.display = "none"
        isFlowConnect = false;
    }
}


let lawinformation = document.querySelector("#law-information-media-menu");
let isFlowLaw = false;
function menuShowLaw() {

    if (isFlowLaw == false)
    {
        lawinformation.style.display = "block"
        isFlowLaw = true;
    } else
    {
        lawinformation.style.display = "none"
        isFlowLaw = false;
    }
}













var confidenceImage = document.getElementsByClassName("tencent-move-image-content");
let indexOfConfidenceImage = 0;

var tencentImageContent1 = document.getElementById("tencent-move-image-content1");
var tencentImageContent2 = document.getElementById("tencent-move-image-content2");
var tencentImageContent3 = document.getElementById("tencent-move-image-content3");
var tencentImageContent4 = document.getElementById("tencent-move-image-content4");


tencentImageContent1.style.animationName = "connect-image-flow-animation";
tencentImageContent1.style.animationDuration = "0.3s";
tencentImageContent1.style.animationFillMode = "both";


tencentImageContent2.style.animationName = "connect-image-flow-animation";
tencentImageContent2.style.animationDuration = "0.3s";
tencentImageContent2.style.animationFillMode = "both";


tencentImageContent3.style.animationName = "connect-image-flow-animation";
tencentImageContent3.style.animationDuration = "0.3s";
tencentImageContent3.style.animationFillMode = "both";


tencentImageContent4.style.animationName = "connect-image-flow-animation";
tencentImageContent4.style.animationDuration = "0.3s";
tencentImageContent4.style.animationFillMode = "both";


function changeIndexOfConfidenceImage(i) {


    confidenceImage[indexOfConfidenceImage].style.display = "none";
    indexOfConfidenceImage += i;
    
    if (indexOfConfidenceImage > 3) {
        indexOfConfidenceImage = 0;
    } else if (indexOfConfidenceImage < 0){
        indexOfConfidenceImage = 3;
    }
    confidenceImage[indexOfConfidenceImage].style.display = "block";


}

var index = 0;

var images = document.getElementsByClassName("crazy-day");

	for (var i = 1; i < images.length; i++) {
		images[i].style.display = "none";
	}

	setInterval(function() {
		imageChange(1)
	},5000);

    function imageChange(i) {
	
        images[index].style.display = "none";
    
        index += i;
        
        
        if(index > images.length - 1) {
            index = 0;
        } else if (index < 0) {
            index = images.length - 1;
        }
        
        images[index].style.display = "block";
        
    }










