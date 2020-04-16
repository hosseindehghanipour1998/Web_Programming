# Synchronous vs Asynchronous
  - _Java Script_ code runs on a _single thread_ which means can only do 1 thing at a time.
  - All the sequential codes are generally _synchronous_ unless we explicitly say it otherwise.
  - _Synchronous_ codes wait for 1 action to __"Complete"__ before moving to the next line of code.
But what happens if a file is highly large and it requires more time to be uploaded on the webpage ? should the whole program be stalled and wait for the file to upload then carry on loading the rest of the page ? ***NO*** that's where ___Asynchronous Calling___ comes handy. _Asynchronous_ calling would let us start a task by not blocking the path of the rest of the program and get out of the way until it's done and then come back.

### Asynchronous Flow Controls
  - ***Callbacks*** -> _Good_
  - ***Promises*** -> _Better_
  - ***Generators*** -> _Awesome_

### AJAX Requests
  - Stands for : _Asynchronous Javascript And XML_. ( we may use _JSON_ instead of _XML_ these days.)
  - Communicates with a server with _HTTP Request_.
  - No need to reload the whole page for editing one element.

# What do we need ?
  - First install a _Live Server_ for _Atom_ by simply going to : `Atom -> File -> Settings -> Install ` and in there search for `atom-live-server` and install that package.
  - Now let's write our [First Asynchronous Code](https://github.com/hosseindehghanipour1998/Web_Programming/tree/master/6%20-%20Async%20JS/1%20-%20First%20Async%20Request) with JavaScript.
  - Read more about _atom-live-server_  [here](https://atom.io/packages/atom-live-server).
