(function ($) {
   
    Drupal.behaviors.bsc1_24 = {

        
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
           

     
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
    };
 
})(jQuery)




function validatePhoneNumber(phone) {
    // Check if the phone number is valid (exactly 9 digits)
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    // Check if the first digit is 0
    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}