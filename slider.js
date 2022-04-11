/*
jQuery(window).scroll((function() {
  const footerHeight = 250;
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight) * 100;
  jQuery("#reading-progress-fill").css({width: w + "%"})
}));
*/


const readingProgress = document.querySelector('#reading-progress-fill');
const footerHeight = 250;
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
});