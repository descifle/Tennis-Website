$(document).ready(function(){ 
	$("#ajax-contact-form").submit(function(){
		const str = $(this).serialize(); 
		$.ajax( { type: "POST", url: "contact.php", data: str, success: function(msg){ 
				if(msg == 'Message was sent succesfully!') // Message Sent? Show the 'Thank You' message and hide the form
					{ result = '<div class="notification_ok">Your message has been sent. Thank you!<br> <a href="" onclick="freset();return false;">send another mail</a></div>'; $("#fields").hide(); } 							
				else
					{ result = msg; } 
				$("#note").html(result); 
			} 
		}); 
		return false; 
	}); 

	// $("#membership-form").submit(function(){
	// 	const str = $(this).serialize(); 
	// 	$.ajax( { type: "POST", url: "form_process.php", data: str, success: function(msg){ 
	// 			if(msg == "great success") // Message Sent? Show the 'Thank You' message and hide the form
	// 				{ result = '<div class="form-submitted">Your information has been saved. Thank you!<br> <a href="" onclick="mReset();return false;">Sign up another member!</a></div>'; $(".form-holder").hide(); } 							
	// 			else
	// 				{ result = msg; } 
	// 			$(".form-message").html(result);
	// 			location.assign('#services')
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

function mReset(){ 	
	$(".form-message").html('');
	document.getElementById('membership-form').reset();
	$(".form-holder").show();
};
// form client side validation

function recaptcha_callback() {
	$(".submit-button").attr("disabled", false);
	$(".submit-button").removeClass('disabled');
}

function disableButton() {
	$(".submit-button").attr("disabled", true);
	$(".submit-button").addClass('disabled');
}