const menuIcon = document.querySelector('.menu-icon');
// console.log(menuIcon);
const menuIconFont = document.querySelector('.menu-icon > i');
const mobileMenus = document.querySelector('.mobile-menus');
console.dir(mobileMenus);

// menu icon click event
menuIcon.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    menuIconFont.setAttribute('class', 'ri-close-large-line');
    mobileMenus.style.height = mobileMenus.scrollHeight + 'px';
  } else {
    menuIconFont.setAttribute('class', 'ri-menu-line');
    mobileMenus.style.height = 0;
  }
});

// header style change when scrolling down
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
