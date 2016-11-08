/*!
 * 
 * All your scripts insert here
 * 
 */
$(function() {
	buildSocialButton();
});

function buildSocialButton(){
	//Facebook
	$('#socialFacebook').click(function () {
		var url = $(this).attr("data-url");
		window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url), 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
	});
	
	//Twitter
	$('#socialTwitter').click(function () {
		var text = $(this).attr("data-text");
        var url = $(this).attr("data-url");
		var twitterurl = "https://twitter.com/intent/tweet?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(text);
		
        $(this).attr('href', twitterurl);
	});
	
	//Whatsapp
	$('#socialWhatsapp').click(function () {
		var text = $(this).attr("data-text");
        var url = $(this).attr("data-url");
		var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
		var whatsapp_url = "whatsapp://send?text=" + message;
		$(this).attr('href', whatsapp_url);
	});

	//Email
	$('#socialEmail').click(function () {
		var email = $(this).attr("data-email");
		var subject = $(this).attr("data-subject");
		var emailBody = $(this).attr("data-body");
		
		$(this).attr('href', 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(emailBody));
	});	
}