document.addEventListener('DOMContentLoaded', ()=> {
  const filterButtons = document.querySelectorAll('.filters button');
  const items = document.querySelectorAll('#gallery .weapon');

  filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(it=>{
        if(f === 'all' || it.classList.contains(f)) it.style.display = '';
        else it.style.display = 'none';
      });
    });
  });

  // modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('.view').forEach(b=>{
    b.addEventListener('click', e=>{
      const img = b.dataset.img;
      const title = b.dataset.title || '';
      modalImg.src = img;
      modalTitle.textContent = title;
      modal.setAttribute('aria-hidden','false');
    });
  });

  modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', e=>{
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });
});
