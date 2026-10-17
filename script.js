const creator = 'Luan Venancio'
const upgradeTitle = document.querySelector('#displaytitle')
const header = document.querySelector('header')

function digitalClock() {
    const time = new Date()
    const hours = String(time.getHours()).padStart(2, '0')
    const minutes = String(time.getMinutes()).padStart(2, '0')
    const seconds = String(time.getSeconds()).padStart(2, '0')

    document.querySelector('#digitalwatch').innerHTML = `${hours}:${minutes}:${seconds}`
if (hours >0 && hours <12) {
    upgradeTitle.textContent = `Good Morning ${creator}!`
    header.style.background = 'rgba(0, 148, 216, 0.84)'
    header.style.borderBottom = '4px solid rgba(27, 3, 84, 1)'
    header.style.color = 'rgb(255,255,255)'
}
else if (hours >12 && hours <18) {
    upgradeTitle.textContent = `Good Afternoon ${creator}!`
    header.style.background = 'rgba(6, 48, 127, 1)'
   header.style.borderBottom = '4px solid rgba(27, 3, 84, 1)'
}
else {
    upgradeTitle.textContent = `Good Evening ${creator}!`
    header.style.background = 'rgba(27, 3, 84, 1)'
    header.style.borderBottom = '4px solid #14004aff'
}
}
digitalClock();
setInterval (digitalClock, 1000)

function digitalDate() {
const today = new Date();
const day = String(today.getDate()).padStart(2, '0')
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
const namemonths = months[today.getMonth()]
const year = today.getFullYear()

const weeks = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const week = weeks[today.getDay()]

document.querySelector('#digitaldata').innerHTML = `${week}, ${day} ${namemonths} ${year}`;

}
digitalDate();
setInterval (digitalDate, 1000);


const youtubeAccess = document.querySelector('#youtube')

youtubeAccess.addEventListener('mouseenter', function(){
    youtubeAccess.style.background = 'white'
    youtubeAccess.style.color = 'red'
    youtubeAccess.innerHTML = `Enter Youtube?`
    youtubeAccess.style.transition = 'all 0.2s ease-in-out'
    
})
youtubeAccess.addEventListener('mouseleave', function(){
    youtubeAccess.style.background = 'linear-gradient(50deg, rgb(227, 37, 37), rgb(189, 7, 7))'
    youtubeAccess.style.color = 'white'
    youtubeAccess.innerHTML = `Youtube`
    
})
const musicYoutubeAcess = document.querySelector('#youtubemusic')
musicYoutubeAcess.addEventListener('mouseenter', function(){
    musicYoutubeAcess.style.background = 'white'
    musicYoutubeAcess.style.color = 'red'
    musicYoutubeAcess.innerHTML = `Enter Youtube Music?`
    musicYoutubeAcess.style.transition = 'all 0.2s ease-in-out'
    
})
musicYoutubeAcess.addEventListener('mouseleave', function(){
    musicYoutubeAcess.style.background = 'linear-gradient(50deg, rgb(227, 37, 37), rgb(189, 7, 7))'
    musicYoutubeAcess.style.color = 'white'
    musicYoutubeAcess.innerHTML = `Youtube Music`
    
})

const geminiAccess = document.querySelector('#gemini')
geminiAccess.addEventListener('mouseenter', function(){
    geminiAccess.style.background = 'white'
    geminiAccess.style.color = 'blue'
    geminiAccess.innerHTML = `Enter Gemini?`
    geminiAccess.style.transition = 'all 0.2s ease-in-out'
    
})
geminiAccess.addEventListener('mouseleave', function(){
    geminiAccess.style.background = 'linear-gradient(35deg, rgb(0, 0, 0), rgb(0, 4, 255))'
    geminiAccess.style.color = 'white'
    geminiAccess.innerHTML = `Gemini`
    
})
const chatGPTAccess = document.querySelector('#chatgpt')
chatGPTAccess.addEventListener('mouseenter', function(){
    chatGPTAccess.style.background = 'white'
    chatGPTAccess.style.color = 'black'
    chatGPTAccess.innerHTML = `Enter ChatGPT?`
    chatGPTAccess.style.transition = 'all 0.2s ease-in-out'
    
})
chatGPTAccess.addEventListener('mouseleave', function(){
    chatGPTAccess.style.background = 'linear-gradient(35deg, rgb(0, 0, 0), rgba(32, 32, 33, 0.95))'
    chatGPTAccess.style.color = 'white'
    chatGPTAccess.innerHTML = `ChatGPT`
    
})
const perplexityAccess = document.querySelector('#perplexity')
perplexityAccess.addEventListener('mouseenter', function(){
    perplexityAccess.style.background = 'rgb(20,20,20)'
    perplexityAccess.style.color = 'aqua'
    perplexityAccess.innerHTML = `Enter Perplexity?`
    perplexityAccess.style.transition = 'all 0.2s ease-in-out'
    
})
perplexityAccess.addEventListener('mouseleave', function(){
    perplexityAccess.style.background = 'linear-gradient(35deg, rgba(5, 132, 139, 0.95), rgba(32, 32, 33, 0.95))'
    perplexityAccess.style.color = 'white'
    perplexityAccess.innerHTML = `Perplexity`
    
})
const claudeAccess = document.querySelector('#claude')
claudeAccess.addEventListener('mouseenter', function(){
    claudeAccess.style.background = 'white'
    claudeAccess.style.color = 'orange'
    claudeAccess.innerHTML = `Enter Claude?`
    claudeAccess.style.transition = 'all 0.2s ease-in-out'
    
})
claudeAccess.addEventListener('mouseleave', function(){
    claudeAccess.style.background = 'linear-gradient(35deg, rgba(255, 166, 0, 0.95), rgba(234, 87, 2, 0.95))'
    claudeAccess.style.color = 'white'
    claudeAccess.innerHTML = `Claude`
    
})

const mdnAccess = document.querySelector('#mdn')
mdnAccess.addEventListener('mouseenter', function(){
    mdnAccess.style.background = 'white'
    mdnAccess.style.color = 'black'
    mdnAccess.innerHTML = `Enter MDN?`
    mdnAccess.style.transition = 'all 0.2s ease-in-out'
    
})
mdnAccess.addEventListener('mouseleave', function(){
    mdnAccess.style.background = 'linear-gradient(35deg, rgb(0, 0, 0), rgba(32, 32, 33, 0.95))'
    mdnAccess.style.color = 'white'
    mdnAccess.innerHTML = `MDN`
    
})
const w3schoolsAccess = document.querySelector('#w3schools')
w3schoolsAccess.addEventListener('mouseenter', function(){
    w3schoolsAccess.style.background = 'white'
    w3schoolsAccess.style.color = 'black'
    w3schoolsAccess.innerHTML = `Enter W3Schools?`
    w3schoolsAccess.style.transition = 'all 0.2s ease-in-out'
    
})
w3schoolsAccess.addEventListener('mouseleave', function(){
    w3schoolsAccess.style.background = 'linear-gradient(35deg, rgba(0, 196, 69, 1), rgba(32, 32, 33, 0.95))'
    w3schoolsAccess.style.color = 'white'
    w3schoolsAccess.innerHTML = `W3Schools`
    
})
const stackoverflowAccess = document.querySelector('#stackoverflow')
stackoverflowAccess.addEventListener('mouseenter', function(){
    stackoverflowAccess.style.background = 'white'
    stackoverflowAccess.style.color = 'black'
    stackoverflowAccess.innerHTML = `Enter Stack Overflow?`
    stackoverflowAccess.style.transition = 'all 0.2s ease-in-out'
    
})
stackoverflowAccess.addEventListener('mouseleave', function(){
    stackoverflowAccess.style.background = 'linear-gradient(35deg, rgba(22, 22, 22, 1), rgba(32, 32, 33, 0.95))'
    stackoverflowAccess.style.color = 'white'
    stackoverflowAccess.innerHTML = `Stack Overflow`
    
})

const githubAccess = document.querySelector('#github')
githubAccess.addEventListener('mouseenter', function(){
    githubAccess.style.background = 'white'
    githubAccess.style.color = 'black'
    githubAccess.innerHTML = `Enter GitHub?`
    githubAccess.style.transition = 'all 0.2s ease-in-out'
    
})
githubAccess.addEventListener('mouseleave', function(){
    githubAccess.style.background = 'linear-gradient(35deg, rgba(22, 22, 22, 1), rgba(32, 32, 33, 0.95))'
    githubAccess.style.color = 'white'
    githubAccess.innerHTML = `GitHub`
    
})
const netlifyAccess = document.querySelector('#netlify')
netlifyAccess.addEventListener('mouseenter', function(){
    netlifyAccess.style.background = 'white'
    netlifyAccess.style.color = 'black'
    netlifyAccess.innerHTML = `Enter Netlify?`
    netlifyAccess.style.transition = 'all 0.2s ease-in-out'
    
})
netlifyAccess.addEventListener('mouseleave', function(){
    netlifyAccess.style.background = 'linear-gradient(35deg, rgba(22, 22, 22, 1), rgba(32, 32, 33, 0.95))'
    netlifyAccess.style.color = 'rgba(6, 217, 249, 1)'
    netlifyAccess.innerHTML = `Netlify`
    
})
const flightradar24Access = document.querySelector('#flightradar24')
flightradar24Access.addEventListener('mouseenter', function(){
    flightradar24Access.style.background = 'white'
    flightradar24Access.style.color = 'black'
    flightradar24Access.innerHTML = `Enter Flightradar24?`
    flightradar24Access.style.transition = 'all 0.2s ease-in-out'
    
})
flightradar24Access.addEventListener('mouseleave', function(){
    flightradar24Access.style.background = 'linear-gradient(35deg, rgba(12, 3, 116, 1), rgba(0, 0, 117, 0.95))'
    flightradar24Access.style.color = 'rgba(6, 217, 249, 1)'
    flightradar24Access.innerHTML = `Flightradar24`
    
})
const heavensaboveAccess = document.querySelector('#heavens-above')
heavensaboveAccess.addEventListener('mouseenter', function(){
    heavensaboveAccess.style.background = 'white'
    heavensaboveAccess.style.color = 'black'
    heavensaboveAccess.innerHTML = `Enter Heavens-above?`
    heavensaboveAccess.style.transition = 'all 0.2s ease-in-out'
    
})
heavensaboveAccess.addEventListener('mouseleave', function(){
    heavensaboveAccess.style.background = 'linear-gradient(35deg, rgba(22, 22, 22, 1), rgba(32, 32, 33, 0.95))'
    heavensaboveAccess.style.color = 'rgba(229, 229, 229, 1)'
    heavensaboveAccess.innerHTML = `Heavens-above`
    
})

const wikipediaAccess = document.querySelector('#wikipedia')
wikipediaAccess.addEventListener('mouseenter', function(){
    wikipediaAccess.style.background = 'white'
    wikipediaAccess.style.color = 'black'
    wikipediaAccess.innerHTML = `Enter Wikipedia?`
    wikipediaAccess.style.transition = 'all 0.2s ease-in-out'
    
})
wikipediaAccess.addEventListener('mouseleave', function(){
    wikipediaAccess.style.background = 'linear-gradient(35deg, rgba(255, 255, 255, 1), rgba(192, 192, 197, 0.95))'
    wikipediaAccess.style.color = 'rgba(3, 3, 3, 1)'
    wikipediaAccess.innerHTML = `Wikipedia`
    
})
const googlemapsAccess = document.querySelector('#googlemaps')
googlemapsAccess.addEventListener('mouseenter', function(){
    googlemapsAccess.style.background = 'white'
    googlemapsAccess.style.color = 'black'
    googlemapsAccess.innerHTML = `Enter Google Maps?`
    googlemapsAccess.style.transition = 'all 0.2s ease-in-out'
    
})
googlemapsAccess.addEventListener('mouseleave', function(){
    googlemapsAccess.style.background = 'linear-gradient(35deg, rgba(175, 13, 13, 1), rgba(2, 2, 154, 0.95))'
    googlemapsAccess.style.color = 'rgba(229, 229, 229, 1)'
    googlemapsAccess.innerHTML = `Google Maps`
    
})
const canvaAccess = document.querySelector('#canva')
canvaAccess.addEventListener('mouseenter', function(){
    canvaAccess.style.background = 'white'
    canvaAccess.style.color = 'black'
    canvaAccess.innerHTML = `Enter Canva?`
    canvaAccess.style.transition = 'all 0.2s ease-in-out'
    
})
canvaAccess.addEventListener('mouseleave', function(){
    canvaAccess.style.background = 'linear-gradient(35deg, rgba(0, 57, 241, 1), rgba(0, 217, 255, 0.95))'
    canvaAccess.style.color = 'rgba(229, 229, 229, 1)'
    canvaAccess.innerHTML = `Canva`
    
})
const duolingoAccess = document.querySelector('#duolingo')
duolingoAccess.addEventListener('mouseenter', function(){
    duolingoAccess.style.background = 'grren'
    duolingoAccess.style.color = 'white'
    duolingoAccess.innerHTML = `Enter Duolingo?`
    duolingoAccess.style.transition = 'all 0.2s ease-in-out'
    
})
duolingoAccess.addEventListener('mouseleave', function(){
    duolingoAccess.style.background = 'linear-gradient(35deg, rgba(7, 160, 66, 1), rgba(9, 152, 66, 0.95))'
    duolingoAccess.style.color = 'rgba(229, 229, 229, 1)'
    duolingoAccess.style.textShadow = '0px 0px 10px rgba(255, 255, 255, 1)'
    duolingoAccess.innerHTML = `Duolingo`
    
})
const memriseAccess = document.querySelector('#memrise') 
memriseAccess.addEventListener('mouseenter', function(){
    memriseAccess.style.background = 'rgb(255,255,25)'
    memriseAccess.style.color = 'black'
    memriseAccess.innerHTML = `Enter Memrise?`
    memriseAccess.style.transition = 'all 0.2s ease-in-out'
    
})
memriseAccess.addEventListener('mouseleave', function(){
    memriseAccess.style.background = 'linear-gradient(35deg, rgba(216, 237, 34, 1), rgba(228, 235, 3, 0.9))'
    memriseAccess.style.color = 'rgba(13, 13, 13, 1)'
    memriseAccess.style.textShadow = '0px 0px 10px rgba(255, 255, 255, 1)'
    memriseAccess.innerHTML = `Memrise`
    
})

const navColor = document.querySelectorAll('.navigation')
const darkTheme = document.querySelector('#darkMode')

darkTheme.addEventListener('click', function(){
    document.body.style.transition = '0.5s'
    document.body.style.background = 'rgb(25,25,25)'
    document.body.style.textShadow = '0px 0px 10px rgba(255, 255, 255, 0.39)'
    navColor.forEach(function(navBlack){
      navBlack.style.transition = '0.5s'
      navBlack.style.boxShadow = '0px 0px 20px rgb(110,110,110)'
      navBlack.style.background = 'rgb(15, 14, 14)'
      navBlack.style.textShadow = '0px 0px 20px rgb(200,200,200)'
    })
})

const blueTheme = document.getElementById('blueMode')
blueTheme.addEventListener('click', function(){
    document.body.style.transition = '0.5s'
    document.body.style.background = 'rgb(14, 14, 118)'
    document.body.style.textShadow = '0px 0px 10px rgb(0,0,230)'
    navColor.forEach(function(navBlue){
        navBlue.style.transition = '0.5s'
        navBlue.style.background = 'rgb(3, 27, 94)'
        navBlue.style.boxShadow = '0px 0px 20px rgb(0,0,255)'
        navBlue.style.textShadow = '0px 0px 20px rgb(0,0,144)'
    })
})
const JStheme = document.getElementById('jsMode')

JStheme.addEventListener('click', function(){
    document.body.style.transition = '0.5s'
    document.body.style.background = 'rgb(200,200,20)'
    document.body.style.textShadow = '0px 0px 20px rgb(0,0,0)'
    navColor.forEach(function(JScolor){
        JScolor.style.background = 'rgb(200,200,25)'
        JScolor.style.boxShadow = '0px 0px 20px rgb(0,0,0)'
        JScolor.style.color = 'rgb(0,0,0)'
        JScolor.style.textShadow = '0px 0px 20px rgb(240,230,100)'
    })
})

const purpleTheme = document.getElementById('purpleMode')
purpleTheme.addEventListener('click', function(){
    document.body.style.transition = '0.5s'
    document.body.style.background = 'rgb(44, 4, 71)'
    navColor.forEach(function(purpleColor){
        purpleColor.style.transition = '0.5s'
        purpleColor.style.boxShadow = '0px 0px 30px rgb(55, 11, 185)'
        purpleColor.style.textShadow = '0px 0px 30px rgb(230, 0, 255)'
        purpleColor.style.background = 'rgb(51, 10, 123)'
    })
})

const redTheme = document.getElementById('redMode')
redTheme.addEventListener('click', function(){
    document.body.style.transition = '0.5s'
    document.body.style.background = 'rgb(99, 1, 1)'
    navColor.forEach(function(redMode){
       redMode.style.transition = '0.5s'
       redMode.style.background = 'rgb(143, 3, 3)'
    })
})

const restartWeb = document.querySelector('#Restart')

restartWeb.addEventListener('click', function(){
    alert('Would you like to restart your website?')
    alert(`Let's go ${creator}!`)
    window.navigation.reload()
})

const accessTiktok = document.querySelector('#tiktok-link')
accessTiktok.addEventListener('mouseenter', function(){
    accessTiktok.innerHTML = `Follow Me!`
})
accessTiktok.addEventListener('mouseleave', function(){
    accessTiktok.innerHTML = 'Follow Tik Tok'
})