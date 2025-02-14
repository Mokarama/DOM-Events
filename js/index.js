console.log('This is separated File');

function fourButton() {
    document.body.style.backgroundColor ='black';
    document.body.style.color ='white';
}

//[Majhe majhe use korbo]
{/* <button onclick="fourButton()">Four Button</button> */}
function fiveButton() {
    document.body.style.margin ='50px';
    document.body.style.justifyContent='center';
   
}

//option-03
//eight-button
const eightNumBtn =document.getElementById('eight-button');
eightNumBtn.onclick = eightBtn;

function eightBtn(){
    document.body.style.backgroundColor ='coral';
}


const sixNumButton =document.getElementById('make-six');
// console.log(sixNumButton)

sixNumButton.onclick =makeSix;

function makeSix(){
  document.body.style.backgroundColor =('red')
}
//--------------
const sevenNumBtn =document.getElementById('seven-button');
sevenNumBtn.onclick =makeSeven;
  

function makeSeven() {
  document.body.style.backgroundColor ='blue';
  document.body.style.margin ='50px';
  document.body.style.padding ='50px';
  document.body.style.color = 'white';
}
//option-03 another 
const nineNumBtn =document.getElementById('nine-button');

     nineNumBtn.onclick = function nineBtn() {
        document.body.style.backgroundColor ='darkorchid';
     }


//----option-04--
const makePinkBtn =document.getElementById('make-pink');

makePinkBtn.addEventListener('click',makePink );

function makePink() {
    document.body.style.backgroundColor ='pink';
}
//------------
const makeDarkviolet =document.getElementById('make-darkviolet');

makeDarkviolet.addEventListener('click',makeDarkvioletBtn)

function makeDarkvioletBtn() {
document.body.style.backgroundColor ='darkviolet';
}

//option-04 Another
const makeGreenBtn =document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor ='green';
  document.body.style.color ='white';
})

//option -04 Final 
//Important [pray somoy use korbo]
document.getElementById('make-aqua').addEventListener('click', function() {
    document.body.style.backgroundColor ='aqua';
  })
