//remove book in the menu
let list = document.querySelector('.list-container');

list.addEventListener('click', function(e){
    if (confirm('Are you sure to delete?') && e.target.className == 'delete') {
        let li = e.target.parentNode;
        list.removeChild(li)
    }
    return false;
})



//adding book in the menu
let addBar = document.querySelector('.add-bar');

addBar.addEventListener('submit',function(e){
    e.preventDefault();

    let value = addBar.querySelector('input[type="text"]').value
    
    if ( value == 'undefined' ) {

        location.reload()

    }else{

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let btn = document.createElement('button');
    
        li.textContent = value;
        btn.textContent ='Delete';
    
        ul.appendChild(li);
        ul.appendChild(btn);
        list.appendChild(ul)
    
        btn.classList.add('delete');
        ul.classList.add('list');

    }
})



