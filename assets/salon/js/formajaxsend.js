$("#button").click(function(){
	alert('Commit');
	var name_form=$("#name").val();
	var address_form=$("#address").val();
	var phone_form =$("#phone").val();
	var site_form=$("#site").val();

	$.ajaxSetup({
		success:function(data){
			data=$.parseJSON(data);
			alert(data['new-text']);	  
		}
	});
	$.post('/map/add/',{
		'name':name_form,
		'address':address_form,
		'phone':phone_form,
		'site':site_form,
	});
});
