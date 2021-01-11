//play the sound once the key is pressed
function playSound(code) {
    //find the audio element with the same key 
    const sound = document.querySelector(`audio[data-code="${code}"]`);
    //if that sound does not exist, return
    if(!sound) return;
    //play the sound, if someone clicks too quickly, make sure the audio starts again from the beginning
    sound.currentTime = 0;
    sound.play()
        //once it plays, change the button appearance
        .then(makeVisualEffect(code));
}

function makeVisualEffect(code) {
    //find specific key that was clicked
    const drumKitElement = document.querySelector(`div[data-code="${code}"]`);
    //add class to indicate it is playing
    drumKitElement.classList.add('playing');
}

function removeVisualEffect(event) {
    //checking only finished transform event
    if(event.propertyName != 'transform') return;
    //remove the visual effect of playing from the drum kit element passed to the function
    this.classList.remove('playing');
}

//add event listener to the drum kit elements to remove the visual effect once it is done
const drumKitElements = document.querySelectorAll('.key');
drumKitElements.forEach(drumKit => drumKit.addEventListener('transitionend', removeVisualEffect));
//add listener to the whole window to listen for the key presses
window.addEventListener('keydown', e => playSound(e.code));
