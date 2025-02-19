(function ($, drupalSettings) {
    Drupal.behaviors.bsc1_24 = {
        attach: function (context, settings) {
            jQuery('input.numeric', context).keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            var values = drupalSettings.mywebform.values || {};
            check_all(values);
            check_511_512(values);

            // Monitorizare automată pentru schimbări în formular
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === "childList" || mutation.type === "attributes") {
                        console.log("Modificare detectată - aplicăm din nou `check_511_512`.");
                        check_511_512(drupalSettings.mywebform.values);
                    }
                });
            });

            var targetNode = document.querySelector("form.webform-submission-form");
            if (targetNode) {
                observer.observe(targetNode, { attributes: true, childList: true, subtree: true });
            }

            // Alternativ, rulăm `check_511_512` la fiecare 2 secunde pentru a evita omisiuni
            setInterval(function () {
                check_511_512(drupalSettings.mywebform.values);
            }, 2000);
        }
    };
})(jQuery, drupalSettings);

webform.beforeLoad.bsc1_24 = function () {
    var values = drupalSettings.mywebform.values;
    check_all(values);
    check_511_512(values);
};

webform.afterLoad.bsc1_24 = function () {
    var values = drupalSettings.mywebform.values;
    check_all(values);
    check_511_512(values);
};

webform.validators.bsc1_24 = function (v, allowOverpass) {
    var values = drupalSettings.mywebform.values;
    validatePhoneNumber(values.PHONE);

    check_all(values);
    check_511_512(values);

    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['bsc1_24'] = 1;
    validateWebform();
};

function check_all(values) {
    jQuery('input[type=checkbox]').change(function () {
        var state = jQuery(this).is(':checked');
        var group = jQuery(this).attr('name');
        var pos = group.indexOf('_R');
        var res = group.substr(0, pos !== false ? pos + 5 : 0);

        jQuery('input[type=checkbox]').each(function () {
            if (jQuery(this).attr('name').indexOf(res) !== -1) {
                jQuery(this).prop('checked', false);
            }
        });

        jQuery(this).prop('checked', state);
    });
}

function check_511_512(values) {
    applyCheck511_512Logic();

    jQuery('input[type=checkbox]').change(function () {
        applyCheck511_512Logic();
    });
}

function applyCheck511_512Logic() {
    if (jQuery('#CAPITOL5_R511_C2').is(':checked') && jQuery('#CAPITOL5_R512_C2').is(':checked')) {
        jQuery('#CAPITOL5_R520, #CAPITOL5_R530, #CAPITOL5_R531, #CAPITOL5_R532, #CAPITOL5_R533, #CAPITOL5_R540, #CAPITOL5_R541, #CAPITOL5_R542, #CAPITOL5_R543').hide();

        ["CAPITOL5_R520_C1", "CAPITOL5_R531_C1", "CAPITOL5_R532_C1", "CAPITOL5_R533_C1", "CAPITOL5_R541_C1", "CAPITOL5_R542_C1", "CAPITOL5_R543_C1"]
            .forEach(id => document.getElementById(id).value = "");
    }
    else if (jQuery('#CAPITOL5_R511_C1').is(':checked') || jQuery('#CAPITOL5_R512_C1').is(':checked')) {
        jQuery('#CAPITOL5_R520, #CAPITOL5_R530, #CAPITOL5_R531, #CAPITOL5_R532, #CAPITOL5_R533, #CAPITOL5_R540, #CAPITOL5_R541, #CAPITOL5_R542, #CAPITOL5_R543').show();
    }
}

function validatePhoneNumber(phone) {
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}
