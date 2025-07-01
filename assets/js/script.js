let searchbtn = document.querySelector(".search_icon");
let searchbox = document.querySelector("#search-box");
let crossbtn = document.querySelector(".cross");

searchbtn.addEventListener('click', function(){
    searchbox.classList.toggle('search_active');
    
});

crossbtn.addEventListener('click', function(){
    searchbox.classList.remove('search_active');
   
});


 