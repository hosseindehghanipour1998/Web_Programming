# What is NPM ?
  - NPM was created for developers to share _JS_ code with each other.
  - NPM provides Packages for _JS_ ( AKA Modularity for other Programming Languages).
  - Each package includes a ***Package.Json*** file that includes meta-data for the JS packages.
  - Packages allow us to _"save time"_ by not writing everything from scratch.
# How to Use other packages ?
  - Developers can upload/download their files from some place named ***NPM Registry***
  - Not all packages in the _Registry_ is good. It's an art to find good packages.

# What is Yarn ?
  - ***Yarn*** is a tool that helps us grabbing the required files from _NPM Registry_.

# Three Types of Packages :
  1. Packages you can use on your ***browser*** that help you in ***front-end*** like : "_JQuery_"
  2. Once you can use in ***Backend*** like "_Node JS_".
  3. Some commands used in ***Command Line***.

# How to set up NPM on our Computer ?
  1. We Need to download the latest _"Node JS"_ package and install it.
    - You can download it from [HERE](https://nodejs.org/en/download/).
  2. After Downloading and Installing _Node JS_ go to _Terminal_ and write: `npm -v` to see the version Number of the _Node JS_.
    - By the time I'm Writing this document, the latest version for _NPM_ is _6.13_
  3. Do the same for _Node JS_ by writing `node -v`.
    - In order to install the latest version of _NPM_ by _Terminal_ you can simply write : `npm install npm@latest -g`.
  4. Every time you are going to start a project, open terminal in the directory of your project and simply write `npm init`. This command creates a _JSON_ file for the package you are willing to add to your project.

# What is Node JS?
  - In simple concise terms, ***Node JS*** is what allows us to run _Java Script_ code outside a _Browser Console_.
  - For more information you can visit [Wikipedia](https://en.wikipedia.org/wiki/Node.js).

### Lodash & Live-server packages :
  - we can install any package in two types :
    - ***Locally*** : You can only use the package in your project directory.
    - ***Globally*** : You can use the package **anywhere** on your computer such as **Terminal**.
  - We can install any package using this command :
  ```
  npm install -l package-name
  npm install -g package-name
  ```
  - `-g` and `-l` refer  to **Globally** and  **Locally** installation respectively.
  - If you ran into a _Permission Denied_ error, switch to **Administrator** terminal ( on _Windows_ ) or run the command with **sudo** privilege ( on _Linux Based_ systems ).

  - ***Live Server*** acts as a fake server we use to test out project. (Install it globally.)
    - `npm install -g live-server`
  - ***Lodash*** provides us lots of functions and methods that exterminates our needs in writing them from scratch.(Install this locally.)
    - `npm install -l lodash`
  - How to use a lodash function in our script ?
    - write this code above your _.js_ file : `import {function-name} from 'lodash'`
    - If you faced any error, that's because of the way we must import the modules in _JS_.
    - There is also a package called [***Browserify***](http://browserify.org/). Read about it in [Wikipedia](https://en.wikipedia.org/wiki/Browserify).

# Don't Import All files
there is no need to import all files of _Node Js_ in your repository. All you need is the _Package.Json_ file attached to the project in order to bring the needed functionality.

# Dev. Dependency :
The packages that are **Only** used by the _Developers_ to _run and test_ the projects **Locally** and they get omitted while pushing our project automatically.

- We can write a `<scripts>`block in out _Package.json_ in order to make some functionalities automated by the system and leave the pressure from the programmer.
