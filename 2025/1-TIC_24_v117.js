(function ($) {
    var activity_options_default_value = '';
    var caemFill = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'];
    Drupal.behaviors.inf1 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
            var rows1hideClear = [140, 150, 161, 162, 163, 164, 165, 210, 211, 212, 213, 214, 215, 216, 217, 218, 310, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 411, 412, 413, 414, 415, 420, 511, 512, 560, 610]

            // CAEMhide();
            // jQuery('select').change(function () {
            //     CAEMhide();
            // });

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
                if (group == "CAPITOL1_R161_C1") {
                    jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R164_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                }
                else if (group == "CAPITOL1_R162_C1") {
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R164_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                }
                else if (group == "CAPITOL1_R163_C1") {
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R164_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                }
                else if (group == "CAPITOL1_R164_C1") {
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                }
                else if (group == "CAPITOL1_R165_C1") {
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R164_C1').attr("checked", false);
                }

                else if (group == "CAPITOL1_R130_C2") {
                    jQuery('#CAPITOL2').hide(); jQuery('#CAPITOL2_HEADER').hide();
                    jQuery('#CAPITOL3').hide(); jQuery('#CAPITOL3_HEADER').hide();
                    jQuery('#CAPITOL4').hide(); jQuery('#CAPITOL4_HEADER').hide(); jQuery('#CAPITOL4_HEADER_NOTE').hide();
                    jQuery('#CAPITOL5').hide(); jQuery('#CAPITOL5_HEADER').hide(); jQuery('#CAPITOL5_HEADER_NOTE').hide();
                    jQuery('#CAPITOL6').hide(); jQuery('#CAPITOL6_HEADER').hide(); jQuery('#CAPITOL6_HEADER_NOTE').hide();
                    jQuery('#CAPITOL7').hide(); jQuery('#CAPITOL7_HEADER').hide(); jQuery('#CAPITOL7_HEADER_NOTE').hide();
                    jQuery('#CAPITOL8').hide(); jQuery('#CAPITOL8_HEADER').hide(); jQuery('#CAPITOL8_HEADER_NOTE').hide();
                    jQuery('#CAPITOL9').hide(); jQuery('#CAPITOL9_HEADER').hide(); jQuery('#CAPITOL9_HEADER_NOTE').hide();

                    jQuery('#CAPITOL1_R140').hide(); jQuery('#CAPITOL1_R141').hide(); jQuery('#CAPITOL1_R150').hide(); jQuery('#CAPITOL1_R160').hide();
                    jQuery('#CAPITOL1_R161').hide(); jQuery('#CAPITOL1_R162').hide(); jQuery('#CAPITOL1_R163').hide(); jQuery('#CAPITOL1_R164').hide(); jQuery('#CAPITOL1_R165').hide();
                    jQuery('#CAPITOL1_R140_C1').attr("checked", false); jQuery('#CAPITOL1_R140_C2').attr("checked", false);
                    document.getElementById("CAPITOL1_R141_C1").value = "";
                    jQuery('#CAPITOL1_R150_C1').attr("checked", false); jQuery('#CAPITOL1_R150_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false); jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R164_C1').attr("checked", false); jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                    jQuery('#CAPITOL2_R210_C1').attr("checked", false); jQuery('#CAPITOL2_R210_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R211_C1').attr("checked", false); jQuery('#CAPITOL2_R211_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R212_C1').attr("checked", false); jQuery('#CAPITOL2_R212_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R213_C1').attr("checked", false); jQuery('#CAPITOL2_R213_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R214_C1').attr("checked", false); jQuery('#CAPITOL2_R214_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R215_C1').attr("checked", false); jQuery('#CAPITOL2_R215_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R216_C1').attr("checked", false); jQuery('#CAPITOL2_R216_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R217_C1').attr("checked", false); jQuery('#CAPITOL2_R217_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R218_C1').attr("checked", false); jQuery('#CAPITOL2_R218_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R220_C1').attr("checked", false); jQuery('#CAPITOL2_R220_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R310_C1').attr("checked", false); jQuery('#CAPITOL3_R310_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R320_C1').attr("checked", false); jQuery('#CAPITOL3_R320_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R321_C1').attr("checked", false); jQuery('#CAPITOL3_R321_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R322_C1').attr("checked", false); jQuery('#CAPITOL3_R322_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R323_C1').attr("checked", false); jQuery('#CAPITOL3_R323_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R324_C1').attr("checked", false); jQuery('#CAPITOL3_R324_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R325_C1').attr("checked", false); jQuery('#CAPITOL3_R325_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R326_C1').attr("checked", false); jQuery('#CAPITOL3_R326_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R327_C1').attr("checked", false); jQuery('#CAPITOL3_R327_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R328_C1').attr("checked", false); jQuery('#CAPITOL3_R328_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R329_C1').attr("checked", false); jQuery('#CAPITOL3_R329_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R330_C1').attr("checked", false); jQuery('#CAPITOL3_R330_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R410_C1').attr("checked", false); jQuery('#CAPITOL4_R410_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R411_C1').attr("checked", false); jQuery('#CAPITOL4_R411_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R412_C1').attr("checked", false); jQuery('#CAPITOL4_R412_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R413_C1').attr("checked", false); jQuery('#CAPITOL4_R413_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R414_C1').attr("checked", false); jQuery('#CAPITOL4_R414_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R415_C1').attr("checked", false); jQuery('#CAPITOL4_R415_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R420_C1').attr("checked", false); jQuery('#CAPITOL4_R420_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R511_C1').attr("checked", false); jQuery('#CAPITOL5_R511_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R512_C1').attr("checked", false); jQuery('#CAPITOL5_R512_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R520_C1').attr("checked", false); jQuery('#CAPITOL5_R520_C2').attr("checked", false);
                    document.getElementById("CAPITOL5_R520_C1").value = "";
                    document.getElementById("CAPITOL5_R531_C1").value = "";
                    document.getElementById("CAPITOL5_R532_C1").value = "";
                    document.getElementById("CAPITOL5_R533_C1").value = "";
                    document.getElementById("CAPITOL5_R541_C1").value = "";
                    document.getElementById("CAPITOL5_R542_C1").value = "";
                    document.getElementById("CAPITOL5_R543_C1").value = "";
                    jQuery('#CAPITOL5_R560_C1').attr("checked", false); jQuery('#CAPITOL5_R560_C2').attr("checked", false);
                    document.getElementById("CAPITOL5_R570_C1").value = "";
                    jQuery('#CAPITOL6_R610_C1').attr("checked", false); jQuery('#CAPITOL6_R610_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R620_C1').attr("checked", false); jQuery('#CAPITOL6_R620_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R630_C1').attr("checked", false); jQuery('#CAPITOL6_R630_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R640_C1').attr("checked", false); jQuery('#CAPITOL6_R640_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R650_C1').attr("checked", false); jQuery('#CAPITOL6_R650_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R661_C1').attr("checked", false); jQuery('#CAPITOL6_R661_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R662_C1').attr("checked", false); jQuery('#CAPITOL6_R662_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R663_C1').attr("checked", false); jQuery('#CAPITOL6_R663_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R664_C1').attr("checked", false); jQuery('#CAPITOL6_R664_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R665_C1').attr("checked", false); jQuery('#CAPITOL6_R665_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R666_C1').attr("checked", false); jQuery('#CAPITOL6_R666_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R667_C1').attr("checked", false); jQuery('#CAPITOL6_R667_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R668_C1').attr("checked", false); jQuery('#CAPITOL6_R668_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R670_C1').attr("checked", false); jQuery('#CAPITOL6_R670_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R710_C1').attr("checked", false); jQuery('#CAPITOL7_R710_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R721_C1').attr("checked", false); jQuery('#CAPITOL7_R721_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R722_C1').attr("checked", false); jQuery('#CAPITOL7_R722_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R730_C1').attr("checked", false); jQuery('#CAPITOL7_R730_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R740_C1').attr("checked", false); jQuery('#CAPITOL7_R740_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R751_C1').attr("checked", false); jQuery('#CAPITOL7_R751_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R752_C1').attr("checked", false); jQuery('#CAPITOL7_R752_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R810_C1').attr("checked", false); jQuery('#CAPITOL8_R810_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R821_C1').attr("checked", false); jQuery('#CAPITOL8_R821_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R822_C1').attr("checked", false); jQuery('#CAPITOL8_R822_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R823_C1').attr("checked", false); jQuery('#CAPITOL8_R823_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R824_C1').attr("checked", false); jQuery('#CAPITOL8_R824_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R825_C1').attr("checked", false); jQuery('#CAPITOL8_R825_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R826_C1').attr("checked", false); jQuery('#CAPITOL8_R826_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R827_C1').attr("checked", false); jQuery('#CAPITOL8_R827_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R828_C1').attr("checked", false); jQuery('#CAPITOL8_R828_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R831_C1').attr("checked", false); jQuery('#CAPITOL8_R831_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R832_C1').attr("checked", false); jQuery('#CAPITOL8_R832_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R833_C1').attr("checked", false); jQuery('#CAPITOL8_R833_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R834_C1').attr("checked", false); jQuery('#CAPITOL8_R834_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R835_C1').attr("checked", false); jQuery('#CAPITOL8_R835_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R836_C1').attr("checked", false); jQuery('#CAPITOL8_R836_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R837_C1').attr("checked", false); jQuery('#CAPITOL8_R837_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R910_C1').attr("checked", false); jQuery('#CAPITOL9_R910_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R921_C1').attr("checked", false); jQuery('#CAPITOL9_R921_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R922_C1').attr("checked", false); jQuery('#CAPITOL9_R922_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R923_C1').attr("checked", false); jQuery('#CAPITOL9_R923_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R930_C1').attr("checked", false); jQuery('#CAPITOL9_R930_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R940_C1').attr("checked", false); jQuery('#CAPITOL9_R940_C2').attr("checked", false);
                }
                else if (group == "CAPITOL1_R130_C1") {
                    jQuery('#CAPITOL2').show(); jQuery('#CAPITOL2_HEADER').show();
                    jQuery('#CAPITOL3').show(); jQuery('#CAPITOL3_HEADER').show();
                    jQuery('#CAPITOL4').show(); jQuery('#CAPITOL4_HEADER').show(); jQuery('#CAPITOL4_HEADER_NOTE').show();
                    jQuery('#CAPITOL5').show(); jQuery('#CAPITOL5_HEADER').show(); jQuery('#CAPITOL5_HEADER_NOTE').show();
                    jQuery('#CAPITOL6').show(); jQuery('#CAPITOL6_HEADER').show(); jQuery('#CAPITOL6_HEADER_NOTE').show();
                    jQuery('#CAPITOL7').show(); jQuery('#CAPITOL7_HEADER').show(); jQuery('#CAPITOL7_HEADER_NOTE').show();
                    jQuery('#CAPITOL8').show(); jQuery('#CAPITOL8_HEADER').show(); jQuery('#CAPITOL8_HEADER_NOTE').show();
                    jQuery('#CAPITOL9').show(); jQuery('#CAPITOL9_HEADER').show(); jQuery('#CAPITOL9_HEADER_NOTE').show();
                    jQuery('#CAPITOL10').show(); jQuery('#CAPITOL10_HEADER').show(); jQuery('#CAPITOL10_HEADER_NOTE').show();

                    // jQuery('#CAPITOL2').hide(); jQuery('#CAPITOL2_HEADER').hide();
                    // jQuery('#CAPITOL3').hide(); jQuery('#CAPITOL3_HEADER').hide();
                    // jQuery('#CAPITOL4').hide(); jQuery('#CAPITOL4_HEADER').hide(); jQuery('#CAPITOL4_HEADER_NOTE').hide();
                    // jQuery('#CAPITOL5').hide(); jQuery('#CAPITOL5_HEADER').hide(); jQuery('#CAPITOL5_HEADER_NOTE').hide();
                    // jQuery('#CAPITOL6').hide(); jQuery('#CAPITOL6_HEADER').hide(); jQuery('#CAPITOL6_HEADER_NOTE').hide();

                    jQuery('#CAPITOL1_R140').show(); jQuery('#CAPITOL1_R141').show(); jQuery('#CAPITOL1_R150').show(); jQuery('#CAPITOL1_R161').show();
                    jQuery('#CAPITOL1_R162').show(); jQuery('#CAPITOL1_R163').show(); jQuery('#CAPITOL1_R164').show(); jQuery('#CAPITOL1_R165').show();
                }

                else if (group == "CAPITOL1_R140_C2") {
                    jQuery('#CAPITOL1_R141').hide();
                }
                else if (group == "CAPITOL1_R140_C1") {
                    jQuery('#CAPITOL1_R141').show();
                }

                else if (group == "CAPITOL1_R150_C2") {
                    jQuery('#CAPITOL1_R160').hide();
                    jQuery('#CAPITOL1_R161').hide();
                    jQuery('#CAPITOL1_R162').hide();
                    jQuery('#CAPITOL1_R163').hide();
                    jQuery('#CAPITOL1_R164').hide();
                    jQuery('#CAPITOL1_R165').hide();
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false); jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false); jQuery('#CAPITOL1_R164_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                }
                else if (group == "CAPITOL1_R150_C1") {
                    jQuery('#CAPITOL1_R160').show();
                    jQuery('#CAPITOL1_R161').show();
                    jQuery('#CAPITOL1_R162').show();
                    jQuery('#CAPITOL1_R163').show();
                    jQuery('#CAPITOL1_R164').show();
                    jQuery('#CAPITOL1_R165').show();
                }

                else if (group == "CAPITOL2_R210_C2") {
                    jQuery('#CAPITOL2_R210_before').hide(); jQuery('#CAPITOL2_R211').hide(); jQuery('#CAPITOL2_R212').hide();
                    jQuery('#CAPITOL2_R213').hide(); jQuery('#CAPITOL2_R214').hide(); jQuery('#CAPITOL2_R215').hide();
                    jQuery('#CAPITOL2_R216').hide(); jQuery('#CAPITOL2_R217').hide(); jQuery('#CAPITOL2_R218').hide();

                    jQuery('#CAPITOL2_R211_C1').attr("checked", false); jQuery('#CAPITOL2_R211_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R212_C1').attr("checked", false); jQuery('#CAPITOL2_R212_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R213_C1').attr("checked", false); jQuery('#CAPITOL2_R213_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R214_C1').attr("checked", false); jQuery('#CAPITOL2_R214_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R215_C1').attr("checked", false); jQuery('#CAPITOL2_R215_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R216_C1').attr("checked", false); jQuery('#CAPITOL2_R216_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R217_C1').attr("checked", false); jQuery('#CAPITOL2_R217_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R218_C1').attr("checked", false); jQuery('#CAPITOL2_R218_C2').attr("checked", false);
                }
                else if (group == "CAPITOL2_R210_C1") {
                    jQuery('#CAPITOL2_R210_before').show(); jQuery('#CAPITOL2_R211').show(); jQuery('#CAPITOL2_R212').show();
                    jQuery('#CAPITOL2_R213').show(); jQuery('#CAPITOL2_R214').show(); jQuery('#CAPITOL2_R215').show();
                    jQuery('#CAPITOL2_R216').show(); jQuery('#CAPITOL2_R217').show(); jQuery('#CAPITOL2_R218').show();
                    jQuery('#CAPITOL2_R220').show();
                }

                else if (group == "CAPITOL3_R310_C2") {
                    jQuery('#CAPITOL3_R320').hide(); jQuery('#CAPITOL3_R321').hide(); jQuery('#CAPITOL3_R322').hide(); jQuery('#CAPITOL3_R323').hide();
                    jQuery('#CAPITOL3_R324').hide(); jQuery('#CAPITOL3_R325').hide(); jQuery('#CAPITOL3_R326').hide(); jQuery('#CAPITOL3_R327').hide();
                    jQuery('#CAPITOL3_R328').hide(); jQuery('#CAPITOL3_R329').hide(); jQuery('#CAPITOL3_R330').hide();

                    jQuery('#CAPITOL3_R321_C1').attr("checked", false); jQuery('#CAPITOL3_R321_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R322_C1').attr("checked", false); jQuery('#CAPITOL3_R322_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R323_C1').attr("checked", false); jQuery('#CAPITOL3_R323_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R324_C1').attr("checked", false); jQuery('#CAPITOL3_R324_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R325_C1').attr("checked", false); jQuery('#CAPITOL3_R325_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R326_C1').attr("checked", false); jQuery('#CAPITOL3_R326_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R327_C1').attr("checked", false); jQuery('#CAPITOL3_R327_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R328_C1').attr("checked", false); jQuery('#CAPITOL3_R328_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R329_C1').attr("checked", false); jQuery('#CAPITOL3_R329_C2').attr("checked", false);
                    jQuery('#CAPITOL3_R330_C1').attr("checked", false); jQuery('#CAPITOL3_R330_C2').attr("checked", false);
                }
                else if (group == "CAPITOL3_R310_C1") {
                    jQuery('#CAPITOL3_R320').show(); jQuery('#CAPITOL3_R321').show(); jQuery('#CAPITOL3_R322').show(); jQuery('#CAPITOL3_R323').show();
                    jQuery('#CAPITOL3_R324').show(); jQuery('#CAPITOL3_R325').show(); jQuery('#CAPITOL3_R326').show(); jQuery('#CAPITOL3_R327').show();
                    jQuery('#CAPITOL3_R328').show(); jQuery('#CAPITOL3_R329').show(); jQuery('#CAPITOL3_R330').show();
                }

                // else if (jQuery('#CAPITOL5_R511_C2').is(':checked') && jQuery('#CAPITOL5_R512_C2').is(':checked')) {
                //     jQuery('#CAPITOL5_R520').hide(); jQuery('#CAPITOL5_R530').hide(); jQuery('#CAPITOL5_R531').hide(); jQuery('#CAPITOL5_R532').hide(); jQuery('#CAPITOL5_R533').hide();
                //     jQuery('#CAPITOL5_R540').hide(); jQuery('#CAPITOL5_R541').hide(); jQuery('#CAPITOL5_R542').hide(); jQuery('#CAPITOL5_R543').hide(); 

                //     document.getElementById("CAPITOL5_R520_C1").value = "";
                //     document.getElementById("CAPITOL5_R531_C1").value = "";
                //     document.getElementById("CAPITOL5_R532_C1").value = "";
                //     document.getElementById("CAPITOL5_R533_C1").value = "";
                //     document.getElementById("CAPITOL5_R541_C1").value = "";
                //     document.getElementById("CAPITOL5_R542_C1").value = "";
                //     document.getElementById("CAPITOL5_R543_C1").value = "";
                // }
                // else if (jQuery('#CAPITOL5_R511_C1').is(':checked') || jQuery('#CAPITOL5_R512_C1').is(':checked')) {
                //     jQuery('#CAPITOL5_R520').show(); jQuery('#CAPITOL5_R530').show(); jQuery('#CAPITOL5_R531').show(); jQuery('#CAPITOL5_R532').show(); jQuery('#CAPITOL5_R533').show();
                //     jQuery('#CAPITOL5_R540').show(); jQuery('#CAPITOL5_R541').show(); jQuery('#CAPITOL5_R542').show(); jQuery('#CAPITOL5_R543').show();
                // }

                // START CAPITOL 4
                else if (
                    group == "CAPITOL4_R410_C2"
                    // jQuery('#CAPITOL5_R560_C2').is(':checked')
                ) {
                    jQuery('#CAPITOL4_R410_before').hide();
                    jQuery('#CAPITOL4_R411').hide();
                    jQuery('#CAPITOL4_R412').hide();
                    jQuery('#CAPITOL4_R413').hide();
                    jQuery('#CAPITOL4_R414').hide();
                    jQuery('#CAPITOL4_R415').hide();
                    jQuery('#CAPITOL4_R420').hide();

                    jQuery('#CAPITOL4_R411_C1').attr("checked", false); jQuery('#CAPITOL4_R411_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R412_C1').attr("checked", false); jQuery('#CAPITOL4_R412_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R413_C1').attr("checked", false); jQuery('#CAPITOL4_R413_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R414_C1').attr("checked", false); jQuery('#CAPITOL4_R414_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R415_C1').attr("checked", false); jQuery('#CAPITOL4_R415_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R420_C1').attr("checked", false); jQuery('#CAPITOL4_R420_C2').attr("checked", false);
                }
                else if (group == "CAPITOL4_R410_C1") {
                    jQuery('#CAPITOL4_R410_before').show(); jQuery('#CAPITOL4_R411').show(); jQuery('#CAPITOL4_R412').show(); jQuery('#CAPITOL4_R413').show();
                    jQuery('#CAPITOL4_R414').show(); jQuery('#CAPITOL4_R415').show(); jQuery('#CAPITOL4_R420').show();
                }

                // END CAPITOL 4

                else if (
                    group == "CAPITOL5_R560_C2"
                    // jQuery('#CAPITOL5_R560_C2').is(':checked')
                ) {
                    jQuery('#CAPITOL5_R570').hide();
                    document.getElementById("CAPITOL5_R570_C1").value = "";
                }
                else if (group == "CAPITOL5_R560_C1") {
                    jQuery('#CAPITOL5_R570').show();
                }

                // 650
                else if (group == "CAPITOL6_R650_C2") {
                    jQuery('#CAPITOL6_R650').hide();
                    jQuery('#CAPITOL6_R661').hide();
                    jQuery('#CAPITOL6_R662').hide();
                    jQuery('#CAPITOL6_R663').hide();
                    jQuery('#CAPITOL6_R664').hide();
                    jQuery('#CAPITOL6_R665').hide();
                    jQuery('#CAPITOL6_R666').hide();
                    jQuery('#CAPITOL6_R667').hide();
                    jQuery('#CAPITOL6_R668').hide();

                    jQuery('#CAPITOL6_R661_C1').attr("checked", false); jQuery('#CAPITOL6_R661_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R662_C1').attr("checked", false); jQuery('#CAPITOL6_R662_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R663_C1').attr("checked", false); jQuery('#CAPITOL6_R663_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R664_C1').attr("checked", false); jQuery('#CAPITOL6_R664_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R665_C1').attr("checked", false); jQuery('#CAPITOL6_R665_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R666_C1').attr("checked", false); jQuery('#CAPITOL6_R666_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R667_C1').attr("checked", false); jQuery('#CAPITOL6_R667_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R668_C1').attr("checked", false); jQuery('#CAPITOL6_R668_C2').attr("checked", false);
                }
                else if (group == "CAPITOL6_R650_C1") {
                    jQuery('#CAPITOL6_R650').show();
                    jQuery('#CAPITOL6_R661').show();
                    jQuery('#CAPITOL6_R661').show();
                    jQuery('#CAPITOL6_R662').show();
                    jQuery('#CAPITOL6_R663').show();
                    jQuery('#CAPITOL6_R664').show();
                    jQuery('#CAPITOL6_R665').show();
                    jQuery('#CAPITOL6_R666').show();
                    jQuery('#CAPITOL6_R667').show();
                    jQuery('#CAPITOL6_R668').show();
                }
                //650

                else if (group == "CAPITOL7_R730_C2") {
                    jQuery('#CAPITOL7_R740').hide();
                    jQuery('#CAPITOL7_R740_C1').attr("checked", false);
                    jQuery('#CAPITOL7_R740_C2').attr("checked", false);
                }
                else if (group == "CAPITOL7_R730_C1") {
                    jQuery('#CAPITOL7_R740').show();
                }

                else if (group == "CAPITOL8_R810_C2") {
                    jQuery('#CAPITOL8_R820').hide();
                    jQuery('#CAPITOL8_R821').hide();
                    jQuery('#CAPITOL8_R822').hide();
                    jQuery('#CAPITOL8_R823').hide();
                    jQuery('#CAPITOL8_R824').hide();
                    jQuery('#CAPITOL8_R825').hide();
                    jQuery('#CAPITOL8_R826').hide();
                    jQuery('#CAPITOL8_R827').hide();
                    jQuery('#CAPITOL8_R828').hide();
                    jQuery('#CAPITOL8_R830').hide();
                    jQuery('#CAPITOL8_R831').hide();
                    jQuery('#CAPITOL8_R832').hide();
                    jQuery('#CAPITOL8_R833').hide();
                    jQuery('#CAPITOL8_R834').hide();
                    jQuery('#CAPITOL8_R835').hide();
                    jQuery('#CAPITOL8_R836').hide();
                    jQuery('#CAPITOL8_R837').hide();
                    jQuery('#CAPITOL8_R821_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R821_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R822_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R822_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R823_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R823_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R824_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R824_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R825_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R825_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R826_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R826_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R827_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R827_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R828_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R828_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R831_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R831_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R832_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R832_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R833_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R833_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R834_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R834_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R835_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R835_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R836_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R836_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R837_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R837_C1').attr("checked", false);
                }
                else if (group == "CAPITOL8_R810_C1") {
                    jQuery('#CAPITOL8_R820').show();
                    jQuery('#CAPITOL8_R821').show();
                    jQuery('#CAPITOL8_R822').show();
                    jQuery('#CAPITOL8_R823').show();
                    jQuery('#CAPITOL8_R824').show();
                    jQuery('#CAPITOL8_R825').show();
                    jQuery('#CAPITOL8_R826').show();
                    jQuery('#CAPITOL8_R827').show();
                    jQuery('#CAPITOL8_R828').show();
                    jQuery('#CAPITOL8_R830').show();
                    jQuery('#CAPITOL8_R831').show();
                    jQuery('#CAPITOL8_R832').show();
                    jQuery('#CAPITOL8_R833').show();
                    jQuery('#CAPITOL8_R834').show();
                    jQuery('#CAPITOL8_R835').show();
                    jQuery('#CAPITOL8_R836').show();
                    jQuery('#CAPITOL8_R837').show();
                }

                else if (jQuery('#CAPITOL5_R511_C2').is(':checked') && jQuery('#CAPITOL5_R512_C2').is(':checked')) {
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
    function CAEMhide() {
        var state = jQuery(this).is(':checked');
        var CAEM = jQuery('#CAEM').val();
        var CAEMletter = CAEM.substr(0, 1);
        var a = CAEM.substr(0, 4);
        if ((caemFill.indexOf(CAEMletter) !== -1) || (CAEM.substr(0, 4) == 'S951')) {
            jQuery('#CAPITOL4').show(); jQuery('#CAPITOL4_HEADER').show(); jQuery('#CAPITOL4_HEADER_NOTE').show();
            jQuery('#CAPITOL5').show(); jQuery('#CAPITOL5_HEADER').show(); jQuery('#CAPITOL5_HEADER_NOTE').show();
            jQuery('#CAPITOL6').show(); jQuery('#CAPITOL6_HEADER').show(); jQuery('#CAPITOL6_HEADER_NOTE').show();
        }
        else {
            jQuery('#CAPITOL4').hide(); jQuery('#CAPITOL4_HEADER').hide(); jQuery('#CAPITOL4_HEADER_NOTE').hide();
            jQuery('#CAPITOL5').hide(); jQuery('#CAPITOL5_HEADER').hide(); jQuery('#CAPITOL5_HEADER_NOTE').hide();
            jQuery('#CAPITOL6').hide(); jQuery('#CAPITOL6_HEADER').hide(); jQuery('#CAPITOL6_HEADER_NOTE').hide();
        }
    }

    webform.validators.inf1 = function (v, allowOverpass) {
        var values = Drupal.settings.mywebform.values;

        if (!(jQuery('#CAPITOL1_R130_C1').is(':checked') || jQuery('#CAPITOL1_R130_C2').is(':checked'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.1. Rind.130 trebuie sa fie DA sau NU')
            });
        }

        if (jQuery('#CAPITOL1_R130_C1').is(':checked') && !(jQuery('#CAPITOL1_R140_C1').is(':checked') || jQuery('#CAPITOL1_R140_C2').is(':checked'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R140_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.2. Rind.130 este Da atunci Rind.140 trebuie sa fie DA sau NU')
            });
        }

        if (jQuery('#CAPITOL1_R130_C1').is(':checked') && !(jQuery('#CAPITOL1_R150_C1').is(':checked') || jQuery('#CAPITOL1_R150_C2').is(':checked'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R150_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.3. Rind.130 este Da atunci Rind.150 trebuie sa fie DA sau NU')
            });
        }

        if (values.CAPITOL1_R140_C1 == true && (values.CAPITOL1_R141_C1 == 0)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R141_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.7. Rind.140 este Da atunci Rind.141 > 0')
            });
        }

        if (values.CAPITOL1_R150_C1 == true && (values.CAPITOL1_R161_C1 == false && values.CAPITOL1_R162_C1 == false && values.CAPITOL1_R163_C1 == false &&
            values.CAPITOL1_R164_C1 == false && values.CAPITOL1_R165_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R161_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.8. Rind.150 este Da atunci unul din Rind.161,162,163,164,165 trebuie sa fie selectat')
            });
        }

        //-----------------------------------------------------------------------------------------------------

        // if (values.CAPITOL1_R130_C1 == true && values.CAPITOL7_R730_C2 == true && (sum710_752 !== 6)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL1_R130_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
        //     });
        // }

        // if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL7_R730_C2 == false && values.CAPITOL7_R730_C1 == false) && (sum710_752 !== 7)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL1_R130_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers')
        //     });
        // }

        //--------------------------------------------------------------------------------------------------------

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R210_C1 == true || values.CAPITOL2_R210_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R210_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.9. Rind.130 este Da atunci Rind.210 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R211_C1 == true || values.CAPITOL2_R211_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R211_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.10. Rind.130 este Da atunci Rind.211 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R212_C1 == true || values.CAPITOL2_R212_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R212_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.11. Rind.130 este Da atunci Rind.212 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R213_C1 == true || values.CAPITOL2_R213_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R213_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.12. Rind.130 este Da atunci Rind.213 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R214_C1 == true || values.CAPITOL2_R214_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R214_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.13. Rind.130 este Da atunci Rind.214 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R220_C1 == true || values.CAPITOL2_R220_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R220_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.13.1 Rind.130 este Da atunci Rind.220 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL3_R310_C1 == true || values.CAPITOL3_R310_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R310_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.14. Rind.130 este Da atunci Rind.310 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R321_C1 == true || values.CAPITOL3_R321_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R321_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.15. Rind.310 este Da atunci Rind.321 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R322_C1 == true || values.CAPITOL3_R322_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R322_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.16. Rind.310 este Da atunci Rind.322 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R323_C1 == true || values.CAPITOL3_R323_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R323_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.17. Rind.310 este Da atunci Rind.323 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R324_C1 == true || values.CAPITOL3_R324_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R324_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.18. Rind.310 este Da atunci Rind.324 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R325_C1 == true || values.CAPITOL3_R325_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R325_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.19. Rind.310 este Da atunci Rind.325 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R326_C1 == true || values.CAPITOL3_R326_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R326_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.20. Rind.310 este Da atunci Rind.326 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R327_C1 == true || values.CAPITOL3_R327_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R327_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.21. Rind.310 este Da atunci Rind.327 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R328_C1 == true || values.CAPITOL3_R328_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R328_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.22. Rind.310 este Da atunci Rind.328 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R329_C1 == true || values.CAPITOL3_R329_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R329_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.23. Rind.310 este Da atunci Rind.329 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && !(values.CAPITOL3_R330_C1 == true || values.CAPITOL3_R330_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R330_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.24. Rind.310 este Da atunci Rind.330 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R410_C1 == true || values.CAPITOL4_R410_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R410_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.25.1. Rind.130 este Da atunci Rind.410 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R411_C1 == true || values.CAPITOL4_R411_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R411_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.25. Rind.130 este Da atunci Rind.411 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R412_C1 == true || values.CAPITOL4_R412_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R412_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.26. Rind.130 este Da atunci Rind.412 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R413_C1 == true || values.CAPITOL4_R413_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R413_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.27. Rind.130 este Da atunci Rind.413 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R414_C1 == true || values.CAPITOL4_R414_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R414_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.28. Rind.130 este Da atunci Rind.414 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R415_C1 == true || values.CAPITOL4_R415_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R415_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.29. Rind.130 este Da atunci Rind.415 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R420_C1 == true || values.CAPITOL4_R420_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R420_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.34. Rind.130 este Da atunci Rind.420 trebuie sa fie selectat DA sau NU')
            });
        }

        if ((values.CAPITOL4_R410_C1 == true && values.CAPITOL1_R130_C1 == true) && !(values.CAPITOL4_R411_C1 == true || values.CAPITOL4_R411_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {

            var caem = values.CAEM.substr(0, 1);
            webform.errors.push({
                'fieldName': 'CAPITOL4_R411_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.390. Rind.130 este Da atunci Rind.411 trebuie sa fie selectat DA sau NU')
            });
        }

        if ((values.CAPITOL4_R410_C1 == true && values.CAPITOL1_R130_C1 == true) && !(values.CAPITOL4_R412_C1 == true || values.CAPITOL4_R412_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R412_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.40. Rind.130 este Da atunci Rind.412 trebuie sa fie selectat DA sau NU')
            });
        }

        if ((values.CAPITOL4_R410_C1 == true && values.CAPITOL1_R130_C1 == true) && !(values.CAPITOL4_R413_C1 == true || values.CAPITOL4_R413_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R413_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.41. Rind.130 este Da atunci Rind.413 trebuie sa fie selectat DA sau NU')
            });
        }

        if ((values.CAPITOL4_R410_C1 == true && values.CAPITOL1_R130_C1 == true) && !(values.CAPITOL4_R414_C1 == true || values.CAPITOL4_R414_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R414_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.43. Rind.130 este Da atunci Rind.414 trebuie sa fie selectat DA sau NU')
            });
        }

        if ((values.CAPITOL4_R410_C1 == true && values.CAPITOL1_R130_C1 == true) && !(values.CAPITOL4_R415_C1 == true || values.CAPITOL4_R415_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R415_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.43. Rind.130 este Da atunci Rind.415 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R511_C1 == true || values.CAPITOL5_R511_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R511_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.44. Rind.130 este Da atunci Rind.511 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R512_C1 == true || values.CAPITOL5_R512_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R512_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.45. Rind.130 este Da atunci Rind.512 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL5_R511_C1 == true && values.CAPITOL5_R520_C1 <= 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R520_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.46. Rind.511 este Da atunci Rind.520 > 0')
            });
        }

        if (values.CAPITOL5_R512_C1 == true && values.CAPITOL5_R520_C1 <= 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R520_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.47. Rind.512 este Da atunci Rind.520 > 0')
            });
        }

        if (values.CAPITOL5_R511_C1 == true && !(values.CAPITOL5_R531_C1 > 0 && values.CAPITOL5_R531_C1 <= 100)) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R531_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.48-49. Rind.511 este Da atunci Rind.531 apartine intervalului [0-100]')
            });
        }

        if (values.CAPITOL5_R512_C1 == true && !(values.CAPITOL5_R532_C1 > 0 && values.CAPITOL5_R532_C1 <= 100)) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R532_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.50-51. Rind.512 este Da atunci Rind.532 apartine intervalului [0-100]')
            });
        }

        if ((values.CAPITOL5_R511_C1 == true || values.CAPITOL5_R512_C1 == true) && values.CAPITOL5_R533_C1 != 100) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R533_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.52. Rind.511 este Da atunci Rind.533 = 100')
            });
        }

        if ((values.CAPITOL5_R511_C1 == true || values.CAPITOL5_R512_C1 == true) && values.CAPITOL5_R543_C1 != 100) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R543_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.53. Rind.511 este Da atunci Rind.543 = 100')
            });
        }

        if (values.CAPITOL5_R511_C1 == true && values.CAPITOL5_R543_C1 != 100) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R543_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.53-54. Rind.511 este Da atunci Rind.543 apartine intervalului [0-100]')
            });
        }

        /*if (values.CAPITOL5_R512_C1 == true && !(values.CAPITOL5_R542_C1 > 0 && values.CAPITOL5_R542_C1 < 100)) {
          webform.errors.push({
            'fieldName': 'CAPITOL5_R542_C1',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-001.55-56. Rind.512 este Da atunci Rind.542 apartine intervalului [0-100]')
          });
        }*/

        if (values.CAPITOL5_R560_C1 == true && values.CAPITOL5_R570_C1 <= 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R570_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.60. Rind.560 este Da atunci Rind.570 > 0')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL6_R610_C1 == true || values.CAPITOL6_R610_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R610_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.62. Rind.130 este Da atunci Rind.610 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL6_R620_C1 == true || values.CAPITOL6_R620_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R620_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.63. Rind.130 este Da atunci Rind.620 trebuie sa fie selectat DA sau NU')
            });
        }

        var r141 = toFloat(values.CAPITOL1_R141_C1);
        var r120 = toFloat(values.CAPITOL1_R120_C1);
        if (r141 > r120) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R141_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.65. Rind.141 > Rind 120 (dar trebuie sa fie <=)')
            });
        }

        var r110 = toFloat(values.CAPITOL1_R110_C1);
        var r111 = toFloat(values.CAPITOL1_R111_C1);
        var r112 = toFloat(values.CAPITOL1_R112_C1);
        var r113 = toFloat(values.CAPITOL1_R113_C1);

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R560_C1 == true || values.CAPITOL5_R560_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R560_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.69. Rind.130 este Da atunci Rind.560 trebuie sa fie selectat DA sau NU')
            });
        }

        if ((values.CAPITOL1_R510_C1 == true && values.CAPITOL1_R130_C1 == true) && !(values.CAPITOL4_R420_C1 == true || values.CAPITOL4_R420_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R420_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.82. Rind.130 este Da atunci Rind.420 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL5_R511_C1 == true && !(values.CAPITOL5_R531_C1 > 0)) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R531_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.83. Rind.511 este Da atunci Rind.531 > 0')
            });
        }

        if (values.CAPITOL5_R512_C1 == true && !(values.CAPITOL5_R532_C1 > 0)) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R532_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.84. Rind.512 este Da atunci unul din Rind.532 > 0')
            });
        }

        if (values.CAPITOL5_R511_C2 == true && values.CAPITOL5_R531_C1 > 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R531_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.85. Rind.511 este NU atunci Rind.531 = 0')
            });
        }

        if (values.CAPITOL5_R512_C2 == true && values.CAPITOL5_R532_C1 > 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R532_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.86. Rind.512 este NU atunci unul din Rind.532 = 0')
            });
        }

        /*if (!(caemFill.indexOf(values.CAEM.substr(0,1)) && !(values.CAEM.substr(0,4) == 'S951'))) {
          webform.errors.push({
            'fieldName': 'CAPITOL1_R110_C1',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-003. Capitolul 5,6,7 nu trebuie completat')
          });
        }*/

        var r999 = 0;
        r999 = toFloat(values.CAPITOL10_R999_C1);
        if ((values.CAPITOL10_R999_C1 == false || r999 > 600)) {
            webform.errors.push({
                'fieldName': 'CAPITOL10_R999_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.88. Rind.999 trebuie sa apartina intervalului 1-600')
            });
        }

        if (r110 > r111) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R111_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.01. Rind.110 > Rind 111 (dar trebuie sa fie <=)')
            });
        }

        if (r110 > r112) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R112_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.02. Rind.110 > Rind 112 (dar trebuie sa fie <=)')
            });
        }

        if ((r111 > 0 || r112 > 0) && r141 == 0 && values.CAPITOL1_R130_C1 == true) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R141_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.03. Rind.111 sau 112 > 0 atunci Rind 141 = 0 (dar trebuie sa fie > 0)')
            });
        }

        /*if (!(values.CAPITOL10_R999_C1 > 0 && values.CAPITOL10_R999_C1 < 600)) {
          webform.warnings.push({
            'fieldName': 'CAPITOL10_R999_C1',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-002.05-06. Rind.999 trebuie sa apartina intervalului 0-600')
          });
        }*/

        if (values.CAPITOL2_R210_C1 == true && (values.CAPITOL2_R211_C1 == false && values.CAPITOL2_R212_C1 == false && values.CAPITOL2_R213_C1 == false &&
            values.CAPITOL2_R214_C1 == false && values.CAPITOL2_R215_C1 == false && values.CAPITOL2_R216_C1 == false && values.CAPITOL2_R217_C1 == false &&
            values.CAPITOL2_R218_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R210_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07.1. Rind.210 ati selectat DA dar Rind.211,212,213,214,215,216,217,218 nu aveti nici un DA')
            });
        }

        if (values.CAPITOL3_R310_C1 == true && (values.CAPITOL3_R321_C1 == false && values.CAPITOL3_R322_C1 == false && values.CAPITOL3_R323_C1 == false &&
            values.CAPITOL3_R324_C1 == false && values.CAPITOL3_R325_C1 == false && values.CAPITOL3_R326_C1 == false && values.CAPITOL3_R327_C1 == false &&
            values.CAPITOL3_R328_C1 == false && values.CAPITOL3_R329_C1 == false && values.CAPITOL3_R330_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL3_R310_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07.2. Rind.310 ati selectat DA dar Rind.321,322,323,324,325,326,327,328,329,330 nu aveti nici un DA')
            });
        }

        if (values.CAPITOL4_R410_C1 == true && (values.CAPITOL4_R411_C1 == false && values.CAPITOL4_R412_C1 == false && values.CAPITOL4_R413_C1 == false &&
            values.CAPITOL4_R414_C1 == false && values.CAPITOL4_R415_C1 == false && values.CAPITOL4_R420_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R410_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07.3. Rind.410 ati selectat DA dar Rind.411,412,413,414,415,420 nu aveti nici un DA')
            });
        }

        if (values.CAPITOL6_R650_C1 == true && (values.CAPITOL6_R661_C1 == false && values.CAPITOL6_R662_C1 == false && values.CAPITOL6_R663_C1 == false &&
            values.CAPITOL6_R664_C1 == false && values.CAPITOL6_R665_C1 == false && values.CAPITOL6_R666_C1 == false && values.CAPITOL6_R667_C1 == false &&
            values.CAPITOL6_R668_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R650_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07.4. Rind.650 ati selectat DA dar Rind.661,662,663,664,665,666,667,668 nu aveti nici un DA')
            });
        }

        if (values.CAPITOL8_R810_C1 == true && (values.CAPITOL8_R821_C1 == false && values.CAPITOL8_R822_C1 == false && values.CAPITOL8_R823_C1 == false &&
            values.CAPITOL8_R824_C1 == false && values.CAPITOL8_R825_C1 == false && values.CAPITOL8_R826_C1 == false && values.CAPITOL8_R827_C1 == false &&
            values.CAPITOL8_R828_C1 == false && values.CAPITOL8_R831_C1 == false && values.CAPITOL8_R832_C1 == false && values.CAPITOL8_R833_C1 == false &&
            values.CAPITOL8_R834_C1 == false && values.CAPITOL8_R835_C1 == false && values.CAPITOL8_R836_C1 == false && values.CAPITOL8_R837_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL8_R810_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07.5. Rind.810 ati selectat DA dar Rind.821,822,823,824,825,826,827,828,831,832,833,834,835,836,837 nu aveti nici un DA')
            });
        }

        if (values.CAPITOL9_R910_C1 == true && (values.CAPITOL9_R921_C1 == false && values.CAPITOL9_R922_C1 == false && values.CAPITOL9_R923_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07.6. Rind.910 ati selectat DA dar Rind.921,922,923 nu aveti nici un DA')
            });
        }

        if (r110 == 0 && r111 == 0 && r112 == 0 && r113 == 0 && (r120 > 0 || r141 > 0)) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R110_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.08. Rind.110,111,112,113 = 0 atunci Rind.120,141 trebuie sa fie 0')
            });
        }

        if ((r111 > 0 || r112 > 0) && r120 == 0) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R120_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.09. Rind.111 sau 112 > 0 atunci Rind 120 = 0 (dar trebuie sa fie > 0)')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && values.CAPITOL1_R150_C1 == false) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R150_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.11. Rind.130 ati selectat DA atunci Rind 150 trebuie sa fie DA')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL1_R111_C1 == false && values.CAPITOL1_R113_C1 == false)) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R111_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-015. Rind.130 ati selectat DA atunci unul din Rind 111,113 trebuie sa fie DA')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL1_R111_C1 == false && values.CAPITOL1_R113_C1 == false)) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R113_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-015. Rind.130 ati selectat DA atunci unul din Rind 111,113 trebuie sa fie DA')
            });
        }

        var r610_c1 = 0;
        r610_c1 = Number(values.CAPITOL6_R610_C1);
        var r610_c2 = 0;
        r610_c2 = Number(values.CAPITOL6_R610_C2);

        var r620_c1 = 0;
        r620_c1 = Number(values.CAPITOL6_R620_C1);
        var r620_c2 = 0;
        r620_c2 = Number(values.CAPITOL6_R620_C2);

        var r630_c1 = 0;
        r630_c1 = Number(values.CAPITOL6_R630_C1);
        var r630_c2 = 0;
        r630_c2 = Number(values.CAPITOL6_R630_C2);

        var r640_c1 = 0;
        r640_c1 = Number(values.CAPITOL6_R640_C1);
        var r640_c2 = 0;
        r640_c2 = Number(values.CAPITOL6_R640_C2);

        var r650_c1 = 0;
        r650_c1 = Number(values.CAPITOL6_R650_C1);
        var r650_c2 = 0;
        r650_c2 = Number(values.CAPITOL6_R650_C2);

        var r661_c1 = 0;
        r661_c1 = Number(values.CAPITOL6_R661_C1);
        var r661_c2 = 0;
        r661_c2 = Number(values.CAPITOL6_R661_C2);

        var r662_c1 = 0;
        r662_c1 = Number(values.CAPITOL6_R662_C1);
        var r662_c2 = 0;
        r662_c2 = Number(values.CAPITOL6_R662_C2);

        var r663_c1 = 0;
        r663_c1 = Number(values.CAPITOL6_R663_C1);
        var r663_c2 = 0;
        r663_c2 = Number(values.CAPITOL6_R663_C2);

        var r664_c1 = 0;
        r664_c1 = Number(values.CAPITOL6_R664_C1);
        var r664_c2 = 0;
        r664_c2 = Number(values.CAPITOL6_R664_C2);

        var r665_c1 = 0;
        r665_c1 = Number(values.CAPITOL6_R665_C1);
        var r665_c2 = 0;
        r665_c2 = Number(values.CAPITOL6_R665_C2);

        var r666_c1 = 0;
        r666_c1 = Number(values.CAPITOL6_R666_C1);
        var r666_c2 = 0;
        r666_c2 = Number(values.CAPITOL6_R666_C2);

        var r667_c1 = 0;
        r667_c1 = Number(values.CAPITOL6_R667_C1);
        var r667_c2 = 0;
        r667_c2 = Number(values.CAPITOL6_R667_C2);

        var r668_c1 = 0;
        r668_c1 = Number(values.CAPITOL6_R668_C1);
        var r668_c2 = 0;
        r668_c2 = Number(values.CAPITOL6_R668_C2);

        var r670_c1 = 0;
        r670_c1 = Number(values.CAPITOL6_R670_C1);
        var r670_c2 = 0;
        r670_c2 = Number(values.CAPITOL6_R670_C2);

        var sum661_68 = r661_c1 + r661_c2 + r662_c1 + r662_c2 + r663_c1 + r663_c2 + r664_c1 + r664_c2
            + r665_c1 + r665_c2 + r666_c1 + r666_c2 + r667_c1 + r667_c2 + r668_c1 + r668_c2;

        var sum610_650 = r610_c1 + r610_c2 + r620_c1 + r620_c2 + r630_c1 + r630_c2 + r640_c1 + r640_c2 + r650_c1 + r650_c2 + r670_c1 + r670_c2;

        /*if (values.CAPITOL1_R130_C1 == true && (sum610_650 !== 7)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R661_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018.17. Daca este rind 130 DA atunci sunt 610,620,630,640,650,670')
            });
        }*/

        if (values.CAPITOL6_R650_C1 == true && (sum661_68 !== 8)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R661_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018. Daca este rind 650 DA atunci sunt 661,662,663,664,665,666,667,668 si invers')
            });
        }

        if (values.CAPITOL6_R650_C1 == false && (sum661_68 === 8)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R650_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018. Daca este rind 650 DA atunci sunt 661,662,663,664,665,666,667,668 si invers')
            });
        }

        // Capitol 4 

        var r410_c1 = 0;
        r410_c1 = Number(values.CAPITOL4_R410_C1);

        var r411_c1 = 0;
        r411_c1 = Number(values.CAPITOL4_R411_C1);
        var r411_c2 = 0;
        r411_c2 = Number(values.CAPITOL4_R411_C2);

        var r412_c1 = 0;
        r412_c1 = Number(values.CAPITOL4_R412_C1);
        var r412_c2 = 0;
        r412_c2 = Number(values.CAPITOL4_R412_C2);

        var r413_c1 = 0;
        r413_c1 = Number(values.CAPITOL4_R413_C1);
        var r413_c2 = 0;
        r413_c2 = Number(values.CAPITOL4_R413_C2);

        var r414_c1 = 0;
        r414_c1 = Number(values.CAPITOL4_R414_C1);
        var r414_c2 = 0;
        r414_c2 = Number(values.CAPITOL4_R414_C2);

        var r415_c1 = 0;
        r415_c1 = Number(values.CAPITOL4_R415_C1);
        var r415_c2 = 0;
        r415_c2 = Number(values.CAPITOL4_R415_C2);

        var sum411_415 = r411_c1 + r411_c2 + r412_c1 + r412_c2 + r413_c1 + r413_c2 + r414_c1 + r414_c2
            + r415_c1 + r415_c2;

        if (values.CAPITOL4_R410_C1 == true && (sum411_415 !== 5)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R410_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-017. Daca este rind 410 DA atunci sunt toate randirile din CAP 4 si invers')
            });
        }

        if (values.CAPITOL4_R410_C1 == false && (sum411_415 === 5)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R410_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-017. Daca este rind 410 DA atunci sunt toate randirile din CAP 4 si invers')
            });
        }

        // Capitol 4

        // Capitol 7

        var r710_c1 = 0;
        r710_c1 = Number(values.CAPITOL7_R710_C1);
        var r710_c2 = 0;
        r710_c2 = Number(values.CAPITOL7_R710_C2);

        var r721_c1 = 0;
        r721_c1 = Number(values.CAPITOL7_R721_C1);
        var r721_c2 = 0;
        r721_c2 = Number(values.CAPITOL7_R721_C2);

        var r722_c1 = 0;
        r722_c1 = Number(values.CAPITOL7_R722_C1);
        var r722_c2 = 0;
        r722_c2 = Number(values.CAPITOL7_R722_C2);

        var r730_c1 = 0;
        r730_c1 = Number(values.CAPITOL7_R730_C1);
        var r730_c2 = 0;
        r730_c2 = Number(values.CAPITOL7_R730_C2);

        var r740_c1 = 0;
        r740_c1 = Number(values.CAPITOL7_R740_C1);
        var r740_c2 = 0;
        r740_c2 = Number(values.CAPITOL7_R740_C2);

        var r751_c1 = 0;
        r751_c1 = Number(values.CAPITOL7_R751_C1);
        var r751_c2 = 0;
        r751_c2 = Number(values.CAPITOL7_R751_C2);

        var r752_c1 = 0;
        r752_c1 = Number(values.CAPITOL7_R752_C1);
        var r752_c2 = 0;
        r752_c2 = Number(values.CAPITOL7_R752_C2);

        var sum710_752 = r710_c1 + r710_c2 + r721_c1 + r721_c2 + r722_c1 + r722_c2 + r730_c1 + r730_c2 + r740_c1 + r740_c2 +
            r751_c1 + r751_c2 + r752_c1 + r752_c2;

        if (values.CAPITOL1_R130_C1 == true && values.CAPITOL7_R730_C1 == true && (sum710_752 !== 7)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 7 toate randurile si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && values.CAPITOL7_R730_C2 == true && (sum710_752 !== 6)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 7 toate randurile si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL7_R730_C2 == false && values.CAPITOL7_R730_C1 == false) && (sum710_752 !== 7)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 7 toate randurile si invers')
            });
        }

        // if (values.CAPITOL1_R130_C1 == false && (sum710_752 === 7)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL1_R130_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 7 toate randurile si invers ')
        //     });
        // }

        // Capitol 7

        // Capitol 8

        var r821_c1 = 0;
        r821_c1 = Number(values.CAPITOL8_R821_C1);
        var r821_c2 = 0;
        r821_c2 = Number(values.CAPITOL8_R821_C2);

        var r822_c1 = 0;
        r822_c1 = Number(values.CAPITOL8_R822_C1);
        var r822_c2 = 0;
        r822_c2 = Number(values.CAPITOL8_R822_C2);

        var r823_c1 = 0;
        r823_c1 = Number(values.CAPITOL8_R823_C1);
        var r823_c2 = 0;
        r823_c2 = Number(values.CAPITOL8_R823_C2);

        var r824_c1 = 0;
        r824_c1 = Number(values.CAPITOL8_R824_C1);
        var r824_c2 = 0;
        r824_c2 = Number(values.CAPITOL8_R824_C2);

        var r825_c1 = 0;
        r825_c1 = Number(values.CAPITOL8_R825_C1);
        var r825_c2 = 0;
        r825_c2 = Number(values.CAPITOL8_R825_C2);

        var r826_c1 = 0;
        r826_c1 = Number(values.CAPITOL8_R826_C1);
        var r826_c2 = 0;
        r826_c2 = Number(values.CAPITOL8_R826_C2);

        var r827_c1 = 0;
        r827_c1 = Number(values.CAPITOL8_R827_C1);
        var r827_c2 = 0;
        r827_c2 = Number(values.CAPITOL8_R827_C2);

        var r828_c1 = 0;
        r828_c1 = Number(values.CAPITOL8_R828_C1);
        var r828_c2 = 0;
        r828_c2 = Number(values.CAPITOL8_R828_C2);

        var r831_c1 = 0;
        r831_c1 = Number(values.CAPITOL8_R831_C1);
        var r831_c2 = 0;
        r831_c2 = Number(values.CAPITOL8_R831_C2);

        var r832_c1 = 0;
        r832_c1 = Number(values.CAPITOL8_R832_C1);
        var r832_c2 = 0;
        r832_c2 = Number(values.CAPITOL8_R832_C2);

        var r833_c1 = 0;
        r833_c1 = Number(values.CAPITOL8_R833_C1);
        var r833_c2 = 0;
        r833_c2 = Number(values.CAPITOL8_R833_C2);

        var r834_c1 = 0;
        r834_c1 = Number(values.CAPITOL8_R834_C1);
        var r834_c2 = 0;
        r834_c2 = Number(values.CAPITOL8_R834_C2);

        var r835_c1 = 0;
        r835_c1 = Number(values.CAPITOL8_R835_C1);
        var r835_c2 = 0;
        r835_c2 = Number(values.CAPITOL8_R835_C2);

        var r836_c1 = 0;
        r836_c1 = Number(values.CAPITOL8_R836_C1);
        var r836_c2 = 0;
        r836_c2 = Number(values.CAPITOL8_R836_C2);

        var r837_c1 = 0;
        r837_c1 = Number(values.CAPITOL8_R837_C1);
        var r837_c2 = 0;
        r837_c2 = Number(values.CAPITOL8_R837_C2);

        var sum821_837 = r821_c1 + r821_c2 + r822_c1 + r822_c2 + r823_c1 + r823_c2 + r824_c1 + r824_c2 + r825_c1 + r825_c2 + r826_c1 + r826_c2 + r827_c1 + r827_c2 +
            r828_c1 + r828_c2 + r831_c1 + r831_c2 + r832_c1 + r832_c2 + r833_c1 + r833_c2 + r834_c1 + r834_c2 + r835_c1 + r835_c2 + r836_c1 + r836_c2 + r837_c1 + r837_c2;

        if (values.CAPITOL8_R810_C1 == true && (sum821_837 !== 15)) {
            webform.errors.push({
                'fieldName': 'CAPITOL8_R810_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.1 Daca exista CAP 8 rind 810 DA exista CAP 8 toate randurile si invers')
            });
        }

        if (values.CAPITOL8_R810_C2 == false && values.CAPITOL8_R810_C1 == false && (sum821_837 === 15)) {
            webform.errors.push({
                'fieldName': 'CAPITOL8_R810_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.1 Daca exista CAP 8 rind 810 DA exista CAP 8 toate randurile si invers')
            });
        }

        // Capitol 8 

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL8_R810_C1 == false && values.CAPITOL8_R810_C2 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL8_R810_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca este Rind.130 DA atunci este Rind.810 si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL8_R810_C1 == false && values.CAPITOL8_R810_C2 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL8_R810_C2',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca este Rind.130 DA atunci este Rind.810 si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == false && (values.CAPITOL8_R810_C1 == true || values.CAPITOL8_R810_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca este Rind.130 DA atunci este Rind.810 si invers')
            });
        }

        // Capitol 9

        var r910_c1 = 0;
        r910_c1 = Number(values.CAPITOL9_R910_C1);
        var r910_c2 = 0;
        r910_c2 = Number(values.CAPITOL9_R910_C2);

        var r921_c1 = 0;
        r921_c1 = Number(values.CAPITOL9_R921_C1);
        var r921_c2 = 0;
        r921_c2 = Number(values.CAPITOL9_R921_C2);

        var r922_c1 = 0;
        r922_c1 = Number(values.CAPITOL9_R922_C1);
        var r922_c2 = 0;
        r922_c2 = Number(values.CAPITOL9_R922_C2);

        var r923_c1 = 0;
        r923_c1 = Number(values.CAPITOL9_R923_C1);
        var r923_c2 = 0;
        r923_c2 = Number(values.CAPITOL9_R923_C2);

        var sum910_923 = r910_c1 + r910_c2 + r921_c1 + r921_c2 + r922_c1 + r922_c2 + r923_c1 + r923_c2;

        if (values.CAPITOL1_R130_C1 == true && (sum910_923 !== 4)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca exista rind 130 DA exista CAP 9 toate randurile si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == false && (sum910_923 === 4)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca exista rind 130 DA exista CAP 9 toate randurile si invers')
            });
        }

        // Capitol 9

        //
        //

        // Check if the field is empty or has more than 9 digits
        if (!values.PHONE || !/^[0-9]{9}$/.test(values.PHONE)) {
            webform.errors.push({
                'fieldName': 'PHONE',
                'msg': Drupal.t(' Cod eroare: A.09 Introduceți doar un număr de telefon format din 9 cifre')
            });
        }

        // Check if the first digit is 0
        if (values.PHONE && values.PHONE[0] !== '0') {
            webform.errors.push({
                'fieldName': 'PHONE',
                'msg': Drupal.t(' Cod eroare: A.09 Prima cifră a numărului de telefon trebuie să fie 0')
            });
        }

        webform.validatorsStatus.inf1 = 1;
        validateWebform();
    };
})(jQuery)