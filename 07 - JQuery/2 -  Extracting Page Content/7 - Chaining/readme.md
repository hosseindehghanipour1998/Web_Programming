## What is Chaining ?
We can call multiple functions in order on a _Data set_ without _retrieving_ the data set over and over again.


With jQuery, you can chain together actions/methods.

Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.

## jQuery Method Chaining
Until now we have been writing jQuery statements one at a time (one after the other).

However, there is a technique called chaining, that allows us to run multiple jQuery commands, one after the other, on the same element(s).

Tip: This way, browsers do not have to find the same element(s) more than once.

To chain an action, you simply append the action to the previous action.

The following example chains together the `css()`, `slideUp()`, and `slideDown()` methods. The `"p1"` element first changes to red, then it slides up, and then it slides down:

`$("#p1").css("color", "red").slideUp(2000).slideDown(2000);`

The functions are executed __in order__ from __Left To Right__ .

<img src="https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/Misc%20Data/jQuery/jQuey%20Chaining.PNG" height="auto" width="auto" align="middle">
