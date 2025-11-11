for (i=0;i<256;i++){
    let box = document.createElement('div');
    box.classList.add('boxes');
    box.textContent = `${i}`;
    box.id = `box${i}`;
    document.querySelector('#container').appendChild(box);
}