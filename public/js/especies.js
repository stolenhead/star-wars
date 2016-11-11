var plantilla= ' <option class="opcion-especie" value="_valor_" _familia_</option>';
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
			var value ="";
			var semiURL="http://swapi.co/api/people/";
		$.each(especie.people, function(i, especie){
		  value+=url.replace(semiURL,"");
		});
			especies+=plantilla
			.replace("_familia_", especie.name);
			.replace("_valor_",value.substring(0,value.length-1));
		});
		$("#select").append(especies);
});
});
$(".container").on("change","#select",function(){
	var numeroURL =$(this).val().split("/");
	for(var i=0;i<numeroURL.length;i++){
		$.getJSON("http://swapi.co/api/people/"+numeroURL[i]+"/",function(response){
      var plantillaLlena=plantilla2.replace("_name_",response.name);
      $("#contenedor").append(plantillaLlena);
		});
	};
});
