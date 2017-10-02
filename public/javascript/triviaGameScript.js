
// document.load = function() {

var points =0;



correctAnswer = (i) => { 
   
   let ans= document.getElementById(`correctanswer${i}`);
    if (ans.dataset.clicked==""){
        points -= 1;
        ans.dataset.clicked="-1";
        console.log("clicked");
         document.querySelector(`#correctanswer${i}`).style.border = "none";
        
    }else{
        points+=1;
        ans.dataset.clicked="";
        console.log("unclicked");
         document.querySelector(`#correctanswer${i}`).style.border = "3px solid #FFCC67";
    }
    document.getElementById('points').value=points;
}

// incorrect answer 1
incorrectAnswer = (i) => { 
   
   let ans= document.getElementById(`incorrectanswer${i}`);
    if (ans.dataset.clicked==""){
        ans.dataset.clicked="-1";
        console.log("clicked");
         document.querySelector(`#incorrectanswer${i}`).style.border = "none";
        
    }else{
        ans.dataset.clicked="";
        console.log("unclicked");
         document.querySelector(`#incorrectanswer${i}`).style.border = "3px solid #FFCC67";
    }
    console.log(points);
}

//incorrect answer 2

secondIncorrectAnswer = (i) => { 
   
   let ans= document.getElementById(`secondincorrectanswer${i}`);
    if (ans.dataset.clicked==""){
        ans.dataset.clicked="-1";
        console.log("clicked");
         document.querySelector(`#secondincorrectanswer${i}`).style.border = "none";
        
    }else{
        ans.dataset.clicked="";
        console.log("unclicked");
         document.querySelector(`#secondincorrectanswer${i}`).style.border = "3px solid #FFCC67";
    }
    console.log(points);
}

lastAnswer = (i) => { 
   
   let ans= document.getElementById(`lastanswer${i}`);
    if (ans.dataset.clicked==""){
        ans.dataset.clicked="-1";
        console.log("not working clicked");
         document.querySelector(`#lastanswer${i}`).style.border = "none";
        
    }else{
        ans.dataset.clicked="";
        console.log(" not working unclicked");
         document.querySelector(`#lastanswer${i}`).style.border = "3px solid #FFCC67";
    }
    console.log(points);
}

// const questionLength =document.getElementById('dataLength').value;


for(let i = 1; i<= 50 ; i++){

        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(`#correctanswer${i}`).addEventListener("click", function(){ console.log(i);correctAnswer(i)  });

        })

        //incorrect answers
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(`#incorrectanswer${i}`).addEventListener("click", function(){ console.log(i);incorrectAnswer(i)  });

        })

          //incorrect answers 1
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(`#secondincorrectanswer${i}`).addEventListener("click", function(){ console.log(i);secondIncorrectAnswer(i)  });

        })

                //incorrect answers 1
        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(`#lastanswer${i}`).addEventListener("click", function(){ console.log(i);lastAnswer(i)  });

        })
}

// }
