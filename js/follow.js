var send_buttons = []
function check_for_send() {
		buttons = $("div[role='button']:contains('Send'):not(.send_and_follow)")
	    if (buttons.length > 0) {
	    	buttons.each(function( index ) {
	    	  button = buttons.eq(index);

	    	  if(!(send_buttons.indexOf(button.attr("id")) > -1))
	    	  {
	    	  	send_buttons.push (button.attr("id"));
	    	  	button.closest("tbody").append('<div style = "margin-left:4px;" id="send_follow_'+index+'"class="T-I J-J5-Ji aoO T-I-atl L3 send_and_follow" role="button" tabindex="1" data-tooltip="Send ‪(⌘Enter)‬" aria-label="Send ‪(⌘Enter)‬" data-tooltip-delay="800" style="-webkit-user-select: none;">Send & Follow</div>')
			  	button.closest("table").parent().css("height", "auto");
			  	$("#send_follow_"+index).on('click', {send_btn : button} ,send_and_follow);
			  }
			});
	    }
	    window.setTimeout(check_for_send, 200);
}

function send_and_follow(e)
{
	container = e.data.send_btn.closest("div").closest("table").closest("div").closest("table").closest("div");
	form = $("form", container);
	form.append('<input type="hidden" name="acn" value="follow">')
	e.data.send_btn.click();
}

$( document ).ready(function() {

	check_for_send()
});