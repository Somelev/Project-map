const buttons = document.querySelectorAll('button');
let openBtns = [];

document.addEventListener('mouseup', function (event) {
  const target = event.target;
  
  if (!target.closest('.button')) {
    for (const btn of openBtns) {
      const icon = btn.querySelector('.button span');
      const text = btn.querySelector('.button__text');
      
      icon.classList.remove('button__icon__active');
      icon.classList.add('button__icon');
      
      text.classList.remove('button__text__active');
    }
    
    openBtns = [];
  }
});

for (const button of buttons) {
  button.addEventListener('click', function () {
    const currentButton = this.closest('button');
    const icon = currentButton.querySelector('.button span');
    const text = currentButton.querySelector('.button__text');

    if (openBtns.includes(currentButton)) {
      icon.classList.remove('button__icon__active');
      icon.classList.add('button__icon');

      text.classList.remove('button__text__active');

      const index = openBtns.indexOf(currentButton);
      openBtns.splice(index, 1);
    } else {
      icon.classList.add('button__icon__active');
      icon.classList.remove('button__icon');

      text.classList.add('button__text__active');

      openBtns.push(currentButton);
    }
  });
}
