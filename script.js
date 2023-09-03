$(document).ready(function(){
  $("#bars_btn").click(function(){
   $("#lists").toggle();
});

$(window).resize(function(){
  if($(window).width() > 1200){
    $('#lists').show()
}
}
  
)
$('#lists ul li a').click(function(){
  
  if($(window).width() > 1200){
    $('#lists').show()
  }else{
    $('#lists').hide()
  }
})
});