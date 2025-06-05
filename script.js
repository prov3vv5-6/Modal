'use strict';

//style classes that are assigned to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//loops through the three modal buttons and opens the modal when clicked calling the openModal function
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//closes the opened modal when clicked by calling the closeModal function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Escape Key Press Event(closes the modal when escape key is pressed)
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
