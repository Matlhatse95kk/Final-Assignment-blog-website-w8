// script.js
function toggleContent(button) {
  const content = button.nextElementSibling;
  if (content) {
    content.classList.toggle('hidden');
    button.textContent = content.classList.contains('hidden') ? 'Read More' : 'Read Less';
  }
}