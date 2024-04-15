// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Get references to the elements we'll need
const heartIcons = document.querySelectorAll('.heart-icon');
const errorMessage = document.getElementById('error-message');
const errorModal = document.getElementById('error-modal');

// Add event listeners to each heart
heartIcons.forEach(icon => {
  icon.addEventListener('click', handleHeartClick);
});

function handleHeartClick(event) {
  const heartIcon = event.target;

  mimicServerCall()
    .then(() => {
      // Success! Update heart appearance 
      heartIcon.classList.add('activated-heart');

      // Toggle Font Awesome classes for more robust heart switching
      heartIcon.classList.toggle('fa-regular');
      heartIcon.classList.toggle('fa-solid'); 
    })
    .catch(() => {
      // Error! Show the modal
      errorMessage.textContent = 'Oops, something went wrong!';
      errorModal.classList.remove('hidden');

      // Hide the modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// (mimicServerCall function is provided for you)




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
