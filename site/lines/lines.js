function setButtonsText(textContent) {
  document.querySelectorAll('button.lines').forEach(function(button) {
    button.textContent = textContent;
  })
}

function toggleLines(event) {
  if (document.body.classList.contains('lines')) {
    document.body.classList.add('linesdouble');
    document.body.classList.remove('lines');
    setButtonsText('Hide Lines');
  } else if (document.body.classList.contains('linesdouble')) {
    document.body.classList.remove('linesdouble');
    setButtonsText('Show Lines');
  } else {
    document.body.classList.add('lines');
    setButtonsText('Show Double Lines');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  let textContent = 'Show Lines';

  if (params.has('lines')) {
    document.body.classList.add('lines');
    textContent = 'Show Double Lines';
  } else if (params.has('linesdouble')) {
    document.body.classList.add('linesdouble');
    textContent = 'Hide Lines';
  }

  setButtonsText(textContent);

  document.querySelectorAll('button.lines').forEach(function(button) {
    button.addEventListener('click', toggleLines);
  })
});
