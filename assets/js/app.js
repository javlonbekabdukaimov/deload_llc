
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

// Simple form handler for Formspree (replace endpoint)
const form = document.getElementById('apply-form');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerText = 'Sending...';
    try {
      const data = new FormData(form);
      const endpoint = form.getAttribute('action'); // e.g., https://formspree.io/f/xxxx
      const res = await fetch(endpoint, { method:'POST', body:data, headers: { 'Accept':'application/json' } });
      if(res.ok){
        form.reset();
        alert('Thank you! We will contact you soon.');
      }else{
        alert('Submission failed. Please try again.');
      }
    } catch(err){
      alert('Network error. Please try later.');
    } finally {
      btn.disabled = false;
      btn.innerText = 'Apply Now';
    }
  });
}
