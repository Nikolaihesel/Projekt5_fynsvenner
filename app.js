
function confirmDonation(){
     const firstName = document.getElementById('fname-donate').value;
     const lastName = document.getElementById('lname-donate').value;
     const email = document.getElementById('email-donate').value;
     const cpr = document.getElementById('cpr-donate').value;

     const modalConfirm = document.getElementById('donate-modal');
    

const contactInfo = [firstName, lastName, email, cpr];

const menu = document.getElementById('menu');
contactInfo.forEach((field)=> {

    menu.appendChild(createMenuItem(field));
}
)
};


function createMenuItem(field) {
    let li = document.createElement('li');
    li.classList.add("listItem_confirm");
    li.textContent = field;
    return li;
}



//stop reload 
let form = document.getElementById("form-donate");

function handleForm(event) {
     event.preventDefault(); } 

form.addEventListener('submit', handleForm);


