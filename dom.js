var form=document.getElementById('my-form');

form.addEventListener('submit',SaveToLocalStorage);

function SaveToLocalStorage(event){
    event.preventDefault();

    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const mobno=event.target.userphonno.value;

    const obj= { 
        name,
        email,
        mobno
    }
    

    localStorage.setItem(obj.email,JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj){
    const parentElem=document.getElementById('userlist');
    const childElem=document.createElement('li');
    childElem.textContent=obj.name + ' - '+ obj.email+' - '+ obj.mobno;

    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='DELETE';
    deleteButton.onclick=()=>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }
    const editButton=document.createElement('input');
    editButton.type='button';
    editButton.value='EDIT';
    editButton.onclick=()=>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
        document.getElementById('username').value=obj.name
        document.getElementById('useremail').value=obj.email
        document.getElementById('userphonno').value=obj.mobno

    }

    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);

}

    