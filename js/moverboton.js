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
            window.location.href = '../html/regals.html'
            return;
            }

            var button = document.getElementById('preparada');
            var randomPoint = getRandomPoint();

            button.style.left = randomPoint.x + 'px';
            button.style.top = randomPoint.y + 'px';

            clickCounter++;
        }
        function hideButton() {
          var button = document.getElementById('no');
          button.style.display = 'none';
        }
        
        document.getElementById('no').addEventListener('click', hideButton);

        document.getElementById('preparada').addEventListener('click', moveButton);
