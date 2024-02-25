const buttonAll = document.querySelectorAll(".drum");

for (var i = 0; i < buttonAll.length; i++) {
    buttonAll[i].addEventListener("click", function () {
        // Get the first class name
        var className = this.classList[0];
        var aud = new Audio();
        switch (className) {
            case "w":
                aud.setAttribute("src", "./sounds/crash.mp3");
                aud.play();
                break;
            case "a":
                aud.setAttribute("src", "./sounds/kick-bass.mp3");
                aud.play();
                break;
            case "s":
                aud.setAttribute("src", "./sounds/snare.mp3");
                aud.play();
                break;
            case "d":
                aud.setAttribute("src", "./sounds/tom-1.mp3");
                aud.play();
                break;
            case "j":
                aud.setAttribute("src", "./sounds/tom-2.mp3");
                aud.play();
                break;
            case "k":
                aud.setAttribute("src", "./sounds/tom-3.mp3");
                aud.play();
                break;
            default:
                aud.setAttribute("src", "./sounds/tom-4.mp3");
                aud.play();
                break;
        }
        buttonAnimation(className)
    }
    );
}

document.addEventListener("keydown", function(e){
    try{
        document.querySelector("."+String(e.key)).click()
    }
    catch(excep){
        console.log("No sound there champ! "+ excep)
    }
})

function buttonAnimation(currentKey){
    var activebButton = document.querySelector("."+currentKey)
    
    activebButton.classList.add("pressed")
    
    setTimeout(()=>{activebButton.classList.remove("pressed")}, 200)
    
}