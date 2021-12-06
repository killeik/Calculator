const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equal_btn = document.querySelector('.btn-equal');
const clear_btn = document.querySelector('.btn-clear');

for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    let number = btns[i].getAttribute('data-num');
    screen.value += number;
  })
}

equal_btn.addEventListener('click', function(){
  if(screen.value==='')
    alert('input is emtpy');
  else{
    let value = eval(screen.value);
    screen.value = value;
  }
})
clear_btn.addEventListener('click', function(){
  screen.value = "";
})
