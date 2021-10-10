window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.background = "#141414";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}

const lupa = document.getElementById("lupa");
const search = document.getElementById("search");

lupa.onclick = function(){exibir()};


function exibir(){

   const x = search.style.display;

   if(x == ""){
      search.style.display = "block";
      search.style.visibility = "visible";
      search.style.opacity = "1"; 
   }
   else{
      search.style.display = "";
      search.style.visibility = "hidden";
      search.style.opacity = "0"; 
   }
    
};