
var navn = document.getElementById ('fname');
var email= document.getElementById ('email-imput');
var besked = document.getElementById ('message-tous');
var knap = document.getElementById ('submit-btn-contact');
var popper = document.getElementById('popupcon');

var beskedinfo = [navn, email];
console.log('link');
function tak(){
    
    popper.style.display = "block";
/*
    if (navn.value.length == 0 && email.value.length == 0 && besked.value.length == false) {
        
        consol.log ('emt')
    }

    else {
       
        consol.log ('works')

    }

    */


}

var lukKnap = document.getElementById('close-btn')

    function closePopup() {

        lukKnap.style.display = "none"

    }




