var random_num=Math.floor(Math.random()*100+1);
var user_num=document.getElementById("nmbr");
var btn=document.getElementById("btn");
var area_guesses=document.getElementById("nog");
var rslt_area=document.getElementById("rslt");
numOfGusses=0;
area_guesses.innerHTML=numOfGusses;
function checkGuess(){
    newnum=numOfGusses++;
    area_guesses.innerHTML=newnum;
    console.log(user_num.value)
    value=user_num.value;
         if(value < random_num){
            console.log("TWO LOW");
            rslt_area.innerHTML="Too Low, Try again"
        }
        else if(value>random_num){
            console.log("TOO HIGH");
            rslt_area.innerHTML="Too High, Try again"
        }
        else{
            console.log("YOU WIN");
            rslt_area.innerHTML="Congratulations, You win good job"
            endgame();
        }
    }
        btn.addEventListener("click",checkGuess);
        function endgame(){
        user_num.disabled= true ;
        btn.disabled= true;
   }


