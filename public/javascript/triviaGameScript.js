
// window.load = function() {

var points =0;

correctAnswer = () => { 
   
   let ans= document.getElementById("correctanswer1");
    if (ans.dataset.clicked==""){
        points += 1;
        ans.dataset.clicked="1";
        console.log("clicked");
         document.querySelector(`#correctanswer1`).style.border = "5px solid yellow";
        
    }else{
        points-=1;
        ans.dataset.clicked="";
        console.log("unclicked");
         document.querySelector(`#correctanswer1`).style.border = "5px solid yellow";
    }

    console.log(points);

}

// for(let i = 0; i<=50; i++){

//  document.querySelector(`.correctAnswer${i}`).addEventListener("click", correctAnswer(i) );

// }

//  document.querySelector(`.correctAnswer1`).addEventListener("click", correctAnswer() );

//  document.querySelector(`.correctAnswer1`).addEventListener("click", function(){ alert("something"); correctAnswer() } );
document.addEventListener('DOMContentLoaded', function(){
     document.querySelector('#correctanswer1').addEventListener("click", function(){ console.log("slnclscklnkls");correctAnswer()  });

})
// }