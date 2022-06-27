$(function(){
    animatescroll();
})

function animatescroll(){
    $(window).scroll(function () { 
        var scrollV = $(document).scrollTop(); 
        // console.log(scrollV);
        let offCourse = $('.summer-text > p').offset().top;
        // console.log(off);
    
        /* let valueText = scrollV - offText */
        let valueCourse = scrollV - offCourse
        console.log(valueCourse);
    
        if(valueCourse > 550){
            $('.summer-text > p').addClass('animate__animated')
            $('.summer-text > p').removeClass('P-none')
        }
     
    });
}