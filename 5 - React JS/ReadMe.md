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


<img src="https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/Misc%20Data/React/OneWay%20Data%20Flow.PNG" height="400" width="500" align="middle">


If any _red_ components change, only their _children_ would be affected  and theirs _parents_ wouldn't even care about what has happened to their children. This concept prevents a lot of bugs from happening in our code.

Another advantage of _React_ is something called ***Virtual DOM***. Before _React_ we would refer to each element individually by calling each object by it's _ID_ or _Name_ or etc. But in _React_ we say:

 > Hey _React_ , this is the whole object and we want this to look like this, do the rest for us and don't bother us with the ID selection or anything.

And that's what _React_ does. Reaching us to our purpose without bothering us with the details. This is the main reason that we can use _React_ to also write _Mobile Apps_ or _Web Pages_ all together by just telling the _React_ to convert them to each other saving us the time for writing the app for other platforms from scratch.

The good about _React_ is that if we changed any source file in our _CSS_ , _HTML_ or _JS_ code , there is no need for us to refresh the page. React has a _Local Virtual Server_ that does this task for us automatically.


# Installing Babel

  - First Open Sublime text Editor.
  - press `ctrl + alt + p` which opens a terminal for you.
  - Write `install Package` and press `Enter`. This will show you a list of packages.
  - Search for `Babel` and while you found it press `Enter`.
  - Then open  Sublime Text again and at the _Bottom Corner_ of the page you can click on the red rectangle and change it to `babel -> Java Script`

# Installing React For first Time
First it's good to mention that we are going to use _Terminal_ to run some commands in order to install some files.
  - Install NodeJS and NPM[(How to Install NodeJS and NPM ?)](https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/4%20-%20Javascript/4%20-%20NPM/NPM.MD#how-to-set-up-npm-on-our-computer-)
  - You also need to install [___Lodash___ & ___Live-server___](https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/4%20-%20Javascript/4%20-%20NPM/NPM.MD#lodash--live-server-packages-) packages.
  - Now we should install ___"Create React App"___ by simply saying : `npm install -g create-react-app`.
    - We can test _"Create React App"_  version with : `create-react-app --version`

  - Now it's time to create our first project.

## Create your project
Now that we have installed this app, we create react app by simply typing :

` create-ract-app app-name`

If you faced any errors, click [Here](#Errors)

which would create the project you want at the current directory you are in right now. Now if we go to the directory we can simply see that a lot of files have been created for us.[(a sample)](https://github.com/hosseindehghanipour1998/Web_Programming/tree/master/5%20-%20React%20JS/1%20-%20Create%20Your%20First%20React%20App/first-react-project)

## Wander in the created files
If we go to _package.json_ we can see that a few tags have been written down there.

Let's start describing each one. Simply type  ` npm start ` and check the opened browser for us. This what you should see on the opened browser:


<img src="https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/Misc%20Data/React/start.PNG" height="400" width="500" align="middle">


## Created files
  - a ***Readme***
  - ***Package.json***
    - Dependencies
    - scripts
  - ***Package-lock.json :*** Makes sure that the versions of your dependencies are correct.
  - ***gitignore :*** ignores the files that shouldn't be pushed into our "Github" repository.
  - ***public folder :*** A few _.js_ files that we must be familiar with since we have already practiced _Java Script_
  - ***node-modules folder***
  - ***src folder :*** This is where all the magic is going to happen.



<!-- Errors Section -->
<h1 id="Errors">Errors you may run into </h1>

  - If your error was something about `scripts is disabled in this system ` it means that you have to change the ***Execution Policy*** of your system by simply typing : `Set-ExecutionPolicy RemoteSigned` in the terminal.


  <img src="https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/Misc%20Data/React/scripts%20disable%20error.PNG" height="163" width="1000" align="middle">

  - If you had any error with the concept of `Missing Write Access` you should simply switch to _Administrator Terminal_ with the shortcut : `alt + f` and then pressing `s` then `r`.

  <img src="https://github.com/hosseindehghanipour1998/Web_Programming/blob/master/Misc%20Data/React/accessError.PNG" height="466" width="1000" align="middle">


### Warning :
  - _Sublime text_ doesn't recognize the _React_ files. In order to do so we must install _babel package_ .[How to Install Babel ?](https://github.com/hosseindehghanipour1998/GitTest#installing-babel)
  - When you see a _React_ code for the first time you may get confused a little bit due to the structure but don't worry you will understand every thing as the time passes.


Good Luck.
