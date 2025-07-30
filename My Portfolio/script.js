document.querySelectorAll('.education .row-card h3').forEach(title => {
  title.style.cursor = 'pointer';

  title.addEventListener('click', () => {
    const card = title.parentElement;
    const content = card.querySelector('.toggle-content');

    // Toggle the clicked card's content display
    if (content.style.display === 'block') {
      content.style.display = 'none';
      card.classList.remove('active');
    } else {
      content.style.display = 'block';
      card.classList.add('active');
    }
  });
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content) {
      content.classList.toggle('visible');
    }
  });
});
document.querySelectorAll('.skill-box h3.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('active');
  });
});
document.querySelectorAll('.toggle-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isVisible = content.style.display === 'block';

    // Toggle visibility
    content.style.display = isVisible ? 'none' : 'block';
  });
});


