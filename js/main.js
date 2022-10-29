$(function(){
    var mixer = mixitup('.portfolio__content');

    let leftArrPath = '<img src="./images/arr-left.svg" alt="left arrow">';
    let rightArrPath = '<img src="./images/arr-right.svg" alt="rihgt arrow">';

    $(".youtube-link").grtyoutube();

    $(".slider-blog__inner").slick({
        arrows: true,
        dots: true,
        prevArrow: `<button type="button" class="slick-prev">${leftArrPath}</button>`,
        nextArrow: `<button type="button" class="slick-next">${rightArrPath}</button>`
    });
});


