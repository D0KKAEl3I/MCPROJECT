window.onscroll = function(){
    if(document.documentElement.scrollTop > 124){

    document.getElementById('sectionNav').style.top='0'
    document.getElementById('sectionNav').style.display='flex'
    console.log(document.getElementById('sectionNav'))
    }
}