document.addEventListener("keydown",(event) => {
      const keyName = event.key;
      const textdiv = document.querySelector('.conteiner__top');
      if(event.code != 'Backspace' && event.code != 'Enter' && event.code != 'Tab' && event.code != 'ShiftLeft' && event.code != 'CapsLock' && event.code != 'ShiftRight'){ 
        textdiv.textContent += keyName;

      }
      let cc = document.getElementsByTagName('div');
      for(let i = 0;i<cc.length;i++){
        if(event.keyCode == cc[i].dataset.code){
          cc[i].style.backgroundColor = 'darkgray';
        }
      }
    },false,
  );

  document.addEventListener("keyup",(event) => {
    let cc = document.getElementsByTagName('div');
    for(let i = 0;i<cc.length;i++){
      if(event.keyCode == cc[i].dataset.code){
        cc[i].style.backgroundColor = 'white';
      }
    }
  },false,
);
