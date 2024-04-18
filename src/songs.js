function getAllArtists(array){
    let result = array.map(song => {
        return song.artist
    });
    //console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    //Write your code here
    let songsFromArtist = array.filter(song => song.artist === artist);
    return songsFromArtist;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    //Write your code here
    const newArray = array.slice();

    newArray.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    const soloStrings = newArray.map(objeto => objeto.title);

    return soloStrings.slice(0, 10);
    ;
};

//Exercise 4: Order by year, ascending
function orderByYear(songs){
    //Write your code here
    const newSongs = songs.slice();

    newSongs.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        }
    });

    return newSongs;
};

//Exercise 5: Filter songs by genre
function songsByGenre(songs, filter) {
    //Write your code here
    const filteredSongs = songs.filter((song) => song.genre.includes(filter));
    return filteredSongs;
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
