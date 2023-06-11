    // Array of image paths
    const imagePaths = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

    // Shuffle the image paths
    const shuffledImages = shuffle(imagePaths.concat(imagePaths));

    // Create the game board
    const gameBoard = document.getElementById("gameBoard");
    shuffledImages.forEach(imagePath => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const imageElement = document.createElement("img");
      imageElement.src = imagePath;

      cardElement.appendChild(imageElement);
      gameBoard.appendChild(cardElement);
    });

    // Flip the card when clicked
    const cardElements = document.getElementsByClassName("card");
    Array.from(cardElements).forEach(card => {
      card.addEventListener("click", flipCard);
    });
  
    let flippedCards = [];
  
    // Function to handle card flipping
    function flipCard() {
      if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        flippedCards.push(this);
  
        if (flippedCards.length === 2) {
          checkMatch();
        }
      }
    }
  
    // Function to check if flipped cards match
    function checkMatch() {
      const card1 = flippedCards[0];
      const card2 = flippedCards[1];
  
      if (card1.textContent === card2.textContent) {
        // Match!
        card1.removeEventListener("click", flipCard);
        card2.removeEventListener("click", flipCard);
      } else {
        // Not a match
        setTimeout(() => {
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
        }, 1000);
      }
  
      flippedCards = [];
    }
  
    // Function to shuffle an array
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }