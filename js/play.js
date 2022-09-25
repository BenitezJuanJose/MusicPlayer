const music = '../json/music.json';
const url = window.location.href;
let crearID=url.split("=");
const id= parseInt(crearID[1]);
let audio="";

loadMusic().then(songs => showTplMusic(songs))

function showTplMusic(songs){
    maxid=songs.music.length-1;
    audio = new Audio(songs.music[id].location);
    const tpl = document.querySelector(".tpl__song").content;
    const card = tpl.cloneNode(true);
    card.querySelector("#back").addEventListener("click",()=>{
        if(id==0){
            document.querySelector("#back").setAttribute("href", "./song.html?id="+(maxid));
        }else{
            document.querySelector("#back").setAttribute("href", "./song.html?id="+(id-1));
        }
    })
    card.querySelector("#next").addEventListener("click",()=>{
        if(id==maxid){
            document.querySelector("#next").setAttribute("href", "./song.html?id="+(0));
        }else{
            document.querySelector("#next").setAttribute("href", "./song.html?id="+(id+1));
        }
    })
    card.querySelector(".card__text--title").textContent=songs.music[id].name;
    card.querySelector(".card__text--artist").textContent=songs.music[id].artist;
    card.querySelector(".card__img").style.backgroundImage=`url(${songs.music[id].img})`;
    canciones.appendChild(card);

    document.querySelector("#play").addEventListener("click",()=>{
        play();
    })
   
}

async function loadMusic(){
    const request = await fetch(music);
    const songs = request.json();
    return songs; 
}

function play(){
    if(document.querySelector("#play").classList.contains("play")){ 
        audio.play();
        document.querySelector("#play").style.backgroundImage="url(../img/icons/pausa.png)";
        document.querySelector("#play").classList.remove("play");
        document.querySelector("#play").classList.add("pause");
    }else{
        audio.pause();
        document.querySelector("#play").style.backgroundImage="url(../img/icons/play.svg)";
        document.querySelector("#play").classList.add("play");
        document.querySelector("#play").classList.remove("pause");
    }
}
