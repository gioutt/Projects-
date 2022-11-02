let songs = [
    {
        name: 'I love you - Billie Eilish',
        spotifyLink: 'https://open.spotify.com/track/6CcJMwBtXByIz4zQLzFkKc?si=95b7989458304cf1'
    },
    {
        name: 'Falling - Harry Styles',
        spotifyLink: 'https://open.spotify.com/track/1ZMiCix7XSAbfAJlEZWMCp?si=5db8bb7807404178'
    },
    {
        name: 'The night we met - Lord Huron',
        spotifyLink: 'https://open.spotify.com/track/0QZ5yyl6B6utIWkxeBDxQN?si=a1e9dab318154db2'
    },
    {
        name: 'Two headed boy pt. 2 - Neutral Milk Hotel',
        spotifyLink: 'https://open.spotify.com/track/4gD68gReo8iXcV9FeRTyQL?si=33cd9ff0d4f64468'
    },
    {
        name: 'Lo que construimos - Natalia Lafourcade',
        spotifyLink: 'https://open.spotify.com/track/5wWxUdgn2OugIOvLJOdreH?si=5524ec4d2aa64d48'
    },
    {
        name: 'Cancer - 21 Pilots',
        spotifyLink: 'https://open.spotify.com/track/19W5OTEcQI3ZoRW1HERMyy?si=0d52d5d905554cf9'
    },
    {
        name: 'How to disappear completely - Radiohead',
        spotifyLink: 'https://open.spotify.com/track/2rtGaCAeYtmcIvuZsvgTf6?si=ec792e901ec842d2'
    },
    {
        name: 'Wish you were here - Pink Floyd',
        spotifyLink: 'https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1?si=3f5400732a6247a9'
    },
    {
        name: 'Dust in the wind - Kansas',
        spotifyLink: 'https://open.spotify.com/track/6zeE5tKyr8Nu882DQhhSQI?si=69e1b22691034cc6'
    },
    {
        name: 'Street lights - Kanye West',
        spotifyLink: 'https://open.spotify.com/track/6j8gTlbhj9KJSeypNcNAS9?si=f3a9e7dfe0834e03'
    },
    {
        name: 'Té para tres - Soda Stereo',
        spotifyLink: 'https://open.spotify.com/track/5M4Kx9qHgdTQlKovj4hK9O?si=fde7135dfdde41a0'
    },
    {
        name: 'Say something - A Great Big World, Christina Aguilera',
        spotifyLink: 'https://open.spotify.com/track/6Vc5wAMmXdKIAM7WUoEb7N?si=ea00dcd79b0e4c3e'
    },
    {
        name: 'Waiting Room - Rex Orange County',
        spotifyLink: 'https://open.spotify.com/track/7LmkhaMCqsjppaYtAYhMaI?si=60191c806e214d26'
    },
    {
        name: 'La casa - Caramelos De Cianuro',
        spotifyLink: 'https://open.spotify.com/track/73jLhrKOby9QOBdAdpnsOl?si=14be7661205b4090'
    },
    {
        name: 'Warning sign - Coldplay',
        spotifyLink: 'https://open.spotify.com/track/4bPkBHKLKd9WHizsvM2zV3?si=002a541b6d5a4f13'
    },
    {
        name: 'The scientist - Coldplay',
        spotifyLink: 'https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle?si=699c5db4242040e9'
    },
    {
        name: 'When we were young - Adele',
        spotifyLink: 'https://open.spotify.com/track/4Tt2ahBQFQVt8uhmenn6D4?si=4ec2f90e9ff24818'
    },
    {
        name: 'Vermillion, pt. 2 - Slipknot',
        spotifyLink: 'https://open.spotify.com/track/0O7lENhqOySbsL743G7PqD?si=ccec76b843c94c11'
    },
    {
        name: 'Somebody else - The 1975',
        spotifyLink: 'https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk?si=7a0e0d3bc7e34b34'
    },
    {
        name: 'Tears in heaven - Eric Clapton',
        spotifyLink: 'https://open.spotify.com/track/612VcBshQcy4mpB2utGc3H?si=a2943c743ba740c3'
    }
]

//html elements
const buttonElement = document.querySelector('.button')
const nameElement = document.querySelector('.name')
const spotifyLinkElement = document.querySelector('.spotify-link')

//functions
function main(){
    let item = 0
    shuffleArray(songs)
    buttonElement.addEventListener('click', () => {
        nameElement.innerHTML = songs[item].name
        spotifyLinkElement.innerHTML = `<img src='https://www.wallpapertip.com/wmimgs/17-176153_download-logo-spotify-png.png' class='spotify-logo'><a href='${songs[item].spotifyLink}' class='link'>Click here to 🎧</a>`
        item++

        //checking if all the songs have been displayed
        if(item >= songs.length){
            nameElement.innerHTML = `I already gave you ${songs.length} random sad songs :(`
            spotifyLinkElement.innerHTML = ''
        }
    })
}

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

//running program
main()