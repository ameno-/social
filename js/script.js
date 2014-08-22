function addWidget (data, location, wrapper) {

	wrapper == undefined?wrapper = $('<div />'):false;

 	var renderedTemplate;
 	//get template content from separate html file

 	// var raw = getTemplates();

 	//parse template now for quicker rendering of template
 	// Mustache.parse(raw);

	$.each(data, function() {
		$.each($(this), function ( index, value ) {
			//sets type to use UI for twitter, fb, etc.
			var type = $(this)[index].provider;

			//find template id in templates file
  			// var template = $(raw).filter('#'+type).html();

  			var template = $('#'+type).html();

  			//create widget's wrapper
	  		var widget = wrapper.clone(true);

			renderedTemplate = Mustache.render(template, $(this)[index]);

			//set widget content to rendred data
			widget.html(renderedTemplate);

		  	$(location).append(widget);

		  	//wrap urls in content with hrefs
		  	$(location).linkify();
		  	$(location).html(
		  		$(location).html().parseHashtag()
		  	);
		});
	});
}

function getTemplatess (){
	var result = null;
	//grab all the widget templates
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "templates.html",
        'success': function (data) {
            result = data;
        }
    });
    return result;
}

function getData(url){
	var result = null;
	// var url = 'sample.json';
	//grab all the widget templates
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'json',
        'url': url,
        'success': function (data) {
            result = data;
        }
    });
    return result;
};

String.prototype.parseHashtag = function() {
	return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
		var tag = t.replace("#","%23")
		return t.link("http://search.twitter.com/search?q="+tag);
	});
};

function hashify(location){

	$(location).html().parseHashtag();

}


