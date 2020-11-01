 window.onscroll = function(){
    let header = document.getElementsByTagName('header')[0];

    if(document.documentElement.scrollTop > 70) {
        header.style.top="90px"
    }
}