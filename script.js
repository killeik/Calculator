const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equal_btn = document.querySelector('.btn-equal');
const clear_btn = document.querySelector('.btn-clear');
const delete_btn = document.querySelector('.btn-delete');
const secret_btn = document.querySelector('.btn-secret');

function deleteNotCalcSymbols(){
  const not_calc_symbols_filter = new RegExp(/[^0-9./()*+-]/g);
  screen.value = screen.value.replace(not_calc_symbols_filter,"")
}

for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    deleteNotCalcSymbols();
    let number = btns[i].getAttribute('data-num');
    screen.value += number;
  })
}

equal_btn.addEventListener('click', function(){
  deleteNotCalcSymbols();
  if(screen.value != ''){
    let value = eval(screen.value);
    screen.value = value;
  }
})
clear_btn.addEventListener('click', function(){
  screen.value = "";
})
delete_btn.addEventListener('click', function(){
  deleteNotCalcSymbols();
  screen.value = screen.value.slice(0, screen.value.length - 1);
})

let i=0
secret_btn.addEventListener('click', function(){
  i++
  if(i>3){
    secret_btn.innerHTML = "There is no secret here!";
  if(i>10){
    secret_btn.innerHTML = "STOP RIGHT THERE U CRIMINAL SCAM!";
  }if(i>20){
    secret_btn.innerHTML = "Ha-ha! NirvanaRolled!";
    window.open('https://youtu.be/NN75im_us4k','_blank')
  }
  }
})

screen.addEventListener('keydown', screenKeyPressed)

function screenKeyPressed(event) {
  deleteNotCalcSymbols();
  switch (event.keyCode) {
      case 13: if(screen.value != ''){ //use enter as equal button
        let value = eval(screen.value);
        screen.value = value;
        return true
        }
      case 8: //allow use backspace
        return true;
      break;
      default:
      //prohibit the entry of letters and other not needed characters
        const calc_symbols_filter = new RegExp("[0-9./()*+-]");
        if (!calc_symbols_filter.test(event.key)) {
          event.preventDefault();
          return false;
        }
        break;
}
}
