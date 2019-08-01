$( function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
$(document).ready(function(){
    $("#rezervace").click(function(){
        $("#formular").html("<b>Potvrzení rezervace naleznete na vašem emailu.</b>");
    });
});

hs.graphicsDir = 'highslide/graphics/';
hs.outlineType = 'custom';
hs.captionEval = 'this.a.title';


// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		opacity: 0.75,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -10,
		hideOnMouseOut: true
	},
	thumbstrip: {
		mode: 'horizontal',
		position: 'bottom center',
		relativeTo: 'viewport'
	}

});

// Czech language strings
hs.lang = {
	cssDirection: 'ltr',
	loadingText: 'Načítá se...',
	loadingTitle: 'Klikněte pro zrušení',
	focusTitle: 'Klikněte pro přenesení do popředí',
	fullExpandTitle: 'Zvětšit na původní velikost',
	creditsText: 'Powered by <i>Highslide JS</i>',
	creditsTitle: 'Přejít na stránky Highslide JS',
	previousText: 'Předchozí',
	nextText: 'Další',
	moveText: 'Přesunout',
	closeText: 'Zavřít',
	closeTitle: 'Zavřít (esc)',
	resizeTitle: 'Změnit velikost',
	playText: 'Přehrát',
	playTitle: 'Přehrát slideshow (mezerník)',
	pauseText: 'Pozastavit',
	pauseTitle: 'Pozastavit slideshow (mezerník)',
	previousTitle: 'Předchozí (šipka vlevo)',
	nextTitle: 'Další (šipka vpravo)',
	moveTitle: 'Přesunout',
	fullExpandText: 'Plná velikost',
	number: 'Image %1 of %2',
	restoreTitle: 'Klikněte pro zavření obrázku, klikněte a táhněte pro jeho přesunutí. Použijte šipky na klávesnici pro přesun na další a předchozí.'
};

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};