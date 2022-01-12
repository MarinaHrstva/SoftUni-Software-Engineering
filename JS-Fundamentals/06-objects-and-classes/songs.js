function songs(input) {
    let n = input.shift();
    let serchedType = input.pop()

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time
        }
    }

    let songs = [];
    for (let line of input) {
        let [typeList, name, time] = line.split('_');
        songs.push(new Song(typeList, name, time))
    }
    if (serchedType === 'all') {
        printSong(songs);
    } else {
        let filtered = songs.filter((s) => s.typeList === serchedType)
        printSong(filtered);
    }

    function printSong(array) {
        array.forEach((s) => console.log(s.name));
    }
}





songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

)