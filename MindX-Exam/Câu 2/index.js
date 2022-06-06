


function myColor() {
  
  
    var color = document.getElementById('colorPicker').value;


    document.body.style.backgroundColor = color;


    document.getElementById('box').value = color;
}


document.getElementById('colorPicker')
    .addEventListener('input', myColor);let changeColor = ()=>{
    let body = document.querySelector('body');

    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
   
    body.style.backgroundColor = `rgb(${c1} , ${c2} , ${c3})`;

}