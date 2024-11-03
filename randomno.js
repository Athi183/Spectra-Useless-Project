function randNum(){
    cpercent = document.getElementById("cpercent").value;
    result=document.getElementById("result");
    if(cpercent<50){
    result.innerHTML=Math.floor(Math.random()*(cpercent*1))-0;
    }
    else if(cpercent>50 && cpercent<=200){
        result.innerHTML=Math.floor(Math.random()*(cpercent*0.5))-0;
    }
    else if(cpercent>200 && cpercent<=1000){
        result.innerHTML=Math.floor(Math.random()*(cpercent*0.15))-0;
    }
    else{
        result.innerHTML=Math.floor(Math.random()*(cpercent*0.005))-0;  
    }
}
