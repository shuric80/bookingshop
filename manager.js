ymaps.ready(init);
function init(){

	var mymap = new ymaps.Map('map',{
		center: [55.76, 37.64],
        zoom: 10,
		
	},{
		searchControlProvider:'yandex#search'
	}),
		objectManager = new ymaps.ObjectManager({
			clusterize:true,
			gridSize:32,
			geoObjectOpenBalloonOnClick: false

		});
	
	
	objectManager.objects.options.set('preset', 'islands#lightBlueStrechyIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    mymap.geoObjects.add(objectManager);
}

//	var file;
//    $.ajax({
//        url:"data/",
//		dataType :'json'
		
//   }).done(function(data) {
//		if(data['err']){
//			$("#msg").text(data["err"]);
//		}
//		else{
//			$("#msg").text('');
//		};
//      objectManager.add(data);
//		file =data;
//    });

//	objectManager.objects.events.add('click',function (e){
//		var objectId = e.get('objectId');

//		var json = JSON.parse(file);
		
//		$.each(json.features,function(i,v){
//		    if (v.id==objectId){
//				noty({text:v.properties.ballonContent});
//			}
//		});
//	});


//}

