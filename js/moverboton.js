var clickCounter = 0;
// Function to generate a random point on the screen
function getRandomPoint() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * screenWidth);
  var randomY = Math.floor(Math.random() * screenHeight);

  return { x: randomX, y: randomY };
}

// Function to move the button to a random point
function moveButton() {
    if (clickCounter >= 10) {
      document.getElementById('preparada').removeEventListener('click', moveButton);
      window.location.href = '../html/prova_codi.html'
      return;
    }

    var button = document.getElementById('preparada');
    var randomPoint = getRandomPoint();

    button.style.left = randomPoint.x + 'px';
    button.style.top = randomPoint.y + 'px';

    clickCounter++;
}

var button1 = document.getElementById('no');
var isButtonVisible = true;

button1.addEventListener('mouseenter', function() {
  if (!isButtonVisible && !isButtonHovered) {
    button1.style.display = 'block';
    setTimeout(function() {
      button1.style.opacity = 1;
      isButtonVisible = true;
      isButtonHovered = false;
    }, 10);
  }
});

document.getElementById('preparada').addEventListener('click', moveButton);
