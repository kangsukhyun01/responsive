// slick
$('.tit .btn').click(function(e){
    e.preventDefault();

    $('.nav').slideToggle();
    $('.tit .btn').toggleClass("opne")

    if($('.tit .btn').hasClass("opne")){
        //A.attr(B) ==> A요소안에 있는 속성 B를 가저와라
        //A.attr(B,C) ==> A요소안에 있는 속성 B를 C로 바꾸어라
        // $('.tit .btn').find('i') ==> .btn 자손중에서 i태그를 찾아라 (css에서 띄워쓰는 의미와 유사)
        $('.tit .btn').find('i').attr('class', 'fas fa-caret-up')
    }else{
        $('.tit .btn').find('i').attr('class', 'fas fa-caret-down')
    }
})

$('.col4 .slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    dots:true
  });
  $('.col4 .slider').slick('setPosition');


  //lightGallery
  lightGallery(document.getElementById('lightGallery'), {
    plugins: [lgThumbnail],
});
