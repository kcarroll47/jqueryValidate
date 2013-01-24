//contact form validation and other custom behavior
$(document).ready(function(){
  //clear form on (re)load
	$(".contact form")[0].reset();

	//simple no robots test - user must enter displayed number or else submit button is hidden
	var testNum = Math.floor(Math.random()*17);
	$(".roboTest").html(testNum);
	$(".contact input#norobot").keyup(function(){
		if($(this).val() == testNum){
			$("input#submit").css("display", "inline");		
		}
	});
	
	//check for empty fields before submit
	var isFormValid = true;
	$(".contact form").submit(function(){
		isFormValid = true;
		//check input fields
		$(".contact form input.required:text, .contact form textarea").each(function(){
			if ($.trim($(this).val()).length == 0){
				hiliRequired(this, false);
			} else {
				hiliRequired(this, true);
			}
		});		

		return isFormValid;
	});
	
	//validate form field on blur
	$(".contact form input.required:text, .contact form textarea").blur(function(){
		if ($.trim($(this).val()).length == 0){
			hiliRequired(this, false);
		} else {
			hiliRequired(this, true);
		}
	});
	
	//highlights invalid fields, unhighlights valid fields
	function hiliRequired(thisInput, valid){
		if(!valid){
		$(thisInput).addClass("highlight");
			$(thisInput).siblings("span.required").html(" *required").addClass("highlight");
			isFormValid = false;
		}else{
			$(thisInput).removeClass("highlight");
			$(thisInput).siblings("span.required").html(" *required").removeClass("highlight");
		}
	}
});




