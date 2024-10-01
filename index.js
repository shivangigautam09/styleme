const initSlider=()=>{
    const imageList = document.querySelector(".image-list")
    const slideButtons = document.querySelectorAll(".slide-button")
    //Slide image according to the slide button click
    slideButtons.forEach(button=>{
        button.addEventListener("click",() => {
            const direction = button.id === "arrow-left" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            // console.log(scrollAmount)
            imageList.scrollBy({left : scrollAmount,behaviour:"smooth"})
        });
    });
}
 window.addEventListener("load",initSlider);

 const screenWidth =document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;
console.log(screenWidth);
const Demo=document.getElementById("demo1")
const Demo1=document.getElementById("demo2")
const Demo2=document.getElementById("demo3")
let k="";
if(screen.width <=820) {
    Demo.innerHTML=k;
    Demo1.innerHTML=k;
    Demo2.innerHTML=k;
    console.log(Demo);
}

function toggle(){
    // var blur=document.getElementsByClassName("men-containerlast")
    var blur=document.getElementById('pop');
    blur.classList.toggle('active');
    var popup=document.getElementById('pop');
    popup.classList.toggle('active');
}