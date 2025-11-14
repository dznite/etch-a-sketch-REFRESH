for (i=0;i<1024;i++){
    let box = document.createElement('div');
    box.classList.add('boxes');
    // box.textContent = `${i}`;
    box.id = `box${i}`;
    document.querySelector('#container').appendChild(box);
}

const boxes = document.querySelectorAll('.boxes');
boxes.forEach((box)=>{
    box.addEventListener("mouseover", event => {
        if(event.buttons === 1){
            event.target.classList.add("hovered");
            // event.target.textContent = "";
        }
    })}
)
const sizeBtn = document.querySelector('#resize');
sizeBtn.addEventListener("click",()=>{
    let inputBoxAmt = (prompt("Please indicate the desired amount of boxes per side"));
    let desiredBoxAmt = Number(inputBoxAmt);
    if (desiredBoxAmt <= 0 || desiredBoxAmt > 100 ){window.alert("Please enter a POSITIVE number from 1 - 100")}
    else if (Number.isNaN(desiredBoxAmt)){window.alert("Please enter a NUMERICAL value from 1 -100")}
    else if (!Number.isInteger(desiredBoxAmt)){window.alert("Please enter a WHOLE NUMBER from 1 - 100")} 
    else {
        let numDisplay = document.querySelector('#value');
        numDisplay.innerText = desiredBoxAmt;

        let originalGrid = document.querySelector("#container");
        while (originalGrid.firstElementChild){
            originalGrid.removeChild(originalGrid.firstElementChild);
        };

       for (i=0;i<(desiredBoxAmt*desiredBoxAmt);i++){
        let box = document.createElement('div');
        box.classList.add('boxes');
        // box.textContent = `${i}`;
        box.id = `box${i}`;
        document.querySelector('#container').appendChild(box);
        }

        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach((box)=>{
        box.addEventListener("mouseover", event => {
        if(event.buttons === 1){
            event.target.classList.add("hovered");
            // event.target.textContent = "";
        }
            })}
        )
        
        boxes.forEach((box)=>{
            box.style.width = "calc(100%/" + desiredBoxAmt + ")";
            box.style.height = "calc(100%/" + desiredBoxAmt + ")";
        })
    
    }})