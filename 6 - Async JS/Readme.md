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

### What do we need ?
  - First install a _Live Server_ for _Atom_ by simply going to : `Atom -> File -> Settings -> Install ` and in there search for `atom-live-server` and install that package.
  - Now let's write our [First Asynchronous Code](https://github.com/hosseindehghanipour1998/Web_Programming/tree/master/6%20-%20Async%20JS/1%20-%20First%20Async%20Request) with JavaScript.
  - Read more about _atom-live-server_  [here](https://atom.io/packages/atom-live-server).

### How to run Atom-Live-Server
| Command  |  Keybinding | Description  |
| :-: | :-: | :-: |
| atom-live-server:start-server | ctrl-alt-l |  Launch live server on default port, by default 3000.  |  
| atom-live-server:stop-server  | ctrl-alt-q |  Stops currently running instance of live server. |   
| atom-live-server:start-3000   | ctrl-alt-3 |  Launch live server on port 3000.  |
| atom-live-server:start-4000   | ctrl-alt-4 |  Launch live server on port 4000.  |
| atom-live-server:start-5000   | ctrl-alt-5 |	Launch live server on port 5000.  |
| atom-live-server:start-8000   | ctrl-alt-8 |	Launch live server on port 8000.  |
| atom-live-server:start-9000   | ctrl-alt-9 |  Launch live server on port 9000.  |

### Callback Hell
Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. A lot of code ends up looking like this:
```
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})

[reference](http://callbackhell.com/)
```


[Sample Project](https://github.com/hosseindehghanipour1998/Web_Programming/tree/master/6%20-%20Async%20JS/2%20-%20Callback%20Hell)

### Javascript Promises
  - Sometimes promises libraries are not supported by some browsers which makes it a little tricky to use.
  - [Sample Project](https://github.com/hosseindehghanipour1998/Web_Programming/tree/master/6%20-%20Async%20JS/3%20-%20Promises)

### Generators
  - How to define a Generator ?
    - function* <function-name>(){<body of function>}
  - If you have passed the `Programming Languages` course, then you are familiar with the concepts that are talked about in here otherwise I'll suggest you to read [__Coroutines__](https://en.wikipedia.org/wiki/Coroutine).
