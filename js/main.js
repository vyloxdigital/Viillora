/* Villora — main.js */
'use strict';

// Mobile nav toggle
(function(){
  var toggle = document.querySelector('.nav-mobile-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if(toggle && mobileNav){
    toggle.addEventListener('click', function(){
      var open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on outside click
    document.addEventListener('click', function(e){
      if(!toggle.contains(e.target) && !mobileNav.contains(e.target)){
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }
})();

// FAQ accordion
(function(){
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function(item){
    var q = item.querySelector('.faq-question');
    if(!q) return;
    q.addEventListener('click', function(){
      var wasOpen = item.classList.contains('open');
      // Close all
      items.forEach(function(i){ i.classList.remove('open'); });
      if(!wasOpen) item.classList.add('open');
    });
  });
})();

// Sticky nav shadow on scroll
(function(){
  var nav = document.querySelector('.site-nav');
  if(!nav) return;
  window.addEventListener('scroll', function(){
    if(window.scrollY > 20){
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.10)';
    } else {
      nav.style.boxShadow = '';
    }
  }, {passive:true});
})();
