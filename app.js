
function confirmDonation(){


     const firstName = document.getElementById('fname-donate').value;
     const lastName = document.getElementById('lname-donate').value;
     const email = document.getElementById('email-donate').value;
     const cpr = document.getElementById('cpr-donate').value;

     const modalConfirm = document.getElementById('closeme');
    

const contactInfo = [firstName, lastName, email, cpr];

modalConfirm.style.display="block"

const menu = document.getElementById('menu');
contactInfo.forEach((field)=> {

    menu.appendChild(createMenuItem(field));
}
)

modalConfirm.style.display="block"
};


function createMenuItem(field) {
    let li = document.createElement('li');
    li.classList.add("listItem_confirm");
    li.textContent = field;
    return li;
};



//stop reload 
let form = document.getElementById("form-donate");

function handleForm(event) {
     event.preventDefault(); } 

form.addEventListener('submit', handleForm);



function closeModal() {
let modal = document.getElementById("closeme")

if (modal = style.display="block"){
    modal.style.display="none"}
    else modal.style.display="block"
};

