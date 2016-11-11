var plantilla= '  <option  data-species-url="{{ur}}">{{nombre-especies}}</option>';
var plantilla2='<div class="col s12 m4">' +
		    '<div class="card horizontal hoverable">' +
		      	'<div class="card-stacked">' +
		        	'<div class="card-content amber white-text">' +
		          		'<p>Hi, my name is <strong>{{name}}</strong></p>' +
		        	'</div>' +
			        '<div class="card-action">' +
			          	'<a data-show-url="{{url}} class="about" >See more about me</a>' +
			        '</div>' +
			    '</div>' +
	    	'</div>' +
	  	'</div>';

$(document).ready(function(){
	$.getJSON("http://swapi.co/api/species/",function(response){
		var especies = "";
		$.each(response.results, function(i, especie){
			especies+=plantilla
			.replace("{{nombre-especies}}",especie.name)
			.replace("{{ur}}",especie.people);
	    });
		$("#select").html('<option value="" disabled seleted>ESPECIE</option>');
		$("#select").append(especies);
	});
		$("#select").change(function(e){
			var optionArray =$("option");
			for(var i =1 ; i< optionArray.length; i++){
				var data = optionArray[i].getAttribute("data-species-url");
				var split = data.split(",");
				for(var a =0; a<split.length;a++){
					var specie_data =split[a];
					$.getJSON( specie_data,function(response){
						var especie_vacia="";
						especie_vacia+= plantilla2.replace("{{name}}",response.name);
						$("#people").append(especie_vacia)
					});
				}
			}
		});
});

