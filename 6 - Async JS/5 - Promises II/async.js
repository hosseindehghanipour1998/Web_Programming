
// We create a Promise
const promise = new Promise((resolve,reject) => {
	if(true){
		resolve("stuff worked");
	}
	else{
		reject("Stuff Rejected!");
	}

});

// We call the promise
promise
.then(result => console.log(result))
.then(callbackResult => {
	throw Error // like try/catch => we have throw/catch here
	console.log(callbackResult);
})
.catch(() => console.log("Faced an Error!"))
.then(secondCallbackResult => console.log(secondCallbackResult + "!"));

// Defining Promise 2
const promise2 = new Promise((resolve,reject) => {
	setTimeout(resolve,5000,'Hiiiiii');
	// run the code and return the "hiiii" after 100 ms.
});

promise2.then(result => console.log(result));

// Defining promise 3
const promise3 = new Promise((resolve,reject) => {
	setTimeout(resolve,1000,'1 second passed');
	// run the code and return the "hiiii" after 100 ms.
});

const promise4 = new Promise((resolve,reject) => {
	setTimeout(resolve,1000,'2 seconds passed');
	// run the code and return the "hiiii" after 100 ms.
});

const promise5 = new Promise((resolve,reject) => {
	setTimeout(resolve,1000,'3 seconds Passed');
	// run the code and return the "hiiii" after 100 ms.
});


/*
	what this function does is that it runs all the promises
	given to it as parameters and prints their returned values
	in the order you have passed them.
	It waits until all the promises are done ( which is 5 seconds 
	in here because the longest promise we have is 5 seconds)
	and then prints the returned values.

*/
Promise.all([promise3,promise4,promise5,promise2])
.then(values => {
	console.log(values);

})


// We can define URLs like this :
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log("here comes the result");
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
}).catch(() => console.log("Error"));
