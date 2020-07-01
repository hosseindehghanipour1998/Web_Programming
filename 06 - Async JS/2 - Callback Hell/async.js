// Messy Solution
/*
window.onload = function() {
	function handleError(){console.log(error);}
	$.ajax(
		{
			type:"GET",
			url:"data/tweets.json",
			// Success means what do i do if we were successfuk in retrieving the data.
			success:function(data){
				console.log(data)
				$.ajax(
					{
						type:"GET",
						url:"data/friends.json",
						// Success means what do i do if we were successfuk in retrieving the data.
						success:function(data){
							console.log(data)
							$.ajax(
								{
									type:"GET",
									url:"data/videos.json",
									// Success means what do i do if we were successfuk in retrieving the data.
									success:function(data){
										console.log(data)
									},
									error:handleError
								}
							);
						},
						error:handleError
						}
					}
				);
			},
			error:handleError
			}
		}
	);
}
*/

//Cleaner Solution :
window.onload = function() {

	function handleError(jqXHR , textStatus ,error){console.log(error);}

	$.ajax(
		{
			type:"GET",
			url:"data/tweets.json",
			// Success means what do i do if we were successfuk in retrieving the data.
			success:callbackTweets,
			error:handleError
		}
	);

	function callbackTweets(data){
		console.log(data)
		$.ajax(
			{
				type:"GET",
				url:"data/friends.json",
				// Success means what do i do if we were successfuk in retrieving the data.
				success:callbackFriends,
				error:handleError

			}
		);
	}

	function callbackFriends(data){
		console.log(data)
		$.ajax(
			{
				type:"GET",
				url:"data/videos.json",
				// Success means what do i do if we were successfuk in retrieving the data.
				success:function(data){
					console.log(data)
				},
				error:handleError
			}
		);
	}
}

/*
	As you can see , handling a Async Call with JQuery is a pain in the back. So we'd better create promises using JS Promises.

*/
