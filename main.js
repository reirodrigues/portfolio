document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const btn = document.querySelector('#click')

    btn.click()
  }
})

function show() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
