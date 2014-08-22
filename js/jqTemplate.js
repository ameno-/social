$(window).on('load', function () {
	var data = [{"id":"502199737811238912","provider":"twitter","feed":"How Canadian Companies Will Grow in the U.S. Marketplace http://t.co/LsnOZIfqMZ #ExportWise #cdnbiz #exportstrategies"},{"id":"502198489309528065","provider":"twitter","feed":"Croître sur le marché américain, un défi pour les entreprises canadiennes? http://t.co/d3gwl4Tk83 #Exportateursavertis #cdnbiz"},{"id":"502169615171342337","provider":"twitter","feed":"Exchange rates got you worried? A Foreign Exchange Facility Guarantee can take the pressure off. http://t.co/zy7nzN3iRr #paymentbonds"},{"id":"502168853464752128","provider":"twitter","feed":"Les taux de change vous préoccupent? Faites tomber la pression grâce à la Garantie de facilité de change. http://t.co/KS3VLbBsof"}]
	console.log(data[0]);


	var widget = $('<div />'),

		brand = $('<div />',{
			class: 'brand'
		}),
		details = $('<div />',{
			class: 'details'
		}),
		brandIcon = $('<i />',{
			class: 'fa fa-2x'
		}),
		username = $('<span />',{
			class: 'name'
		}),
		date = $('<span />',{
			class: 'date'
		}),
		



	$('.content').linkify();
});

