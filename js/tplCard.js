const music = '../json/music.json';

loadMusic()
    .then(songs => songs.music.forEach(song => {
        showTplMusic(song);
        
    }))

function showTplMusic(songs){
    const tpl = document.querySelector(".tpl__song").content;
    const card = tpl.cloneNode(true);
    card.querySelector("#btn-song").setAttribute("href", "./song.html?id="+songs.id);
    card.querySelector(".card__text--title").textContent=songs.name;
    card.querySelector(".card__text--artist").textContent=songs.artist;
    card.querySelector(".card__img").style.backgroundImage=`url(${songs.img})`;
    canciones.appendChild(card);
}

async function loadMusic(){
    const request = await fetch(music);
    const songs = request.json();
    return songs; 
}