window.onload = function() {
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
									error:function(jqXHR,textStatus,error){
										console.log(error);
									}
								}
							);
						},
						error:function(jqXHR,textStatus,error){
							console.log(error);
						}
					}
				);
			},
			error:function(jqXHR,textStatus,error){
				console.log(error);
			}
		}
	);
}
