
// Smooth scroll for nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      const nav = document.querySelector('.navbar-collapse');
      if(nav && nav.classList.contains('show')){ new bootstrap.Collapse(nav).hide(); }
    }
  });
});

