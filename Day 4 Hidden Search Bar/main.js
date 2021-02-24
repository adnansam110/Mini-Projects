const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    if(search.classList.contains('active')){
        search.classList.remove('active');
    }
    else{
        search.classList.add('active');
    }
    
});