function addWidget (data, location, wrapper) {

	wrapper == undefined?wrapper = $('<div />'):false;

 	var renderedTemplate;
 	//get template content from separate html file
 	var raw = getTemplates();

 	//parse template now for quicker rendering of template
 	Mustache.parse(raw);

	$.each(data.collection, function( index, value ) {
			//sets type to use UI for twitter, fb, etc.
			var type = data.collection[index].provider;

			//find template id in templates file
  			var template = $(raw).filter('#'+type).html();

  			//create widget's wrapper
	  		var widget = wrapper.clone(true);

			renderedTemplate = Mustache.render(template, data.collection[index]);

			//set widget content to rendred data
			widget.html(renderedTemplate);

		  	$(location).append(widget);

		  	//wrap urls in content with hrefs
		  	$(location).linkify();
	});
}

function getTemplates (){
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



