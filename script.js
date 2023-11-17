const cat = document.getElementById('cat')
const popcat = document.querySelector('.popcat')
const number = document.querySelector('.number')
let Inteeger = 0

const openMouthImg = './img/open.png'
const closeMouthImg = './img/close.png'

const openMouthsound = new Audio ('./sound/sound_sound-open.mp3')
const closeMouthsound = new Audio ('./sound/sound_sound-close.mp3')

popcat.addEventListener('mousedown', openMouth)
popcat.addEventListener('mouseup', closeMouth)
popcat.addEventListener('click', addFunction)

function openMouth(){
    cat.src = openMouthImg
    openMouthsound.play()
}
function closeMouth(){
    cat.src = closeMouthImg
    closeMouthsound.play()
}
function addFunction(){
    Inteeger +=1
    number.innerHTML = Inteeger
}