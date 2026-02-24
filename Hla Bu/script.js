const songs = [
{
number:1,
title:"Lalpa a tha",
lyrics:` Amazing grace how sweet the sound
That saved a wretch like me
I once was lost but now am found
Was blind but now I see`
  
},
{
number:2,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:3,
title:"Worship Song",
lyrics:`We worship You Lord
With all our hearts
Forever You reign`
},
{
number:4,
title:"Worship Song",
lyrics:`We worship You Lord
With all our hearts
Forever You reign`
},
{
number:5,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:6,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:7,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:8,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:9,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:10,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:11,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},
{
number:12,
title:"Praise Him",
lyrics:`Praise Him praise Him
Jesus our blessed Redeemer
Sing O earth His wonderful love proclaim`
},  
];

let current = 0;
let scrollInterval=null;
let fontSize=20;

/* Create list */
const list=document.getElementById("songList");

songs.forEach((song,i)=>{
    let div=document.createElement("div");
    div.className="song";
    div.textContent=`${song.number}. ${song.title}`;
    div.onclick=()=>loadSong(i);
    list.appendChild(div);
});

function loadSong(i){
    current=i;
    document.getElementById("songTitle").textContent =
        `${songs[i].number}. ${songs[i].title}`;

    document.getElementById("lyrics").textContent =
        songs[i].lyrics;

    document.getElementById("lyrics").scrollTop=0;
}

function nextSong(){
    current=(current+1)%songs.length;
    loadSong(current);
}

function prevSong(){
    current=(current-1+songs.length)%songs.length;
    loadSong(current);
}

/* Search */
function searchSong(){
    let value=document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".song").forEach(song=>{
        song.style.display =
        song.textContent.toLowerCase().includes(value)
        ? "block":"none";
    });
}

/* Auto Scroll */
function autoScroll(){
    if(scrollInterval){
        clearInterval(scrollInterval);
        scrollInterval=null;
        return;
    }

    scrollInterval=setInterval(()=>{
        document.getElementById("lyrics").scrollTop+=1;
    },60);
}

/* Font Size */
function changeFont(size){
    fontSize+=size;
    document.getElementById("lyrics").style.fontSize =
        fontSize+"px";
}

/* Dark Mode */
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

/* Favorites */
function favoriteSong(){
    let favs=JSON.parse(localStorage.getItem("favorites"))||[];
    favs.push(songs[current].number);
    localStorage.setItem("favorites",JSON.stringify(favs));
    alert("Added to favorites ❤️");
}

loadSong(0);
document.querySelectorAll(".song").forEach(s=>s.classList.remove("active"));
document.querySelectorAll(".song")[i].classList.add("active");