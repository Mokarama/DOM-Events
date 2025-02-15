document.getElementById('input-area').addEventListener('keyup',function(event) {
    const deleteText =event.target.value;
    //console.log(deleteText);
 const deleteButton =document.getElementById('btn-delete');
    if(deleteText ==='delete'){
        deleteButton.removeAttribute('disabled')  
    }

    else{
        deleteButton.setAttribute('disabled',true)
    }
})


//------
 document.getElementById('btn-delete').addEventListener('click',function() {
    //console.log('added')
    const textArea =document.getElementById('text-area');
    //console.log(textArea)
    textArea.style.display ='none';
 })