const localScope = () => {
  function currentDay() {
    var date = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return `Hi, today is ${days[date.getDay()]}`;
  }

  /*
    Console:
    currentDay()    => "Hi, today is Monday"
    date            => date is not defined
  */
};

const globalScope = () => {
 var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

 function currentMonth() {
   var date = new Date();
   var monthNumber = date.getMonth();

   return `Hi we are in ${months[monthNumber]}`;
 }
 
 /* console:
   currentMonth()   => "Hi we are in January"
   months           => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 */
};

export {
  localScope,
  globalScope
};