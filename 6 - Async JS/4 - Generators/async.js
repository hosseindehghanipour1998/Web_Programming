window.onload = function(){
	function* gen(){
		var x = yield 10 ;// returns 10 and pauses until next .next() method.
		console.log("The Next Yield get Here.")
	}

	var myGen = gen() ;
	console.log(myGen.next()) // we start the function and pause at yield
	console.log(myGen.next()) // we continue from the yield and carry on.

// ====================================================================
	// How do we use it in Async Request ?
function genWrap(generator){
	gen = generator();

	function handle(yielded){
		if(yielded.done == false){
		yielded.value.then(function(data) {return handle(gen.next(data));});// recursive calling
		}
	return handle(gen.next());
	}
}

	function* getData(){
		let tweets = yield $.get("data/tweets.json");
		console.log(tweets);
		let friends = yield $.get("data/friends.json");
		console.log(friends);
		let videos = yield $.get("data/videos.json");
		console.log(videos);
	}
	genWrap(getData);
}
