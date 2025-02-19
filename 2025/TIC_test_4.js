(function ($) {
   
    Drupal.behaviors.bsc1_24 = {

        
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
           

     
            var values = Drupal.settings.mywebform.values;
            check_511_512(values);
            check_all(values);
        }
    };
 
})(jQuery)



function check_all(values) {
    jQuery('input[type=checkbox]').change(function () {


        var state = jQuery(this).is(':checked');
        var group = jQuery(this).attr('name');
        var pos = group.indexOf('_R');
        var res = group.substr(0, pos !== false ? pos + 5 : 0);

        var lengthChecs = null
        jQuery('input[type=checkbox]').each(function () {
            if (jQuery(this).attr('name').indexOf(res) !== -1) {
                jQuery(this).removeAttr('checked');
                lengthChecs++;
            }
        });
        jQuery(this).prop('checked', state);



   
    });

    
}

function check_511_512(values) {
  
    jQuery('input[type=checkbox]').change(function () {


    



        if (jQuery('#CAPITOL5_R511_C2').is(':checked') && jQuery('#CAPITOL5_R512_C2').is(':checked')) {
            jQuery('#CAPITOL5_R520').hide(); jQuery('#CAPITOL5_R530').hide(); jQuery('#CAPITOL5_R531').hide(); jQuery('#CAPITOL5_R532').hide(); jQuery('#CAPITOL5_R533').hide();
            jQuery('#CAPITOL5_R540').hide(); jQuery('#CAPITOL5_R541').hide(); jQuery('#CAPITOL5_R542').hide(); jQuery('#CAPITOL5_R543').hide();

            document.getElementById("CAPITOL5_R520_C1").value = "";
            document.getElementById("CAPITOL5_R531_C1").value = "";
            document.getElementById("CAPITOL5_R532_C1").value = "";
            document.getElementById("CAPITOL5_R533_C1").value = "";
            document.getElementById("CAPITOL5_R541_C1").value = "";
            document.getElementById("CAPITOL5_R542_C1").value = "";
            document.getElementById("CAPITOL5_R543_C1").value = "";
        }
        else if (jQuery('#CAPITOL5_R511_C1').is(':checked') || jQuery('#CAPITOL5_R512_C1').is(':checked')) {
            jQuery('#CAPITOL5_R520').show(); jQuery('#CAPITOL5_R530').show(); jQuery('#CAPITOL5_R531').show(); jQuery('#CAPITOL5_R532').show(); jQuery('#CAPITOL5_R533').show();
            jQuery('#CAPITOL5_R540').show(); jQuery('#CAPITOL5_R541').show(); jQuery('#CAPITOL5_R542').show(); jQuery('#CAPITOL5_R543').show();
        }
    });

}