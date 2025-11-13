for (i=0;i<256;i++){
    let box = document.createElement('div');
    box.classList.add('boxes');
    box.textContent = `${i}`;
    box.id = `box${i}`;
    document.querySelector('#container').appendChild(box);
}

let boxes = document.querySelectorAll('.boxes');
boxes.forEach((box)=>{
    box.addEventListener("mouseover", event => {
        if(event.buttons === 1){
            event.target.style.backgroundColor = "tomato";
            event.target.textContent = "";
        }
    })
    }
)