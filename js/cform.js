$(document).ready(function(){ 
	$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize(); 
		$.ajax( { type: "POST", url: "contact.php", data: str, success: function(msg){ 
				if(msg == 'Message was sent succesfully!') // Message Sent? Show the 'Thank You' message and hide the form
					{ result = '<div class="notification_ok">Your message has been sent. Thank you!<br> <a href="#" onclick="freset();return false;">send another mail</a></div>'; $("#fields").hide(); } 							
				else
					{ result = msg; } 
				$("#note").html(result); 
			} 
		}); 
		return false; 
	}); 

	// $("#membership-form").submit(function(){
	// 	let str = $(this).serialize(); 
	// 	$.ajax( { type: "POST", url: "form_process.php", data: str, success: function(msg){ 
	// 			if(msg == 'change plz') // Message Sent? Show the 'Thank You' message and hide the form
	// 				{ result = '<div class="notification_ok">Your message has been sent. Thank you!<br> <a href="#" onclick="freset();return false;">send another mail</a></div>'; $("#fields").hide(); } 							
	// 			else
	// 				{ result = msg; } 
	// 			$("#note").html(result); 
	// 		} 
	// 	}); 
	// 	return false; 
	// }); 
});
				
function freset(){ 	
	$("#note").html('');
	document.getElementById('ajax-contact-form').reset();
	$("#fields").show();
};