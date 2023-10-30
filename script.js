const colorInput = document.querySelectorAll(".colorPiker");
const gradientBox = document.getElementById("gradientBox");
const selection = document.querySelector(".selection");
const copi = document.querySelector("#copiArea button");
const textCopi = document.querySelector("#copiArea span");

//generate a rndom num between 0 to 255.
let num = 0;
const rgbs = ()=>{
    Math.floor(Math.random()*255)
}
let boolian = 0;
const randNum = document.getElementById("randNum");



const generateGradient =()=>{
    //console.log("updateColor");
    let gradient;
    if(boolian === 1){
        gradient =  `background:linear-gradient(${selection.value},
             rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}),
             rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}))`;
    }else{gradient = `background:linear-gradient(${selection.value},${colorInput[0].value}, ${colorInput[1].value})`}
    textCopi.innerText = gradient;
    //console.log(selection);
   // console.log(colorInput[0].value);
    //console.log(gradient);
   gradientBox.style.background = gradient;
   boolian = 0;

}

colorInput.forEach(input=>{
    input.addEventListener("input",generateGradient);
})
selection.addEventListener("change",generateGradient);

copi.addEventListener("click",()=>{
    console.log("copid success...");
    copi.innerText = "successful..";
    copi.style.backgroundColor = "green";
    navigator.clipboard.writeText(textCopi.innerText);
    textCopi.style.color = "green";
})

randNum.addEventListener("click",()=>{
    boolian = 1;
   // console.log(boolian);
    generateGradient();
   // console.log(boolian);
})

