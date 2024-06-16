function toggleFonts(event) {
  if (document.body.classList.contains('alternativeFonts')) {
    document.body.classList.remove('alternativeFonts');
    event.target.textContent = 'Custom Fonts';
  } else {
    document.body.classList.add('alternativeFonts');
    event.target.textContent = 'Default Fonts';
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('button.fonts').forEach(function(button) {
    button.textContent = 'Default Fonts';
    button.addEventListener('click', toggleFonts);
  })
});

