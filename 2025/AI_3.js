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

            // Apelăm funcția care conține logica de ascundere/afișare
            toggleCapitol5Rows(values);
        }
    };
})(jQuery);

// 
//  Funcția modularizată pentru ascunderea/afișarea rândurilor
function toggleCapitol5Rows(values) {
    if (values.CAPITOL5_R511_C2 == '1' && values.CAPITOL5_R512_C2 == '1') {
        console.log("✅ Ambele checkbox-uri sunt bifate. Ascundem rândurile.");

        jQuery('#CAPITOL5_R520, #CAPITOL5_R530, #CAPITOL5_R531, #CAPITOL5_R532, #CAPITOL5_R533, #CAPITOL5_R540, #CAPITOL5_R541, #CAPITOL5_R542, #CAPITOL5_R543').hide();

        // Ștergem valorile din inputurile asociate
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
    } else {
        console.log("Checkbox-urile nu sunt ambele bifate. Afișăm rândurile.");
        jQuery('#CAPITOL5_R520, #CAPITOL5_R530, #CAPITOL5_R531, #CAPITOL5_R532, #CAPITOL5_R533, #CAPITOL5_R540, #CAPITOL5_R541, #CAPITOL5_R542, #CAPITOL5_R543').show();
    }
}
