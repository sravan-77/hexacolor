function changecolor(){
    var colo=document.getElementById("input-text").value;
    // alert(colo.length);
    if(colo.length>=3 && colo.length<=6){
        c="#"+colo;
        // alert(colo);
        document.body.style.backgroundColor=c;
        document.getElementById("col-name").innerHTML=`you are enter the ${c} color`;
        document.getElementById("input-text").value="";
    }
    else{
        document.getElementById("col-name").innerHTML=`enter the in between length is 3 to 6(0-F)`;
    }

}