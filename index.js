// Target switch and bulb tags
const switchBtn = document.getElementById('roundBtn')
const switchBtnInput = document.getElementById('id_switch')
const myImage = document.getElementById('bulbImg')

// Function
function toggleBulb(){
    if (switchBtnInput.checked === false) {
        myImage.src = "assets/bulbon.png";
        
    } else {
         myImage.src = "assets/bulboff.png"
        
    }
}
//Eventlistener
switchBtn.addEventListener('click', toggleBulb)