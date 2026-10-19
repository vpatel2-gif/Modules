const buttons = document.querySelectorAll('.toggle');

buttons.forEach(function (button) {
  const closedText = button.textContent;      
  const openText = button.dataset.openText;   
  const panelId = button.getAttribute('aria-controls');
  const panel = document.getElementById(panelId);

  button.addEventListener('click', function () {
    if (panel.hidden) {
      panel.hidden = false;
      button.textContent = openText;
      button.setAttribute('aria-expanded', 'true');
    } else {
      panel.hidden = true;
      button.textContent = closedText;
      button.setAttribute('aria-expanded', 'false');
    }
  });
});