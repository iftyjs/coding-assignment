function kilometerToMeter(kilometer){

  // Check if negative value input, return 0
  if(kilometer < 0) return "Provide a positive number, please";

  // Calculate the result
  return kilometer * 1000;
}

function budgetCalculator(watch = 0, phone = 0, laptop = 0){

  // Check if negative watch input, return 0
  if(watch < 0 ) {
    watch =  0;
  }

  // Check if negative phone input, return 0
  if(phone < 0 ) {
    phone =  0;
  }

  // Check if negative laptop input, return 0
  if(laptop < 0 ) {
    laptop =  0;
  }

  // Calculate the total amount
  return (watch * 50) + (phone * 100) + (laptop * 500);
}

function hotelCost(day){
  let totalCost = 0;

  // Check if negative value input, return 0
  if(day < 0) {
    return 0;
  }

  if(day <= 10){
    return totalCost = day * 100;
  }

  if(day <= 20){
    return totalCost = ((day - 10) * 80) + 1000;
  }

  if(day > 20){
    return totalCost = ((day - 20) * 50) + 1800;
  }
}


function megaFriend(friends){

  // Check if is an Array
  if(!Array.isArray(friends)){
    return "We are expecting an array";
  }

  let bigName = "";
  for(let i = 0; i < friends.length; i++){
    let frindName = friends[i];
    if(bigName.length < frindName.length ){
      bigName = frindName;
    }
  }

}