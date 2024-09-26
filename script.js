const pages = document.querySelectorAll('.page');
const nextPageBtn = document.getElementById('nextPage');
const prevPageBtn = document.getElementById('prevPage');
let currentPage = 0;

function updatePageDisplay() {
  pages.forEach((page, index) => {
    page.classList.remove('active');
    if (index === currentPage) {
      page.classList.add('active');
      page.style.opacity = "1";
    } else {
      page.style.opacity = "0";
    }
  });
}

nextPageBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePageDisplay();
  }
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePageDisplay();
  }
});

// Inicializa la primera página como activa
updatePageDisplay();
