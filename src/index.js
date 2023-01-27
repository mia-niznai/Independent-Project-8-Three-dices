// Task 1
// When you click the button with the id select3, hide the button by adding the class hide to it and then hide the other dices by adding to the div's with the id dice6 & dice9 the class hide.
// When you click the button with the id select6, hide the button by adding the class hide to it and then hide the other dices by adding to the div's with the id dice3 & dice9 the class hide.
// When you click the button with the id select9, hide the button by adding the class hide to it and then hide the other dices by adding to the div's with the id dice6 & dice3 the class hide.

// Task 2
// When you click on the div with the id dice3 increment the number displayed in it's innerText. (if it was 1 make it 2 and so on. When the dice has the innerText 3 make it again 1)
// When you click on the div with the id dice6 increment the number displayed in it's innerText. (if it was 1 make it 2 and so on. When the dice has the innerText 6 make it again 1)
// When you click on the div with the id dice9 increment the number displayed in it's innerText. (if it was 1 make it 2 and so on. When the dice has the innerText 9 make it again 1)


const select3 = document.getElementById('select3');
const select6 = document.getElementById('select6');
const select9 = document.getElementById('select9');
const dice3 = document.getElementById('dice3');
const dice6 = document.getElementById('dice6');
const dice9 = document.getElementById('dice9');

//Your code comes below this line

select3.addEventListener("click", function(){
    select3.classList.remove("dice");
    select3.classList.add("hide");
    select6.classList.remove("dice");
    dice6.classList.add("hide");
    select9.classList.remove("dice");
    dice9.classList.add("hide");
    let dice3Value = parseInt(this.innerText);
    if (dice3Value === 3){
      this.innerText = 1;
    }else{
      this.innerText = dice3Value+1;
    }
  });
  
  select6.addEventListener("click", function (){
    select6.classList.remove("dice");
    select6.classList.add("hide");
    select3.classList.remove("dice");
    dice3.classList.add("hide");
    select9.classList.remove("dice");
    dice9.classList.add("hide");
    let dice6Value = parseInt(this.innerText);
    if (dice6Value === 6){
      this.innerText = 1;
    }else{
      this.innerText = dice6Value+1;
    }
    });
  
  select9.addEventListener("click", function (){
    select9.classList.remove("dice");
    select9.classList.add("hide");
    select3.classList.remove("dice");
    dice3.classList.add("hide");
    select6.classList.remove("dice");
    dice6.classList.add("hide");
    let dice9Value = parseInt(this.innerText);
    if (dice9Value === 9){
      this.innerText = 1;
    }else{
      this.innerText = dice9Value+1;
    }
    });


//Your code comes above this line
