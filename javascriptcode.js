function submitAnswer()
{
	var total = 5;
    var score = 0;

var q1 = document.forms["quiz"]["q1"].value;
var q2 = document.forms["quiz"]["q2"].value;
var q3 = document.forms["quiz"]["q3"].value;
var q4 = document.forms["quiz"]["q4"].value;
var q5 = document.forms["quiz"]["q5"].value;

      //validation

      if(q1=="")
      {
	alert("you missed question 1");
     return false;
      }

      if(q2=="")
      {
	alert("you missed question 2");
     return false;
      }

      if(q3=="")
      {
	alert("you missed question 3");
     return false;
      }

       if(q4=="")
      {
	alert("you missed question 4");
     return false;
      }
       if(q5=="")
      {
	alert("you missed question 5");
     return false;
      }
      else
      {
      	alert("submited");
      }

      // Correct Answer

      var answer = ("b","a","b","a","a");

      //check answer
       if(q1== answer[0])
      {
          score++;
       }

       if(q2==answer[1])
      {
      	score++;
      }

      if(q3==answer[2])
      {
      	score++;
      }
      
      if(q4==answer[1])
      {
      	score++;
      }

      if(q5==answer[4])
      {
      	score++;
      }

       //display result
       var results = document.getElementById("results");
       results.innerHTML ="<h3>Your Correct answer is<span>"+score+"</span> out of <span>"+total+"</span></h3>"
       return false;
  }
    