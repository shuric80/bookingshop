$(document).ready(function (){
    $("#name").val('');
	$("#address").val('');
	$("#phone").val('');
	$("#site").val('');
	$("#about_to").val('');
	
	$("#button").click(function (){
		var name_form=$("#name").val();
		var address_form=$("#address").val();
		var phone_form =$("#phone").val();
		var site_form=$("#site").val();
		var about_to_form = $("#about_to").val();

		$.ajaxSetup({
			success:function(data){
				data=$.parseJSON(data);
				//alert(data['new-text']);
				$("#name").val('');
				$("#address").val('');
				$("#phone").val('');
				$("#site").val('');
				$("#about_to").val('');
				console.log(about_to_form);
			}
		});
		$.post('/map/add/',{
			'name':name_form,
			'address':address_form,
			'phone':phone_form,
			'site':site_form,
			'about_to':about_to_form
		});
	});
})
