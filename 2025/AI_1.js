(function ($, drupalSettings) {
    Drupal.behaviors.bsc1_24 = {
        attach: function (context, settings) {
            jQuery('input.numeric', context).keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            var values = drupalSettings.mywebform.values || {};
            var cid = drupalSettings.mywebform.cid || null;

            check_all(values, cid);
            check_511_512(values, cid);

            // Detectează modificările formularului folosind MutationObserver
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === "childList" || mutation.type === "attributes") {
                        console.log("Modificare detectată în DOM - reapelăm verificările.");
                        check_511_512(drupalSettings.mywebform.values, cid);
                    }
                });
            });

            // Monitorizează modificările formularului
            var targetNode = document.querySelector("form.webform-submission-form");
            if (targetNode) {
                observer.observe(targetNode, { attributes: true, childList: true, subtree: true });
            }
        }
    };
})(jQuery, drupalSettings);

function check_all(values, cid) {
    jQuery('input[type=checkbox]').change(function () {
        var state = jQuery(this).is(':checked');
        var group = jQuery(this).attr('name');
        var pos = group.indexOf('_R');
        var res = group.substr(0, pos !== false ? pos + 5 : 0);
        var lengthChecs = 0;

        jQuery('input[type=checkbox]').each(function () {
            if (jQuery(this).attr('name').indexOf(res) !== -1) {
                jQuery(this).prop('checked', false);
                lengthChecs++;
            }
        });

        jQuery(this).prop('checked', state);
    });
}

function check_511_512(values, cid) {
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
