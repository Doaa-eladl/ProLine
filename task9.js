document.querySelector('.hamburgerborder').addEventListener('click',()=>{
    if(document.querySelector('.menubackground').style.opacity=='1'){
        document.querySelector('.menubackground').style.opacity = '0';
    }
    else{
        document.querySelector('.menubackground').style.opacity = '1';
    }
})