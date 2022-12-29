$(document).ready(function () {
  setTimeout(function () {
    $(".loading-wrapper").fadeOut(500);
  }, 1000);
});


$(document).ready(function () {
  setTimeout(function () {
    $(".bigbody").fadeOut(1500);
  }, 4000);
});



/* Archivo externo JS */
/*Visitar la web que hay un flejaso de ejemplos*/
// Función de ventana de alerta
function cart() {

  swal({
    title: '已加入購物車!',
    text: 'Added to cart!',
    html: '<p>Mensaje de texto con <strong>formato</strong>.</p>',
    type: 'success',
    timer: 3000,
  });
}

let itemList=$("#itemList").offset().left;
let cartPos=$("#cart").offset().left;
var flyTo;
// console.log(cartPos)

$(".btn").click(function(){
  let item=$(this).closest(".item");
  let img=item.find("img").attr("src");
  let itemX=item.offset().left-itemList;
  let itemY=item.offset().top;
  TweenMax.killTweensOf('#show');
  
  $("#show")
    .css({
      left: itemX,
      top: itemY,
      width: 200,
      opacity: 1
    })
    .find("img").attr("src", img)
  
  TweenMax.to("#show", 0.8, {left:cartPos-itemList, top: 10, width: 20});
  TweenMax.to("#show", .3, {
    css:{
      opacity: 0
    }, delay:0.5})
  
});


