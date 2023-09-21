let songs = [
    {
        "name" : "Ashes in the Snow",
        "group" : "Mono",
        "album" : "Hymn to the Immortal Wind - 2009",
        "style" : [
            "neoclassical",
            "post rock"
        ],
        "picture" : "./assets/mono2.jpg",
        "lien" :"https://open.spotify.com/track/6ieH021IWLGOGifX0FUzsM"
    },
    {
        "name" : "Lonely Day",
        "group" : "System Of A down",
        "album" : "Hypnotize - 2005",
        "style" : [
            "heavy metal",
            "hard rock"
        ],
        "picture" : "./assets/lonely_day.png",
        "lien" :"https://open.spotify.com/track/1VNWaY3uNfoeWqb5U8x2QX"
    },
    {
        "name" : "Quand je marche",
        "group" : "Ben Mazué",
        "album" : "Paradis - 2020",
        "style" : [
            "Chanson française"
        ],
        "picture" : "./assets/mazue.jpg",
        "lien" :"https://open.spotify.com/album/6GTWw6zDBUcYagcL36pknb"
    },
    {
        "name" : "You Don't Know",
        "group" : "Milow",
        "album" : "Milow - 2009",
        "style" : [
            "Acoustic",
            "Pop rock"
        ],
        "picture" : "./assets/milow.jpg",
        "lien" :"https://open.spotify.com/track/6dMQuOXNGWXlSXesJvfUgd"
    },
    {
        "name" : "Verona",
        "group" : "Muse",
        "album" : "Will of the people - 2022",
        "style" : [
            "Alternative Rock"
        ],
        "picture" : "./assets/muse_carre.jpg",
        "lien" :"https://open.spotify.com/track/35E8of4u0B5PI8o4Hy0tWq"
    },
    {
        "name" : "A Letter To Elise",
        "group" : "The Cure",
        "album" : "Wish - 1992",
        "style" : [
           "Alternative Rock",
           "New Wave",
           "Pop Rock"
        ],
        "picture" : "./assets/cure_carre.jpg",
        "lien" : "https://open.spotify.com/track/4MvfmPViTS2nNe4GevK62r"
    },
    {
        "name" : "Guinea Pig",
        "group" : "Girls in Hawai",
        "album" : "Nocturne - 2017",
        "style" : [
            "Ballad"
        ],
        "picture" : "./assets/girls_in_hawai.jpg",
        "lien" :"https://open.spotify.com/track/3SfAHUPkjCLTwi23IbyLXA"
    },
    {
        "name" : "Mirror",
        "group" : "Loic Nottet",
        "album" : "Selfocracy - 2017",
        "style" : [
            "Indie Pop"
        ],
        "picture" : "./assets/nottet_carre.jpg",
        "lien" :"https://open.spotify.com/track/60d7tazuuyrx3FiU30eRja"
    },
    {
        "name" : "Easy Come Easy Go",
        "group" : "Alice On The Roof",
        "album" : "Higher - 2016",
        "style" : [
            "Synth-pop"
        ],
        "picture" : "./assets/alice_carre.jpg",
        "lien" :"https://open.spotify.com/album/4PDJk3Rk0ESXWGsHsAs5zm"
    },
    {
        "name" : "Conjouring",
        "group" : "IAMDDB",
        "album" : "Hoodrich Vol.3 - 2017",
        "style" : [
            "Trap"
        ],
        "picture" : "./assets/iamddb.jpg",
        "lien" :"https://open.spotify.com/track/2STP1Ow0iAeiSglnQmhWnP"
    }
];

let cards = document.querySelector(".cards");
songs.forEach(song => {

    let card = document.createElement("div");
    card.classList.add('w-full', 'shadow-[2px_2px_20px_1px_#00000024]','md:w-[45%]', 'md:mb-10', 'lg:w-[23%]' )
    cards.appendChild(card);

        let picture = document.createElement("img");
        picture.classList.add('w-full');
        picture.setAttribute('src',song.picture);
        card.appendChild(picture);

        let wrapContent = document.createElement("div");
        wrapContent.classList.add('flex', 'flex-col', 'justify-between','h-72','m-5');
        card.appendChild(wrapContent);

            let wrapStyle = document.createElement("div");
            wrapStyle.classList.add('flex','gap-2','flex-wrap');
            wrapContent.appendChild(wrapStyle);

            for (let st of song.style){
                let style = document.createElement("div");
                style.classList.add('bg-green-500', 'py-1','px-3','rounded','text-white');
                wrapStyle.appendChild(style);
                style.textContent = st;
            }

            let title = document.createElement("h2");
            title.classList.add('uppercase','font-bold','text-2xl','tracking-wider');
            wrapContent.appendChild(title);
            title.textContent = song.name;

            let author = document.createElement("h3");
            author.classList.add('text-gray-400','text-xl','font-bold');
            wrapContent.appendChild(author);
            author.textContent = song.group;

            let album = document.createElement("p");
            album.classList.add('italic');
            wrapContent.appendChild(album);
            album.textContent = song.album;

            let spotify = document.createElement("a");
            // author.classList.add('');
            spotify.setAttribute('href', song.lien);
            wrapContent.appendChild(spotify);

            let iconSpotify = document.createElement("img");
            iconSpotify.setAttribute('src','./assets/spotify.png');
            iconSpotify.classList.add('w-10')
            spotify.appendChild(iconSpotify);


})