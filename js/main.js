window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.background = "#141414";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}