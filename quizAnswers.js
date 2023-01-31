const correctAnswers = ['A', 'B', 'B', 'A', 'B'];        

const form = document.querySelector('.quiz-form');  

const result = document.querySelector('.result');   

form.addEventListener('submit', e => {                 // e = event
    e.preventDefault();                                // prevent browser from default refresh page
    
    let score = 0;                                     // score starts always as 0:
    
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];   //get users answers inside an array:
    
    
    userAnswers.forEach((answer, index) => {           //to check users answers:
    
        if(answer === correctAnswers[index]){
          score += 20;
        }
    });
  
    result.classList.remove('d-none');

    scrollTo(0,0);                         
    
    //result.querySelector('span').textContent = `${score}%`;   //replaced span text content by the score
    //                                                          // this was replaced to code the score animation underneath
    
    // score animation:
    let output = 0;
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;  //callback function that will fire every 10 miliseconds
      if(output === score){                                     //to keep updating the score as the user clicks
        clearInterval(timer);                                   //if the output is equal to the actual score it will clear/stop, if not
      } else{
        output++;                                               // keep adding until it reachs the users score
      }
    }, 10);
  });
