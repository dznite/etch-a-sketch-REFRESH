for (i=0;i<1024;i++){
    let box = document.createElement('div');
    box.classList.add('boxes');
    // box.textContent = `${i}`;
    box.id = `box${i}`;
    document.querySelector('#container').appendChild(box);
}

let boxes = document.querySelectorAll('.boxes');
boxes.forEach((box)=>{
    box.addEventListener("mouseover", event => {
        if(event.buttons === 1){
            event.target.classList.add("hovered");
            // event.target.textContent = "";
        }
    })
    }
)
const sizeBtn = document.querySelector('#resize');
sizeBtn.addEventListener("click",()=>{
    let desiredBoxAmt = Number(prompt("Please indicate the desired amount of boxes per side"));
})
