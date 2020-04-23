
// These two pieces of code are equal.

/*
movePlayer(100,'left')
.then( () => movePlayer(400,'left'))
.then( () => movePlayer(10,'right'))
.then( () => movePlayer(330,'left'))

*/



// "await" makes the code look simpler and more readable.
async function playerStart() {
	
	/*
	const firstMove = await movePlayer( 100 , 'left' ) ; //pause
	const secondMove = await movePlayer( 400 , 'left' ) ; //pause
	const thirdMove = await movePlayer( 10 , 'right' ) ; //pause
	const forthMove = await movePlayer( 330 , 'left' ) ; //pause
	
	*/
	
	// Or simply saying
	await movePlayer( 100 , 'left' ) ; //pause
	await movePlayer( 400 , 'left' ) ; //pause
	await movePlayer( 10 , 'right' ) ; //pause
	await movePlayer( 330 , 'left' ) ; //pause
}

// =================================================
// how about fetch functions ? 
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)


async function fetchUsers(){
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);
}
//==================================================
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

const getData = async function() {

	const [users , posts , albums ] = await Promise.all(urls.map(url => {return fetch(url).then(resp => resp.json())}));
	try {
		console.log("here comes the result");
		console.log(users);
		console.log(posts);
		console.log(albums);
	}
	catch{
		console.log("Error");
	}
}
//==================================================