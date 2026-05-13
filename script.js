const optionButtons = document.querySelectorAll('.option-btn');

optionButtons.forEach(button => {

  button.addEventListener('click', () => {

    optionButtons.forEach(btn => {
      btn.classList.remove('selected');
    });

    button.classList.add('selected');

  });

});

const slotButtons = document.querySelectorAll('.slot-btn');

slotButtons.forEach(button => {

  button.addEventListener('click', () => {

    slotButtons.forEach(btn => {
      btn.classList.remove('selected');
    });

    button.classList.add('selected');

  });

});

const confirmButton = document.querySelector('.confirm-btn');

confirmButton.addEventListener('click', () => {

  confirmButton.innerHTML = 'BOOKING CONFIRMED ✓';

});