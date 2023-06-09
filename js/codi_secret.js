var clueContainer = document.getElementById("clueContainer");

function checkCode() {
  var codeInput = document.getElementById("codeInput").value;

  if (codeInput === "1408") {
    redirectPage(); // Call the function to redirect to another page
  } else {
    showMessage("ERROR", "Si no l'encertes m'hauré de quedar amb el regal");
  }
}

function redirectPage() {
  window.location.href = "./correcte.html"; 
}

function displayClue() {
  clueContainer.textContent = "La pista que et pot ajudar es troba en aquesta pàgina"; // Replace XXXX with your clue
}

function showMessage(className, message) {
  var messageElement = document.createElement("p");
  messageElement.className = className;
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  setTimeout(function() {
    document.body.removeChild(messageElement);
  }, 3000);
}