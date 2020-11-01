document.onscroll = function(){
    var sideNav = document.getElementById('sideNav');
    if(document.documentElement.scrollTop > 200) {
        
        
        sideNav.style.top='30%'
        sideNav.style.opacity='1'
        
    }
    else{
        sideNav.style.top='-70px'
        sideNav.style.opacity='0'
    }
}

var navHeight = true
function morphNav(){
    console.log(navHeight)
    if(navHeight){document.getElementById('sideNav').style.height="230px"; navHeight = !navHeight;}    
    else {document.getElementById('sideNav').style.height="70px"; navHeight = !navHeight;}  
}
document.getElementById('sideNav').addEventListener('mouseover', morphNav)
document.getElementById('sideNav').addEventListener('mouseout', morphNav)

