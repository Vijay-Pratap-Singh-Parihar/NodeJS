const alert = require('alert');
function init() //function1-outer/parent
{
    var name = 'Chrome'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // use variable declared in the parent function,body of the child function
        // console.log("Iam here");
    }
    displayName();// inner/closure/child function
    // console.log("Iam here TOO");
}
init();
// displayName();// inner/closure/child function
  //displayName();-- outer function call will not achieve the purpose of closure
  //purpose of closure is to call multiple inner functions by just one outer function call