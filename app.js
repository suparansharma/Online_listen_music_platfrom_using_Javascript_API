const showSearchSongs =() =>{

    const typeSong = document.getElementById("typeSong").value;
    const url = `https://api.lyrics.ovh/suggest/${typeSong}`;

    fetch(url)
    .then(res => res.json())
    .then(data => showAllSong(data.data));
   
}

const showAllSong= songs =>{
    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const containerSongs = document.getElementById("containerSongs");
        containerSongs.innerHTML = '    ';
        const containerSongDetails = document.createElement('div');
         containerSongDetails.innerHTML = `
        
        <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onClick="showLyrics('${song.artist.name}','${song.title}')"  class="btn btn-success">Get Lyrics</button>
        </div>
    </div>

        `
        containerSongs.appendChild(containerSongDetails);

    }
}


const showLyrics =(artist,title)=>{

    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>showLyricsLine(data))
    
    //console.log(data);
}

const showLyricsLine = line =>{

    const lyricsArea = document.getElementById("lyricsArea");

    const p = document.createElement('p');
    p.innerHTML=line.lyrics;
    lyricsArea.appendChild(p);
}
