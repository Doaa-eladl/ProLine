console.log(document.querySelector('.menubackground'))

document.querySelector('.hamburgerborder').addEventListener('click',()=>{
    console.log("gggggggggg")
    if(document.querySelector('.menubackground').style.opacity=='1'){
        document.querySelector('.menubackground').style.opacity = '0';
    }
    else{
        document.querySelector('.menubackground').style.opacity = '1';
    }
})