//who
const crazyButton = document.querySelector(".btn-crazy");


//what
function goCrazy() {
    const offsetLeft = Math.random() * window.innerWidth;
    const offsetTop = Math.random() * window.innerHeight;
    crazyButton.style.top = offsetTop + 'px';
    crazyButton.style.left = offsetLeft + 'px';

}
//when
crazyButton.addEventListener("mouseenter",goCrazy)