(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const navRef = document.querySelector('.nav');
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    // const unScroll = mobileMenuRef.classList.contains('is-open')
    // if(unScroll){
    //   document.body.style.overflowY='scroll'
    //   document.body.style.position='fixed'
    //   // document.body.style.overflowY='scroll'
    // }else{
    //   document.body.style.overflow='auto'
    // }
  });
})();
