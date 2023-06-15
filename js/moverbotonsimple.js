function moveButton() {
    if (clickCounter >= 3) {
      document.getElementsByTagName('button').removeEventListener('click', moveButton);
      window.location.href = destinationPage
      return;
    }

    var button = document.getElementsByTagName('button');
    var randomPoint = getRandomPoint();

    button.style.left = randomPoint.x + 'px';
    button.style.top = randomPoint.y + 'px';

    clickCounter++;
}

var clickCounter = 0;
// Function to generate a random point on the screen
function getRandomPoint() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * screenWidth);
  var randomY = Math.floor(Math.random() * screenHeight);

  return { x: randomX, y: randomY };
}