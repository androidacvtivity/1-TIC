(function ($) {
   
    Drupal.behaviors.bsc1_24 = {

        
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
           

     
            var values = Drupal.settings.mywebform.values;
            


             check_all(values);
             check_511_512(values);
         

            if (values.CAPITOL5_R511_C2 == '1' && values.CAPITOL5_R512_C2  == '1') {

                $('#CAPITOL5_R520').hide();
                $('#CAPITOL5_R530').hide();
                $('#CAPITOL5_R531').hide();
                $('#CAPITOL5_R532').hide();
                $('#CAPITOL5_R533').hide();
                $('#CAPITOL5_R540').hide();
                $('#CAPITOL5_R541').hide();
                $('#CAPITOL5_R542').hide();
                $('#CAPITOL5_R543').hide();

                //Here  muste delete all valuie 

                var inputIDs = [
                    "CAPITOL5_R520_C1", "CAPITOL5_R531_C1", "CAPITOL5_R532_C1",
                    "CAPITOL5_R533_C1", "CAPITOL5_R541_C1", "CAPITOL5_R542_C1", "CAPITOL5_R543_C1"
                ];

                inputIDs.forEach(function (id) {
                    var element = document.getElementById(id);
                    if (element) {
                        element.value = "";
                    }
                });

                }

            else if (!(values.CAPITOL5_R511_C2 == '1' && values.CAPITOL5_R512_C2 == '1')) {

                $('#CAPITOL5_R520').show();
                $('#CAPITOL5_R530').show();
                $('#CAPITOL5_R531').show();
                $('#CAPITOL5_R532').show();
                $('#CAPITOL5_R533').show();
                $('#CAPITOL5_R540').show();
                $('#CAPITOL5_R541').show();
                $('#CAPITOL5_R542').show();
                $('#CAPITOL5_R543').show();

                }




           
        }
    };
 
})(jQuery);

webform.afterLoad.bsc1_24 = function () {
    var values = Drupal.settings.mywebform.values;
    // check_all(values);
    // check_511_512(values);

}


webform.beforeLoad.bsc1_24 = function () {
    var values = Drupal.settings.mywebform.values;
    // check_all(values);
    // check_511_512(values);

}


webform.validators.bsc1_24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
    validatePhoneNumber(values.PHONE);
    
    check_all(values);
    check_511_512(values);

    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['bsc1_24'] = 1;
    validateWebform();

}

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
            jQuery('#CAPITOL5_R520').hide(); 
            jQuery('#CAPITOL5_R530').hide(); 
            jQuery('#CAPITOL5_R531').hide(); 
            jQuery('#CAPITOL5_R532').hide(); 
            jQuery('#CAPITOL5_R533').hide();
            jQuery('#CAPITOL5_R540').hide(); 
            jQuery('#CAPITOL5_R541').hide(); 
            jQuery('#CAPITOL5_R542').hide(); 
            jQuery('#CAPITOL5_R543').hide();

            document.getElementById("CAPITOL5_R520_C1").value = "";
            document.getElementById("CAPITOL5_R531_C1").value = "";
            document.getElementById("CAPITOL5_R532_C1").value = "";
            document.getElementById("CAPITOL5_R533_C1").value = "";
            document.getElementById("CAPITOL5_R541_C1").value = "";
            document.getElementById("CAPITOL5_R542_C1").value = "";
            document.getElementById("CAPITOL5_R543_C1").value = "";
        }
   else if (!(jQuery('#CAPITOL5_R511_C2').is(':checked') && jQuery('#CAPITOL5_R512_C2').is(':checked'))) {
            jQuery('#CAPITOL5_R520').show(); jQuery('#CAPITOL5_R530').show(); jQuery('#CAPITOL5_R531').show(); jQuery('#CAPITOL5_R532').show(); jQuery('#CAPITOL5_R533').show();
            jQuery('#CAPITOL5_R540').show(); jQuery('#CAPITOL5_R541').show(); jQuery('#CAPITOL5_R542').show(); jQuery('#CAPITOL5_R543').show();
        }
    
     });

}




function getErrorMessage(errorCode) {
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}

function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;
}