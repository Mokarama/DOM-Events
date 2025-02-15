//option-01
function handleEvent() {
    // console.log('Event handels')
    const handleClick =document.getElementById('change-text');
    handleClick.innerText ='Mokarama akter shanta';

 }

   //option-02
   document.getElementById('btn-update').addEventListener('click', function(){
    //console.log('add event lisener')
    const inputField =document.getElementById('input');

    const inputText =inputField.value;
    const p=document.getElementById('input-text-display');
    p.innerText =inputText;
  })

  //----------------
  document.getElementById('btn-change').addEventListener('click', function() {
    const inputArea =document.getElementById('input-area');

     const inputFieldArea =inputArea.value;
    const para =document.getElementById('document');
    para.innerText=inputFieldArea;
    inputArea.value ='';
   
})

//-----------
document.getElementById('green-btn').addEventListener('click', function() {
    const inputEmail =document.getElementById('input-email');
    
    const emailInput =inputEmail.value;
    
    const para2 =document.getElementById('para');
    para2.innerText=emailInput;
 })
