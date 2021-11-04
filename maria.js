function msgConfirm(){

let navn = document.getElementById ('fname').value;
let email= document.getElementById ('email-input').value;
let popper = document.getElementById('popupcon');
let besked = 'Vi har modtaget din besked og vi vil vende tilbage til dig hurtigst muligt. Vi har sendt et kvittering på at beskeden er sendt til din email';



var beskedinfo = [navn, besked, email];

console.log(beskedinfo);
    
    popper.style.display = "block";



    const menu = document.getElementById('text-area-popup');
beskedinfo.forEach((field)=> {

    menu.appendChild(createMenuItem(field));
})
};


function createMenuItem(field) {
    let p = document.createElement('p');
    p.classList.add("listItem_confirm");
    p.textContent = field;
    return p;

};


var lukKnap = document.getElementById('close-btn')

    function closePopup() {

        lukKnap.style.display = "none"

    };



     // if (navn.value.length == 0 && email.value.length == 0 && besked.value.length == false) {
        
    //     consol.log ('emt')
    // }

    // else ( navn.value.lenght < 2 && email.value.lenght < 2 && besked.value.length < 2 == true){
       
    //     consol.log ('works')

    // }


    let form = document.getElementById("maria-form");

function handleForm(event) {
     event.preventDefault(); } 

form.addEventListener('submit', handleForm);





