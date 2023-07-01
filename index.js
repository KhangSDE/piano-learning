function playSound(note) {
    const audio = new Audio(`audio/key${note}.mp3`);
    audio.play()
    
    
}

function playSharp(note) {
    const sharpNotes = document.querySelectorAll(".notes");
    for(var i = 0; i < sharpNotes.length; i++) {
        if(sharpNotes[i].innerHTML.includes("#")) {
            let noteNumber = note;
            noteNumber++;

            const audio = new Audio(`audio/key${noteNumber}.mp3`);
            audio.play();
            break;
        }
    }
}

function hideNote() {
    const sharpNotes = document.querySelectorAll(".notes p");
    const fullNotes = document.querySelectorAll(".note p");
    const hideButton = document.querySelector(".hide");
    
    
    for(var i = 0; i < sharpNotes.length; i++) {
        sharpNotes[i].classList.toggle("hide");
        if(!sharpNotes[i].classList.contains("hide")) {
            hideButton.textContent = "Verstecke Noten"
        }
        else {
            hideButton.textContent = "Zeige Noten"
        }
    }
    for(var i = 0; i < fullNotes.length; i++) {
        fullNotes[i].classList.toggle("hide")
    }
    



}
let isActive = false;
function showSongs() {
    const songContainer = document.querySelector(".song-container");
    const songTitle = document.querySelectorAll(".song-container p");
    const songHeader = document.querySelector(".song-title");
    const songNotes = document.querySelector(".note-list");
    songContainer.classList.toggle("hidden");
    songContainer.style.transition = "0s"
    songHeader.classList.toggle("active")
    songNotes.classList.toggle("hide")
    
    for(var i = 0; i < songTitle.length; i++) {
        

        if(songContainer.classList.contains("hidden")) {
            songTitle[i].style.transition = "0.4s"
        }
        else if(!songContainer.classList.contains("hidden")) {
            songTitle[i].style.transition = "0s"
        }

    }
}

// TITLE
const songs = document.querySelectorAll(".song-container p");
const songTitle = document.querySelector(".song-title p");
const noteList = document.querySelector(".note-list");



for(var i = 0; i <songs.length; i++) {
    songs[i].addEventListener("click", (event)=> {


        let currentSongTitle = event.target.innerHTML;
        songTitle.innerHTML = currentSongTitle;
        noteList.classList.toggle("hide")
        console.log(currentSongTitle);
        // BITE ME
        if (currentSongTitle.toLowerCase() === "bite me") {
            noteList.innerHTML = "";
            noteList.insertAdjacentHTML("beforeend", biteMe);

        }


        // HBD
        if (currentSongTitle.toLowerCase() === "happy birthday") {
            noteList.innerHTML = "";
            noteList.insertAdjacentHTML("beforeend", happyBirthday)
        }
        })
    }

// SUCHE
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", (event)=> {
    if(event.keyCode === 13) {
        for(var i = 0; i <songs.length; i++) {
        if(searchInput.value.toLowerCase() === songs[i].innerHTML.toLowerCase()) {
            let currentSongTitle = songs[i].innerHTML;
            songTitle.innerHTML = currentSongTitle;
        }
    }

        searchInput.value ="";

    }
})

const biteMe = `            
<li>c#</li>
<li>g#</li>
<li>g#</li>
<li>g#</li>
<li>f#</li>
<li>e</li>
<li>a</li>
<li>c#</li>
<li>g#</li>
<li>g#</li>
<li>g#</li>
<li>f#</li>
<li>e#</li>
<li>d#</li>`

const happyBirthday = `            
<li>c</li>
<li>c</li>
<li>d</li>
<li>c</li>
<li>f</li>
<li>e</li>
<li>c</li>
<li>c</li>
<li>d</li>
<li>c</li>
<li>g</li>
<li>f</li>`

