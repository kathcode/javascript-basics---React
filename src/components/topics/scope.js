const scope = () => {
  /*
    --- SCOPE ---

    Is the current context of the execution.
    Determines the accessibility (visibility) of variables.
    there are two types of scope:
    - local 
    - global.
  */

  /*
    --- Local scope ---

    The variable date is defined in the function,
    so you just can use it inside the function.
  */

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


  /*
    --- Global scope ---

    The variable months are defined outside the currentMonth function,
    And you can use it outside or inside the function.
  */

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function currentMonth() {
    var date = new Date();
    var monthNumer = date.getMonth();

    return `Hi we are in ${months[monthNumer]}`;
  }
  
  /* console:
    currentMonth()   => "Hi we are in January"
    months           => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  */

}

export default scope;