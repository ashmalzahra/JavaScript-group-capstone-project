//  WORKING SOLUTION 1
window.addEventListener('load', () => { //  Waits until page is loaded completely, including images.
  const btnComments = document.querySelector('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
});

/*  WORKING SOLUTION 2
setTimeout(() => {
  const btnComments = document.querySelector('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
}, 1000);
*/

/*
if (document.readyState !== 'loading') {
  const btnComments = document.querySelector('.comment');
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
} else {
  document.addEventListener('DOMContentLoaded', () => {

  });
}
*/

/*
document.addEventListener('DOMContentLoaded', () => {
  const btnComments = document.querySelector('.comment');
  console.log(btnComments);
  const popUpContainer = document.querySelector('.comment_pop-up_container');
  console.log(popUpContainer);
  btnComments.addEventListener('click', () => {
    popUpContainer.classList.toggle('hidden');
  });
});
*/