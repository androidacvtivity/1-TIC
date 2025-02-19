(function ($) {
    Drupal.behaviors.bsc1_24 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            check_all();
            check_511_512();

            // Adăugăm eveniment pentru schimbarea checkbox-urilor
            jQuery('#CAPITOL5_R511_C2, #CAPITOL5_R511_C1').change(function () {
                check_511_512();
            });
        }
    };
})(jQuery);

function check_511_512() {
    // Verificăm dacă ambele checkbox-uri sunt bifate
    if (jQuery('#CAPITOL5_R511_C2').is(':checked') && jQuery('#CAPITOL5_R511_C1').is(':checked')) {
        console.log(" Ambele checkbox-uri sunt bifate. Ascundem rândurile.");

        jQuery('#CAPITOL5_R520, #CAPITOL5_R530, #CAPITOL5_R531, #CAPITOL5_R532, #CAPITOL5_R533, #CAPITOL5_R540, #CAPITOL5_R541, #CAPITOL5_R542').hide();

        // Resetăm valorile din inputuri
        ["CAPITOL5_R520_C1", "CAPITOL5_R531_C1", "CAPITOL5_R532_C1", "CAPITOL5_R533_C1", "CAPITOL5_R541_C1", "CAPITOL5_R542_C1"]
            .forEach(id => {
                var element = document.getElementById(id);
                if (element) element.value = "";
            });
    } else {
        console.log(" Checkbox-urile nu sunt bifate. Afișăm rândurile.");

        jQuery('#CAPITOL5_R520, #CAPITOL5_R530, #CAPITOL5_R531, #CAPITOL5_R532, #CAPITOL5_R533, #CAPITOL5_R540, #CAPITOL5_R541, #CAPITOL5_R542').show();
    }
}
