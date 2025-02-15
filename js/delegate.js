
// -------temon use korbo na-----

const items =document.getElementsByClassName('item');
    //console.log(items)
    for (const item of items) {
        //console.log(item)
        item.addEventListener('click',function(event){
            //console.log(item)
            //console.log(event.target.parentNode)
            event.target.parentNode.removeChild(event.target)
        })
    }

    document.getElementById('btn-add').addEventListener('click',function() {
        const liContainer =document.getElementById('list-container');
        // console.log(liContainer)
        const li =document.createElement('li');
        li.innerText = 'Create aNew Item';

        li.classList.add('item');
        liContainer.appendChild(li)
    })