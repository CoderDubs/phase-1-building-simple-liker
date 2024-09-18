  //code to fill in hearts with a mocked server
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  const modal = document.getElementById("modal");
  
  document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll('.like-glyph');
    hearts.forEach(function(heart) {
        heart.addEventListener("click", function(e) {
            mimicServerCall()
                .then(function() {
                  //cool bit to add/remove heart
                  e.target.classList.toggle('activated-heart');
                  e.target.textContent = e.target.classList.contains('activated-heart') ? FULL_HEART : EMPTY_HEART;
                })
                .catch(() => {
                  modal.classList.remove("hidden");
                  setTimeout(() => {
                      modal.classList.add("hidden");
                  }, 3000);
                }); 
      });
    });
});

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