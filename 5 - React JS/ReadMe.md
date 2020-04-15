# Introduction To React
React is a [JavaScript](https://flaviocopes.com/javascript/) library that aims to simplify development of visual interfaces.

Developed at Facebook and released to the world in 2013, it drives some of the most widely used code in the world, powering Facebook and Instagram among many, many other software companies.

Its primary goal is to make it easy to reason about an interface and its state in any point in time, by dividing the UI into a collection of components.

React is used to build single-page web applications, among with many other libraries and frameworks that were available before React came into life.

Reference : [Jaxenter.com](https://jaxenter.com/introduction-react-147054.html)
### What was before React ?
_"JQUERY"_ was used before _React_ but it was so messy and complicated to cope with. _React_ was made to help developers build _"Facebook"_ and then used in _"Instagram"_ due to it's simplicity.

### Principles of React
In _React_ we look at everything as ***"Atoms"***  and by combining them we create ***"molecules"***. By combining molecules we create ***"Components"*** and by combining components we can create ***"Organisms"*** and using organisms we create ***"Web Pages"***. The advantage of this structure is that we can use other developers components by just simply downloading them and implementing them into out code. In _React_ components we have both ***"User Interface"*** and ***"Functionality"*** of that component together.


Another advantage of _React_ is ***"One Way Data Flow"***. The best way describing it is by looking at the graph below.
<img src="https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/Misc%20Data/React/OneWay%20Data%20Flow.PNG" height="500" width="500" align="middle">


If any _red_ components change, only their _children_ would be affected  and theirs _parents_ wouldn't even care about what has happened to their children. This concept prevents a lot of bugs from happening in our code.

Another advantage of _React_ is something called ***Virtual DOM***. Before _React_ we would refer to each element individually by calling each object by it's _ID_ or _Name_ or etc. But in _React_ we say:

 > Hey _React_ , this is the whole object and we want this to look like this, do the rest for us and don't bother us with the ID selection or anything.

And that's what _React_ does. Reaching us to our purpose without bothering us with the details. This is the main reason that we can use _React_ to also write _Mobile Apps_ or _Web Pages_ all together by just telling the _React_ to convert them to each other saving us the time for writing the app for other platforms from scratch.

The good about _React_ is that if we changed any source file in our _CSS_ , _HTML_ or _JS_ code , there is no need for us to refresh the page. React has a _Local Virtual Server_ that does this task for us automatically.


<h1 id="InstallingBabel"> Installing Babel <h1>
  1. First Open Sublime text Editor.
  2. press `ctrl + alt + p` which opens a terminal for you.
  3. Write `install Package` and press `Enter`. This will show you a list of packages.
  4. Search for `Babel` and while you found it press `Enter`.
  5. Then open  Sublime Text again and at the _Bottom Corner_ of the page you can click on the red rectangle and change it to `babel -> Java Script`

### Warning :
  - _Sublime text_ doesn't recognize the _React_ files. In order to do so we must install _babel package_ .[How to Install Babel ?](#InstallingBabel)
  - When you see a _React_ code for the first time you may get confused a little bit due to the structure but don't worry you will understand everythingas the time passes.


Good Luck.
