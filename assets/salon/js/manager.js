ymaps.ready(init);
function init(){
	
	
	/*
	  function findClosestObjects(){

	  mymap.events.add('click',function(event){
	  //console.log(event.get('coords'));

	  var res = ymaps.geoQuery(file).sortByDistance(event.get('coords'));
	  console.log(res);
  	  });

	  //var res= ymaps.geoQuery(file).addToMap(mymap);
	  //var sorted = res.sortByDistance([55.76302, 37.63024]);
	  //console.log(sorted);
	  
	  };
	  
	*/	
	var mymap = new ymaps.Map('map',{
		center: [55.76, 37.64],
		zoom: 10,
	},{
	    searchControlProvider:'yandex#search'
	}),
		objectManager = new ymaps.ObjectManager({
			clusterize:true,
			gridSize:32,
			geoObjectOpenBalloonOnClick: true
		});
	
	objectManager.objects.options.set('preset', 'islands#lightBlueStrechyIcon');
	objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');

	mymap.geoObjects.add(objectManager);

	mymap.events.add('click',function(e){
		
		//console.log(e.get('coords'));
		var res = ymaps.geoQuery(file).sortByDistance(e.get('coords'));
		$('#contentBalloon').empty();

		$.each(json.features,function(i,v){
			objectManager.objects.setObjectOptions(v.id, { preset: 'islands#lightBlueStrechyIcon' });
		});
    	for (var i=0;i<5;i++){
			
			$('#contentBalloon').append('<li class="has-submenu" style="color:white"><a href="#">'+ 
										res.get(i).properties.get('ballonContent')['name']+'<br>'+
										res.get(i).properties.get('ballonContent')['address']+
										'</a>'+
										'<ul class="left-submenu">'+
										'<li class="back"><a href="#">Back</a></li>'+
										'<li><label>'+
										res.get(i).properties.get('ballonContent')['name']+'<br>'+
										res.get(i).properties.get('ballonContent')['address']+'<br>'+
										res.get(i).properties.get('ballonContent')['phone']+'<br>'+
										res.get(i).properties.get('ballonContent')['site']+'<br>'+
										res.get(i).properties.get('ballonContent')['email']+'<br>'+
										res.get(i).properties.get('ballonContent')['about_to']+
										'</label></li>'+
                                        '</ul>'+
										'</li>');
		}
	});
	
	var file;
	var json;
	$.ajax({
		url:"data/",
		dataType :'json'
	}).done(function(data) {
		if(data['err']){
			$("#msg").text(data["err"]);
		}
		else{
			$("#msg").text('');
		};
		objectManager.add(data);
		file =data;
		json = JSON.parse(file);
	});

	objectManager.objects.events.add('click',function (e){
		var objectId = e.get('objectId');
		//json = JSON.parse(file);
		$.each(json.features,function(i,v){
			
			if(v.id == objectId) {
				//if(objectManager.objects.getById(objectId).options['preset']!='islands#lightBlueStrechyIcon')
				{
					objectManager.objects.setObjectOptions(v.id, { preset: 'islands#redIcon' });
					$('#contentBalloon').empty();

					$('#contentBalloon').append('<li ><h5 style="color:white">'
												+v.properties.ballonContent['name']+'<br>'
											    +v.properties.ballonContent['address']+'<br>'
												+v.properties.ballonContent['phone']+'<br>'
												+v.properties.ballonContent['site']+'<br>'
												+v.properties.ballonContent['email']+'<br>'
												+v.properties.ballonContent['about_to']
												+'</h5></li>');
					
					noty({
						text:v.properties.ballonContent['address']
						,maxVisible:1
						,theme :'default'
						,layout:'bottomRight'
						,closable:true
						,textAlign:'left'
						,force:true
						//,template: '<div class="noty_message"><h2><span class="noty_text"></span></h2><div class="noty_close"></div></div>'
						,template: '<div data-alert class="alert-box info radius"><h4><span class="noty_text"></span></h4></div>'
						,dismissQueue: true
						,killer: true
						,animation: {
							open: {height: 'toggle'}, 
							close: {height: 'toggle'}, 
							easing: 'swing',
							speed: 300 // opening & closing animation speed
						}
						,timeout:30000
						
					});

				}
			}
			else{
				objectManager.objects.setObjectOptions(v.id, { preset: 'islands#lightBlueStrechyIcon' });
			}
		});
		
	});

}	

