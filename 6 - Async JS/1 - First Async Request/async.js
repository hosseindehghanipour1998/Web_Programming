window.onload = function(){

	var http = new XMLHttpRequest();

	http.onreadystatechange = () => {
		//console.log(http);
		if(http.readyState == 4 && http.status == 200 ){
			console.log("Data is ready to be used.");
			console.log(JSON.parse(http.response));
		}
		else{
			console.log(http.status + " " + http.readyState );
		}

	}
	// Open method sets up the request for us.
	// True -> Async 	False -> Sync
	http.open("GET","data/tweets.json",true);// prepare
	http.send();// now go and grab the data
	console.log("Hello");
	// Look at the logs in the console of chrome which
	// clearly shows the asynchronous actions.


	/*
	Ready States :

	0 : request not initialized.
	1 : request has been set up.
	2 : request has been sent.
	3 : request is in process.
	4 : request is complete.




	*/

}
