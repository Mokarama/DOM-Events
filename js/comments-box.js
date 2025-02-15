 //step-01 [add event listener jug kora]
 document.getElementById('post').addEventListener('click',function(){
    
    
  
    //console.log('post button clicked')

    //step-02 [get the comments]

const commentsBox =document.getElementById('new-comment');

// console.log(commentsBox)

const newComment =commentsBox.value;

// console.log(newComment)
//step-03:set the comment inside the comment container
  //1.get the comment container
  //2.create a new element (p tag)
  //3.set the text oF the comment as innerText oF the p tg
  //4.add the p tag using appendChild

  const commentsContainer =document.getElementById('comments-container');

//   console.log(commentsContainer)

    const p =document.createElement('p');
    p.innerText=newComment;
    commentsContainer.appendChild(p);

    //step-04:clear the text area
    commentsBox.value='';

  })
