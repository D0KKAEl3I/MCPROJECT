var sideNav
window.onload = function() {
    sideNav = document.getElementById('sideNav');
}
console.log(document.getElementById('sideNav'))
window.onscroll = function(){
    if(document.documentElement.scrollTop > 200) {
        sideNav.style.top='30%'
        sideNav.style.opacity='1'
        
    }
    else{
        sideNav.style.top='-70px'
        sideNav.style.opacity='0'
    }
}

