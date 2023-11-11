function toggleLines(event) {
  if (document.body.classList.contains('lines')) {
    document.body.classList.add('linesdouble');
    document.body.classList.remove('lines');
    event.target.textContent = 'Hide Lines';
  } else if (document.body.classList.contains('linesdouble')) {
    document.body.classList.remove('linesdouble');
    event.target.textContent = 'Show Lines';
  } else {
    document.body.classList.add('lines');
    event.target.textContent = 'Show Double Lines';
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('lines')) {
    document.body.classList.add('lines');
  } else if (params.has('linesdouble')) {
    document.body.classList.add('linesdouble');
  }

  document.querySelectorAll('button.lines').forEach(function(button) {
    button.textContent = 'Show Lines';
    button.addEventListener('click', toggleLines);
  })
});
