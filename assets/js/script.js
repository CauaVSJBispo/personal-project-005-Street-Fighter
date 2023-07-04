const character = document.querySelectorAll(".character");

const startBtn = document.getElementById('start-btn')

const quit = document.getElementById('quit-game-btn')

const fight = document.getElementById('fight-btn')

const characterBtn = document.querySelectorAll('.character-btn')

let activeFunction = false

let song1 = false

let imgPlayer1Defined = ''
let imgPlayer2Defined = ''
let nameSelect1 = ''
let nameSelect2 = ''

let letsFight = ''

characterBtn.forEach((characterBtn, indice)=>{
  characterBtn.addEventListener('click', ()=>{

    if (!activeFunction){

    const characterImgPlayer1Active = document.querySelectorAll('.character-img')

    const idSelect = characterBtn.attributes.title.value;

    const imgPlayer1 = document.getElementById('character-player-1');
    imgPlayer1Defined = imgPlayer1.src = `../assets/personagens/${idSelect}.gif`;


    const namePlayer1 = document.getElementById('name-character-player-1')
    nameSelect1 = characterBtn.getAttribute('title')

    namePlayer1.innerHTML = nameSelect1

    const tags = document.querySelectorAll(".tag")
    const tagActive = document.querySelector('.active')

    tagActive.classList.remove('active')
    tags[indice].classList.add('active')

    characterImgPlayer1Active[indice].classList.add('player1')

    activeFunction = true

    } if(activeFunction == true){
      characterBtn.addEventListener('click', ()=>{
        const characterImgPlayer2Active = document.querySelectorAll('.character-img')

        const idSelect = characterBtn.attributes.title.value;

        const imgPlayer2 = document.getElementById('character-player-2');
        imgPlayer2Defined = imgPlayer2.src = `../assets/personagens/${idSelect}.gif`;
  
  
        const namePlayer2 = document.getElementById('name-character-player-2')
        const nameSelect2 = characterBtn.getAttribute('title')
  
        namePlayer2.innerHTML = nameSelect2

        characterImgPlayer2Active[indice].classList.add('player2')
        
        letsFight = true
        activeFunction = 'done'
        
      })
      
    } if (activeFunction == 'done'){
      return
    }
  })
})

startBtn.addEventListener('click', () =>{
  const inicialPage = document.getElementById('inicial-page')
  const selectMenu = document.getElementById('select-menu')
  inicialPage.style.display = 'none'
  selectMenu.style.display = 'block'
  play()
})

quit.addEventListener('click', () =>{
  const inicialPage = document.getElementById('inicial-page')
  const selectMenu = document.getElementById('select-menu')
  inicialPage.style.display = 'block'
  selectMenu.style.display = 'none'
})

fight.addEventListener('click', () =>{

  if (letsFight == false){
    return
  }
  
  const fightPage = document.getElementById('fight-page')
  const selectMenu = document.getElementById('select-menu')
  fightPage.style.display = 'block'
  selectMenu.style.display = 'none'

  song1 = true

  console.log(song1)
  play()

  const characterSelect1Icon = document.getElementById('character-select-1-icon')
  const characterSelect2Icon = document.getElementById('character-select-2-icon')
  characterSelect1Icon.src = imgPlayer1Defined
  characterSelect2Icon.src = imgPlayer2Defined

  console.log(nameSelect1)
  console.log(nameSelect2)


  const nameCharacterSelectedPlayer1 = document.querySelector('.name-character-selected-player-1')
  const nameCharacterSelectedPlayer2 = document.querySelector('.name-character-selected-player-2')

  nameCharacterSelectedPlayer1.innerHTML = nameSelect1
  nameCharacterSelectedPlayer2.innerHTML = nameSelect2
  fightPlay()
})

const characterSelectPlayer1 = character.forEach((character, indice) => {
  character.addEventListener("mouseover", () => {

    if (activeFunction){
      return
    }
    const characterImgPlayer1Active = document.querySelectorAll('.character-img')
    const characterImgPlayer1 = document.querySelector('.player1')
    characterImgPlayer1.classList.remove('player1')
    characterImgPlayer1Active[indice].classList.add('player1')

  
    const idSelect = character.attributes.id.value;
   
    const characterSelect = document.querySelector(".select");
    characterSelect.classList.remove("select");

    character.classList.add("select");

    const imgPlayer1 = document.getElementById('character-player-1');
    imgPlayer1.src = `../assets/personagens/${idSelect}.gif`;


    const namePlayer1 = document.getElementById('name-character-player-1')
    const nameSelect = character.getAttribute('data-name')

    namePlayer1.innerHTML = nameSelect

    const tags = document.querySelectorAll(".tag")
    const tagActive = document.querySelector('.active')

      tagActive.classList.remove('active')
      tags[indice].classList.add('active')
  });
});

const characterSelectPlayer2 = character.forEach((character, indice) => {
  character.addEventListener("mouseover", () => {

    if (!activeFunction || activeFunction === 'done'){
      return
    }
    const characterImgPlayer2Active = document.querySelectorAll('.character-img')
    const characterImgPlayer2 = document.querySelector('.player2')
    characterImgPlayer2.classList.remove('player2')
    characterImgPlayer2Active[indice].classList.add('player2')

    const idSelect = character.attributes.id.value;
   
    const characterSelect = document.querySelector(".select");
    characterSelect.classList.remove("select");

    character.classList.add("select");

    const imgPlayer2 = document.getElementById('character-player-2');
    imgPlayer2.src = `../assets/personagens/${idSelect}.gif`;


    const namePlayer2 = document.getElementById('name-character-player-2')
    nameSelect2 = character.getAttribute('data-name')

    namePlayer2.innerHTML = nameSelect2

    const tags2 = document.querySelectorAll(".tag2")
    const tagActive = document.querySelector('.active2')

      tagActive.classList.remove('active2')
      tags2[indice].classList.add('active2')
  });
});



function play(){
  const song = document.getElementById('song')
  if (song1 == false){
    song.play()
    return
  } if (song1 == true) {
    song.pause();
    song.currentTime = 0;
  }
  
} 

function fightPlay(){
  document.getElementById('fight-song').play()
}


  
