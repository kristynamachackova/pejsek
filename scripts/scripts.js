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
