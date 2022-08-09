function followMe(elm){
    if(elm.dataset.down == "1"){
        elm.innerHTML = "<i class='fa-solid fa-angle-up'></i>";
        elm.dataset.down = "0";
    }else{
        elm.innerHTML = "<i class='fa-solid fa-angle-down'></i>";
        elm.dataset.down = "1";
    }        
}