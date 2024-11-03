function randNum(){
    cpercent = document.getElementById("cpercent").value;
    result=document.getElementById("result");
    result.innerHTML=Math.floor(Math.random()*(cpercent*5))-0;
}
