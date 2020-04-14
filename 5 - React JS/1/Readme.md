## Install a tool
At first we install a tool called ***Create React App*** by simply entering this command in the _Terminal_ :

` npm install -g create-react-app `

If you faced any errors, click [Here](#Errors)

## Create your first app
Now that we have installed this app, we create react app by simply typing :

` create-ract-app app-name`

If you faced any errors, click [Here](#Errors)

which would create the project you want at the current directory you are in right now. Now if we go to the directory we can simply see that a lot of files have been created for us.

## Wander in the created files
If we go to _package.json_ we can see that a few tags have been written down there.

Let's start describing each one. Simply type  ` npm start ` and check the opened browser for us. This what you should see on the opened browser:

<!-- Place for Image 4 -->

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

  - If you had any error with the concept of `Missing Write Access` you should simply switch to _Administrator Terminal_ with the shortcut : `alt + f` and then pressing `s` then `r`.
  <!-- place for image 3 -->
