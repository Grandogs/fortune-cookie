let button = document.querySelector('.before')
let buttonReset = document.querySelector('.after')


function handClick() {

    button.classList.toggle('hide') 
    buttonReset.classList.toggle('hide')
    
  //  document.querySelector('.sorte').classList.toggle('.hide')
   // document.querySelector('.home').classList.toggle('.hide')

}

button.addEventListener('click', handClick)
buttonReset.addEventListener('click', handClick)
