setInterval(function() {
  var rainbowText = document.querySelector('.rainbow-text');
  rainbowText.style.animation = 'none';
  void rainbowText.offsetWidth; // Trigger a reflow
  rainbowText.style.animation = null;
}, 500);

