$(window).on('load', function () {

			// var data = {"collection":[{"id":"502199737811238912","date":"Wednesday, August 20th, 2014","name":"John Doe","provider":"twitter","feed":"How Canadian Companies Will Grow in the U.S. Marketplace http://t.co/LsnOZIfqMZ #ExportWise #cdnbiz #exportstrategies"},{"id":"502198489309528065","date":"Wednesday, August 20th, 2014","name":"John Doe","provider":"googleplus","feed":"Croître sur le marché américain, un défi pour les entreprises canadiennes? http://t.co/d3gwl4Tk83 #Exportateursavertis #cdnbiz"},{"id":"502169615171342337","date":"Wednesday, August 20th, 2014","name":"John Doe","provider":"facebook","feed":"Exchange rates got you worried? A Foreign Exchange Facility Guarantee can take the pressure off. http://t.co/zy7nzN3iRr #paymentbonds"},{"id":"502168853464752128","date":"Wednesday, August 20th, 2014","name":"John Doe","provider":"linkedin","feed":"Les taux de change vous préoccupent? Faites tomber la pression grâce à la Garantie de facilité de change. http://t.co/KS3VLbBsof"}]}
function getData(){
	var result = null;
	//grab all the widget templates
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'json',
        'url': "sample.json",
        'success': function (data) {
            result = data;
        }
    });
    return result;
};

	addWidget(data, $('#target'), $('<div />'));

});