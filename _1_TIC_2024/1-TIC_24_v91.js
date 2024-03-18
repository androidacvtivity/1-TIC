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
            var rows1hideClear = [140, 150, 161, 162, 163, 164, 165, 170, 180, 210, 221, 222, 223, 224, 310, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 430,
                421, 422, 423, 511, 512, 513, 514, 515, 520, 611, 612, 651, 652, 653, 654, 660, 681, 682, 683, 684, 710, 721, 722]
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
                    jQuery('#CAPITOL4').hide(); jQuery('#CAPITOL4_HEADER').hide();
                    jQuery('#CAPITOL5').hide(); jQuery('#CAPITOL5_HEADER').hide(); jQuery('#CAPITOL5_HEADER_NOTE').hide();
                    jQuery('#CAPITOL6').hide(); jQuery('#CAPITOL6_HEADER').hide(); jQuery('#CAPITOL6_HEADER_NOTE').hide();
                    jQuery('#CAPITOL7').hide(); jQuery('#CAPITOL7_HEADER').hide(); jQuery('#CAPITOL7_HEADER_NOTE').hide();
                    jQuery('#CAPITOL8').hide(); jQuery('#CAPITOL8_HEADER').hide(); jQuery('#CAPITOL8_HEADER_NOTE').hide();
                    jQuery('#CAPITOL9').hide(); jQuery('#CAPITOL9_HEADER').hide(); jQuery('#CAPITOL9_HEADER_NOTE').hide();
                    jQuery('#CAPITOL10').hide(); jQuery('#CAPITOL10_HEADER').hide(); jQuery('#CAPITOL10_HEADER_NOTE').hide();


                    jQuery('#CAPITOL1_R140').hide(); jQuery('#CAPITOL1_R141').hide(); jQuery('#CAPITOL1_R150').hide();
                    jQuery('#CAPITOL1_R160').hide(); jQuery('#CAPITOL1_R161').hide(); jQuery('#CAPITOL1_R162').hide(); jQuery('#CAPITOL1_R163').hide(); jQuery('#CAPITOL1_R164').hide();
                    jQuery('#CAPITOL1_R165').hide(); jQuery('#CAPITOL1_R170').hide(); jQuery('#CAPITOL1_R180').hide(); jQuery('#CAPITOL1_R190').hide();
                    jQuery('#CAPITOL1_R191').hide(); jQuery('#CAPITOL1_R192').hide(); jQuery('#CAPITOL1_R193').hide(); jQuery('#CAPITOL1_R194').hide(); 
                    jQuery('#CAPITOL1_R195').hide(); jQuery('#CAPITOL1_R192_Head').hide();
                    jQuery('#CAPITOL1_R140_C1').attr("checked", false); jQuery('#CAPITOL1_R140_C2').attr("checked", false);
                    document.getElementById("CAPITOL1_R141_C1").value = "";
                    jQuery('#CAPITOL1_R150_C1').attr("checked", false); jQuery('#CAPITOL1_R150_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false); jQuery('#CAPITOL1_R162_C1').attr("checked", false); 
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R164_C1').attr("checked", false); jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R170_C1').attr("checked", false); jQuery('#CAPITOL1_R170_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R180_C1').attr("checked", false); jQuery('#CAPITOL1_R180_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R190_C1').attr("checked", false); jQuery('#CAPITOL1_R190_C2').attr("checked", false);

                    document.getElementById("CAPITOL1_R191_C1").value = "";
                    jQuery('#CAPITOL1_R192_C1').attr("checked", false); jQuery('#CAPITOL1_R192_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R193_C1').attr("checked", false); jQuery('#CAPITOL1_R193_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R194_C1').attr("checked", false); jQuery('#CAPITOL1_R194_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R195_C1').attr("checked", false); jQuery('#CAPITOL1_R195_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R210_C1').attr("checked", false); jQuery('#CAPITOL2_R210_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R221_C1').attr("checked", false); jQuery('#CAPITOL2_R221_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R222_C1').attr("checked", false); jQuery('#CAPITOL2_R222_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R223_C1').attr("checked", false); jQuery('#CAPITOL2_R223_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R224_C1').attr("checked", false); jQuery('#CAPITOL2_R224_C2').attr("checked", false);
                    jQuery('#CAPITOL2_R230_C1').attr("checked", false); jQuery('#CAPITOL2_R230_C2').attr("checked", false);
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
                    jQuery('#CAPITOL4_R416_C1').attr("checked", false); jQuery('#CAPITOL4_R416_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R417_C1').attr("checked", false); jQuery('#CAPITOL4_R417_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R418_C1').attr("checked", false); jQuery('#CAPITOL4_R418_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R419_C1').attr("checked", false); jQuery('#CAPITOL4_R419_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R420_C1').attr("checked", false); jQuery('#CAPITOL4_R420_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R430_C1').attr("checked", false); jQuery('#CAPITOL4_R430_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R421_C1').attr("checked", false); jQuery('#CAPITOL4_R421_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R422_C1').attr("checked", false); jQuery('#CAPITOL4_R422_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R423_C1').attr("checked", false); jQuery('#CAPITOL4_R423_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R424_C1').attr("checked", false); jQuery('#CAPITOL4_R424_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R425_C1').attr("checked", false); jQuery('#CAPITOL4_R425_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R426_C1').attr("checked", false); jQuery('#CAPITOL4_R426_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R431_C1').attr("checked", false); jQuery('#CAPITOL4_R431_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R432_C1').attr("checked", false); jQuery('#CAPITOL4_R432_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R433_C1').attr("checked", false); jQuery('#CAPITOL4_R433_C2').attr("checked", false);
                    jQuery('#CAPITOL4_R440_C1').attr("checked", false); jQuery('#CAPITOL4_R440_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R510_C1').attr("checked", false); jQuery('#CAPITOL5_R510_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R511_C1').attr("checked", false); jQuery('#CAPITOL5_R511_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R512_C1').attr("checked", false); jQuery('#CAPITOL5_R512_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R513_C1').attr("checked", false); jQuery('#CAPITOL5_R513_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R514_C1').attr("checked", false); jQuery('#CAPITOL5_R514_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R515_C1').attr("checked", false); jQuery('#CAPITOL5_R515_C2').attr("checked", false);
                    jQuery('#CAPITOL5_R520_C1').attr("checked", false); jQuery('#CAPITOL5_R520_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R611_C1').attr("checked", false); jQuery('#CAPITOL6_R611_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R612_C1').attr("checked", false); jQuery('#CAPITOL6_R612_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R620_C1').attr("checked", false); jQuery('#CAPITOL6_R620_C2').attr("checked", false);
                    document.getElementById("CAPITOL6_R620_C1").value = "";
                    document.getElementById("CAPITOL6_R631_C1").value = "";
                    document.getElementById("CAPITOL6_R632_C1").value = "";
                    document.getElementById("CAPITOL6_R633_C1").value = "";
                    document.getElementById("CAPITOL6_R641_C1").value = "";
                    document.getElementById("CAPITOL6_R642_C1").value = "";
                    document.getElementById("CAPITOL6_R643_C1").value = "";
                    jQuery('#CAPITOL6_R651_C1').attr("checked", false); jQuery('#CAPITOL6_R651_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R652_C1').attr("checked", false); jQuery('#CAPITOL6_R652_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R653_C1').attr("checked", false); jQuery('#CAPITOL6_R653_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R654_C1').attr("checked", false); jQuery('#CAPITOL6_R654_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R660_C1').attr("checked", false); jQuery('#CAPITOL6_R660_C2').attr("checked", false);
                    document.getElementById("CAPITOL6_R670_C1").value = "";
                    jQuery('#CAPITOL6_R681_C1').attr("checked", false); jQuery('#CAPITOL6_R681_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R682_C1').attr("checked", false); jQuery('#CAPITOL6_R682_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R683_C1').attr("checked", false); jQuery('#CAPITOL6_R683_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R684_C1').attr("checked", false); jQuery('#CAPITOL6_R684_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R710_C1').attr("checked", false); jQuery('#CAPITOL7_R710_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R721_C1').attr("checked", false); jQuery('#CAPITOL7_R721_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R722_C1').attr("checked", false); jQuery('#CAPITOL7_R722_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R730_C1').attr("checked", false); jQuery('#CAPITOL7_R730_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R740_C1').attr("checked", false); jQuery('#CAPITOL7_R740_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R750_C1').attr("checked", false); jQuery('#CAPITOL7_R750_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R761_C1').attr("checked", false); jQuery('#CAPITOL7_R761_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R762_C1').attr("checked", false); jQuery('#CAPITOL7_R762_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R763_C1').attr("checked", false); jQuery('#CAPITOL7_R763_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R764_C1').attr("checked", false); jQuery('#CAPITOL7_R764_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R765_C1').attr("checked", false); jQuery('#CAPITOL7_R765_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R766_C1').attr("checked", false); jQuery('#CAPITOL7_R766_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R767_C1').attr("checked", false); jQuery('#CAPITOL7_R767_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R768_C1').attr("checked", false); jQuery('#CAPITOL7_R768_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R770_C1').attr("checked", false); jQuery('#CAPITOL7_R770_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R810_C1').attr("checked", false); jQuery('#CAPITOL8_R810_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R821_C1').attr("checked", false); jQuery('#CAPITOL8_R821_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R822_C1').attr("checked", false); jQuery('#CAPITOL8_R822_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R830_C1').attr("checked", false); jQuery('#CAPITOL8_R830_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R840_C1').attr("checked", false); jQuery('#CAPITOL8_R840_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R851_C1').attr("checked", false); jQuery('#CAPITOL8_R851_C2').attr("checked", false);
                    jQuery('#CAPITOL8_R852_C1').attr("checked", false); jQuery('#CAPITOL8_R852_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R910_C1').attr("checked", false); jQuery('#CAPITOL9_R910_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R921_C1').attr("checked", false); jQuery('#CAPITOL9_R921_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R922_C1').attr("checked", false); jQuery('#CAPITOL9_R922_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R923_C1').attr("checked", false); jQuery('#CAPITOL9_R923_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R924_C1').attr("checked", false); jQuery('#CAPITOL9_R924_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R925_C1').attr("checked", false); jQuery('#CAPITOL9_R925_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R926_C1').attr("checked", false); jQuery('#CAPITOL9_R926_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R927_C1').attr("checked", false); jQuery('#CAPITOL9_R927_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R931_C1').attr("checked", false); jQuery('#CAPITOL9_R931_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R932_C1').attr("checked", false); jQuery('#CAPITOL9_R932_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R933_C1').attr("checked", false); jQuery('#CAPITOL9_R933_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R941_C1').attr("checked", false); jQuery('#CAPITOL9_R941_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R951_C1').attr("checked", false); jQuery('#CAPITOL9_R951_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R961_C1').attr("checked", false); jQuery('#CAPITOL9_R961_C2').attr("checked", false);
                    jQuery('#CAPITOL9_R971_C1').attr("checked", false); jQuery('#CAPITOL9_R971_C2').attr("checked", false);
                    jQuery('#CAPITOL10_R980_C1').attr("checked", false); jQuery('#CAPITOL10_R980_C2').attr("checked", false);
                    jQuery('#CAPITOL10_R981_C1').attr("checked", false); jQuery('#CAPITOL10_R981_C2').attr("checked", false);
                    jQuery('#CAPITOL10_R982_C1').attr("checked", false); jQuery('#CAPITOL10_R982_C2').attr("checked", false);
                    jQuery('#CAPITOL10_R983_C1').attr("checked", false); jQuery('#CAPITOL10_R983_C2').attr("checked", false);

                }
                else if (group == "CAPITOL1_R130_C1") {
                    jQuery('#CAPITOL2').show(); jQuery('#CAPITOL2_HEADER').show();
                    jQuery('#CAPITOL3').show(); jQuery('#CAPITOL3_HEADER').show();
                    jQuery('#CAPITOL4').show(); jQuery('#CAPITOL4_HEADER').show();
                    jQuery('#CAPITOL5').show(); jQuery('#CAPITOL5_HEADER').show(); jQuery('#CAPITOL5_HEADER_NOTE').show();
                    jQuery('#CAPITOL6').show(); jQuery('#CAPITOL6_HEADER').show(); jQuery('#CAPITOL6_HEADER_NOTE').show();
                    jQuery('#CAPITOL7').show(); jQuery('#CAPITOL7_HEADER').show(); jQuery('#CAPITOL7_HEADER_NOTE').show();
                    jQuery('#CAPITOL8').show(); jQuery('#CAPITOL8_HEADER').show(); jQuery('#CAPITOL8_HEADER_NOTE').show();
                    jQuery('#CAPITOL9').show(); jQuery('#CAPITOL9_HEADER').show(); jQuery('#CAPITOL9_HEADER_NOTE').show();
                    jQuery('#CAPITOL10').show(); jQuery('#CAPITOL10_HEADER').show(); jQuery('#CAPITOL10_HEADER_NOTE').show();


                    // jQuery('#CAPITOL2').hide(); jQuery('#CAPITOL2_HEADER').hide();
                    // jQuery('#CAPITOL3').hide(); jQuery('#CAPITOL3_HEADER').hide();
                    // jQuery('#CAPITOL4').hide(); jQuery('#CAPITOL4_HEADER').hide();
                    // jQuery('#CAPITOL5').hide(); jQuery('#CAPITOL5_HEADER').hide(); jQuery('#CAPITOL5_HEADER_NOTE').hide();
                    // jQuery('#CAPITOL6').hide(); jQuery('#CAPITOL6_HEADER').hide(); jQuery('#CAPITOL6_HEADER_NOTE').hide();
                    // jQuery('#CAPITOL7').hide(); jQuery('#CAPITOL7_HEADER').hide(); jQuery('#CAPITOL7_HEADER_NOTE').hide();





                    jQuery('#CAPITOL1_R140').show(); jQuery('#CAPITOL1_R141').show(); jQuery('#CAPITOL1_R150').show(); jQuery('#CAPITOL1_R161').show();
                    jQuery('#CAPITOL1_R162').show(); jQuery('#CAPITOL1_R163').show(); jQuery('#CAPITOL1_R164').show(); jQuery('#CAPITOL1_R165').show();
                    jQuery('#CAPITOL1_R170').show(); jQuery('#CAPITOL1_R180').show(); jQuery('#CAPITOL1_R190').show(); 
                    jQuery('#CAPITOL1_R191').show();
                    jQuery('#CAPITOL1_R192').show(); 
                    jQuery('#CAPITOL1_R193').show(); jQuery('#CAPITOL1_R194').show(); jQuery('#CAPITOL1_R195').show();
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
                    jQuery('#CAPITOL1_R170').hide();
                    jQuery('#CAPITOL1_R161_C1').attr("checked", false); jQuery('#CAPITOL1_R162_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R163_C1').attr("checked", false); jQuery('#CAPITOL1_R164_C1').attr("checked", false); 
                    jQuery('#CAPITOL1_R165_C1').attr("checked", false);
                    jQuery('#CAPITOL1_R170_C1').attr("checked", false); jQuery('#CAPITOL1_R170_C2').attr("checked", false); 
                   
                }
                else if (group == "CAPITOL1_R150_C1") {
                    jQuery('#CAPITOL1_R160').show(); 
                    jQuery('#CAPITOL1_R161').show(); 
                    jQuery('#CAPITOL1_R162').show(); 
                    jQuery('#CAPITOL1_R163').show(); 
                    jQuery('#CAPITOL1_R164').show();
                    jQuery('#CAPITOL1_R165').show();
                    jQuery('#CAPITOL1_R170').show();
                }
                // else if (group == "CAPITOL1_R180_C2") {
                //     // jQuery('#CAPITOL1_R180').hide(); 
                //     jQuery('#CAPITOL1_R190').hide();
                //     jQuery('#CAPITOL1_R192').hide();
                //     jQuery('#CAPITOL1_R193').hide();
                //     jQuery('#CAPITOL1_R194').hide();
                //     jQuery('#CAPITOL1_R195').hide();
                //     // jQuery('#CAPITOL1_R180_C1').attr("checked", false); jQuery('#CAPITOL1_R180_C2').attr("checked", false);
                //     jQuery('#CAPITOL1_R190_C1').attr("checked", false); jQuery('#CAPITOL1_R190_C2').attr("checked", false);
                //     jQuery('#CAPITOL1_R192_C1').attr("checked", false); jQuery('#CAPITOL1_R192_C2').attr("checked", false);
                //     jQuery('#CAPITOL1_R193_C1').attr("checked", false); jQuery('#CAPITOL1_R193_C2').attr("checked", false);
                //     jQuery('#CAPITOL1_R194_C1').attr("checked", false); jQuery('#CAPITOL1_R194_C2').attr("checked", false);
                //     jQuery('#CAPITOL1_R195_C1').attr("checked", false); jQuery('#CAPITOL1_R195_C2').attr("checked", false);
                  
                //     document.getElementById("CAPITOL1_R181_C1").value = "";
                // }
                // else if (group == "CAPITOL1_R170_C1") {
                //     jQuery('#CAPITOL1_R180').show(); 
                //     jQuery('#CAPITOL1_R190').show();
                //     jQuery('#CAPITOL1_R192').show();
                //     jQuery('#CAPITOL1_R193').show();
                //     jQuery('#CAPITOL1_R194').show();
                //     jQuery('#CAPITOL1_R195').show();
                // }

               
                else if (group == "CAPITOL1_R180_C2") {
                    jQuery('#CAPITOL1_R190').hide();
                    jQuery('#CAPITOL1_R191').hide();
                    jQuery('#CAPITOL1_R192_Head').hide();
                    jQuery('#CAPITOL1_R192').hide();
                    jQuery('#CAPITOL1_R193').hide();
                    jQuery('#CAPITOL1_R194').hide();
                    jQuery('#CAPITOL1_R195').hide();
                    jQuery('#CAPITOL1_R190_C1').attr("checked", false); jQuery('#CAPITOL1_R190_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R191_C1').attr("checked", false); jQuery('#CAPITOL1_R191_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R192_C1').attr("checked", false); jQuery('#CAPITOL1_R192_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R193_C1').attr("checked", false); jQuery('#CAPITOL1_R193_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R194_C1').attr("checked", false); jQuery('#CAPITOL1_R194_C2').attr("checked", false);
                    jQuery('#CAPITOL1_R195_C1').attr("checked", false); jQuery('#CAPITOL1_R195_C2').attr("checked", false);
                    document.getElementById("CAPITOL1_R191_C1").value = "";
                }
                else if (group == "CAPITOL1_R180_C1") {
                    jQuery('#CAPITOL1_R190').show();
                    jQuery('#CAPITOL1_R191').show();
                    jQuery('#CAPITOL1_R192_Head').show();
                    jQuery('#CAPITOL1_R192').show();
                    jQuery('#CAPITOL1_R193').show();
                    jQuery('#CAPITOL1_R194').show();
                    jQuery('#CAPITOL1_R195').show();

                }


                else if (group == "CAPITOL1_R190_C2") {
                    jQuery('#CAPITOL1_R191').hide();
                    document.getElementById("CAPITOL1_R191_C1").value = "";
                }
                else if (group == "CAPITOL1_R190_C1") {
                    jQuery('#CAPITOL1_R191').show();

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
                
               
                

                // else if (jQuery('#CAPITOL6_R611_C2').is(':checked') && jQuery('#CAPITOL6_R612_C2').is(':checked')) {
                //     jQuery('#CAPITOL6_R620').hide(); jQuery('#CAPITOL6_R630').hide(); jQuery('#CAPITOL6_R631').hide(); jQuery('#CAPITOL6_R632').hide(); jQuery('#CAPITOL6_R633').hide();
                //     jQuery('#CAPITOL6_R640').hide(); jQuery('#CAPITOL6_R641').hide(); jQuery('#CAPITOL6_R642').hide(); jQuery('#CAPITOL6_R643').hide(); jQuery('#CAPITOL6_R650').hide();
                //     jQuery('#CAPITOL6_R651').hide(); jQuery('#CAPITOL6_R652').hide(); jQuery('#CAPITOL6_R653').hide(); jQuery('#CAPITOL6_R654').hide();

                //     document.getElementById("CAPITOL6_R620_C1").value = "";
                //     document.getElementById("CAPITOL6_R631_C1").value = "";
                //     document.getElementById("CAPITOL6_R632_C1").value = "";
                //     document.getElementById("CAPITOL6_R633_C1").value = "";
                //     document.getElementById("CAPITOL6_R641_C1").value = "";
                //     document.getElementById("CAPITOL6_R642_C1").value = "";
                //     document.getElementById("CAPITOL6_R643_C1").value = "";
                //     jQuery('#CAPITOL6_R651_C1').attr("checked", false); jQuery('#CAPITOL6_R651_C2').attr("checked", false);
                //     jQuery('#CAPITOL6_R652_C1').attr("checked", false); jQuery('#CAPITOL6_R652_C2').attr("checked", false);
                //     jQuery('#CAPITOL6_R653_C1').attr("checked", false); jQuery('#CAPITOL6_R653_C2').attr("checked", false);
                //     jQuery('#CAPITOL6_R654_C1').attr("checked", false); jQuery('#CAPITOL6_R654_C2').attr("checked", false);
                // }
                // else if (jQuery('#CAPITOL6_R611_C1').is(':checked') || jQuery('#CAPITOL6_R612_C1').is(':checked')) {
                //     jQuery('#CAPITOL6_R620').show(); jQuery('#CAPITOL6_R630').show(); jQuery('#CAPITOL6_R631').show(); jQuery('#CAPITOL6_R632').show(); jQuery('#CAPITOL6_R633').show();
                //     jQuery('#CAPITOL6_R640').show(); jQuery('#CAPITOL6_R641').show(); jQuery('#CAPITOL6_R642').show(); jQuery('#CAPITOL6_R643').show(); jQuery('#CAPITOL6_R650').show();
                //     jQuery('#CAPITOL6_R651').show(); jQuery('#CAPITOL6_R652').show(); jQuery('#CAPITOL6_R653').show(); jQuery('#CAPITOL6_R654').show();
                // }


                else if (
                    group == "CAPITOL6_R660_C2"
                   // jQuery('#CAPITOL6_R660_C2').is(':checked')
                ) {
                    jQuery('#CAPITOL6_R670').hide();
                    jQuery('#CAPITOL6_R680').hide();
                    jQuery('#CAPITOL6_R681').hide();
                    jQuery('#CAPITOL6_R682').hide();
                    jQuery('#CAPITOL6_R683').hide();
                    jQuery('#CAPITOL6_R684').hide();
                    
                    jQuery('#CAPITOL6_R681_C1').attr("checked", false); jQuery('#CAPITOL6_R681_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R682_C1').attr("checked", false); jQuery('#CAPITOL6_R682_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R683_C1').attr("checked", false); jQuery('#CAPITOL6_R683_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R684_C1').attr("checked", false); jQuery('#CAPITOL6_R684_C2').attr("checked", false);
                    document.getElementById("CAPITOL6_R670_C1").value = "";
                }
                else if (group == "CAPITOL6_R660_C1") {
                    jQuery('#CAPITOL6_R670').show(); jQuery('#CAPITOL6_R680').show(); jQuery('#CAPITOL6_R681').show(); jQuery('#CAPITOL6_R682').show();
                    jQuery('#CAPITOL6_R683').show(); jQuery('#CAPITOL6_R684').show();
                }


                    //750
                else if (group == "CAPITOL7_R750_C2") {
                    jQuery('#CAPITOL7_R750').hide();
                    jQuery('#CAPITOL7_R761').hide();
                    jQuery('#CAPITOL7_R762').hide();
                    jQuery('#CAPITOL7_R763').hide();
                    jQuery('#CAPITOL7_R764').hide();
                    jQuery('#CAPITOL7_R765').hide();
                    jQuery('#CAPITOL7_R766').hide();
                    jQuery('#CAPITOL7_R767').hide();
                    jQuery('#CAPITOL7_R768').hide();

                    jQuery('#CAPITOL7_R761_C1').attr("checked", false); jQuery('#CAPITOL7_R761_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R762_C1').attr("checked", false); jQuery('#CAPITOL7_R762_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R763_C1').attr("checked", false); jQuery('#CAPITOL7_R763_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R764_C1').attr("checked", false); jQuery('#CAPITOL7_R764_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R765_C1').attr("checked", false); jQuery('#CAPITOL7_R765_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R766_C1').attr("checked", false); jQuery('#CAPITOL7_R766_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R767_C1').attr("checked", false); jQuery('#CAPITOL7_R767_C2').attr("checked", false);
                    jQuery('#CAPITOL7_R768_C1').attr("checked", false); jQuery('#CAPITOL7_R768_C2').attr("checked", false);
                    
                }
                else if (group == "CAPITOL7_R750_C1") {
                    jQuery('#CAPITOL7_R750').show();
                    jQuery('#CAPITOL7_R761').show();
                    jQuery('#CAPITOL7_R761').show();
                    jQuery('#CAPITOL7_R762').show();
                    jQuery('#CAPITOL7_R763').show();
                    jQuery('#CAPITOL7_R764').show();
                    jQuery('#CAPITOL7_R765').show();
                    jQuery('#CAPITOL7_R766').show();
                    jQuery('#CAPITOL7_R767').show();
                    jQuery('#CAPITOL7_R768').show();
                }
                    //750


                else if (group == "CAPITOL8_R830_C2") {
                    jQuery('#CAPITOL8_R840').hide();
                    jQuery('#CAPITOL8_R840_C1').attr("checked", false);
                    jQuery('#CAPITOL8_R840_C2').attr("checked", false);
                }
                else if (group == "CAPITOL8_R830_C1") {
                    jQuery('#CAPITOL8_R840').show();

                }



                else if (group == "CAPITOL9_R910_C2") {
                    jQuery('#CAPITOL9_R920').hide();
                    jQuery('#CAPITOL9_R921').hide();
                    jQuery('#CAPITOL9_R922').hide();
                    jQuery('#CAPITOL9_R923').hide();
                    jQuery('#CAPITOL9_R924').hide();
                    jQuery('#CAPITOL9_R925').hide();
                    jQuery('#CAPITOL9_R926').hide();
                    jQuery('#CAPITOL9_R927').hide();
                    jQuery('#CAPITOL9_R930').hide();
                    jQuery('#CAPITOL9_R931').hide();
                    jQuery('#CAPITOL9_R932').hide();
                    jQuery('#CAPITOL9_R933').hide();
                    jQuery('#CAPITOL9_R941').hide();
                    jQuery('#CAPITOL9_R951').hide();
                    jQuery('#CAPITOL9_R961').hide();
                    jQuery('#CAPITOL9_R971').hide();
                    jQuery('#CAPITOL9_R921_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R921_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R922_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R922_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R923_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R923_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R924_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R924_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R925_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R925_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R926_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R926_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R927_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R927_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R931_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R931_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R932_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R932_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R933_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R933_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R941_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R941_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R951_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R951_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R961_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R961_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R971_C1').attr("checked", false);
                    jQuery('#CAPITOL9_R971_C1').attr("checked", false);




                }
                else if (group == "CAPITOL9_R910_C1") {
                    jQuery('#CAPITOL9_R920').show();
                    jQuery('#CAPITOL9_R921').show();
                    jQuery('#CAPITOL9_R922').show();
                    jQuery('#CAPITOL9_R923').show();
                    jQuery('#CAPITOL9_R924').show();
                    jQuery('#CAPITOL9_R925').show();
                    jQuery('#CAPITOL9_R926').show();
                    jQuery('#CAPITOL9_R927').show();
                    jQuery('#CAPITOL9_R930').show();
                    jQuery('#CAPITOL9_R931').show();
                    jQuery('#CAPITOL9_R932').show();
                    jQuery('#CAPITOL9_R933').show();
                    jQuery('#CAPITOL9_R941').show();
                    jQuery('#CAPITOL9_R951').show();
                    jQuery('#CAPITOL9_R961').show();
                    jQuery('#CAPITOL9_R971').show();
                }


                else if (jQuery('#CAPITOL6_R611_C2').is(':checked') && jQuery('#CAPITOL6_R612_C2').is(':checked')) {
                    jQuery('#CAPITOL6_R620').hide(); jQuery('#CAPITOL6_R630').hide(); jQuery('#CAPITOL6_R631').hide(); jQuery('#CAPITOL6_R632').hide(); jQuery('#CAPITOL6_R633').hide();
                    jQuery('#CAPITOL6_R640').hide(); jQuery('#CAPITOL6_R641').hide(); jQuery('#CAPITOL6_R642').hide(); jQuery('#CAPITOL6_R643').hide(); jQuery('#CAPITOL6_R650').hide();
                    jQuery('#CAPITOL6_R651').hide(); jQuery('#CAPITOL6_R652').hide(); jQuery('#CAPITOL6_R653').hide(); jQuery('#CAPITOL6_R654').hide();

                    document.getElementById("CAPITOL6_R620_C1").value = "";
                    document.getElementById("CAPITOL6_R631_C1").value = "";
                    document.getElementById("CAPITOL6_R632_C1").value = "";
                    document.getElementById("CAPITOL6_R633_C1").value = "";
                    document.getElementById("CAPITOL6_R641_C1").value = "";
                    document.getElementById("CAPITOL6_R642_C1").value = "";
                    document.getElementById("CAPITOL6_R643_C1").value = "";
                    jQuery('#CAPITOL6_R651_C1').attr("checked", false); jQuery('#CAPITOL6_R651_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R652_C1').attr("checked", false); jQuery('#CAPITOL6_R652_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R653_C1').attr("checked", false); jQuery('#CAPITOL6_R653_C2').attr("checked", false);
                    jQuery('#CAPITOL6_R654_C1').attr("checked", false); jQuery('#CAPITOL6_R654_C2').attr("checked", false);
                }
                else if (jQuery('#CAPITOL6_R611_C1').is(':checked') || jQuery('#CAPITOL6_R612_C1').is(':checked')) {
                    jQuery('#CAPITOL6_R620').show(); jQuery('#CAPITOL6_R630').show(); jQuery('#CAPITOL6_R631').show(); jQuery('#CAPITOL6_R632').show(); jQuery('#CAPITOL6_R633').show();
                    jQuery('#CAPITOL6_R640').show(); jQuery('#CAPITOL6_R641').show(); jQuery('#CAPITOL6_R642').show(); jQuery('#CAPITOL6_R643').show(); jQuery('#CAPITOL6_R650').show();
                    jQuery('#CAPITOL6_R651').show(); jQuery('#CAPITOL6_R652').show(); jQuery('#CAPITOL6_R653').show(); jQuery('#CAPITOL6_R654').show();
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
            jQuery('#CAPITOL5').show(); jQuery('#CAPITOL5_HEADER').show(); jQuery('#CAPITOL5_HEADER_NOTE').show();
            jQuery('#CAPITOL6').show(); jQuery('#CAPITOL6_HEADER').show(); jQuery('#CAPITOL6_HEADER_NOTE').show();
            jQuery('#CAPITOL7').show(); jQuery('#CAPITOL7_HEADER').show(); jQuery('#CAPITOL7_HEADER_NOTE').show();
        }
        else {
            jQuery('#CAPITOL5').hide(); jQuery('#CAPITOL5_HEADER').hide(); jQuery('#CAPITOL5_HEADER_NOTE').hide();
            jQuery('#CAPITOL6').hide(); jQuery('#CAPITOL6_HEADER').hide(); jQuery('#CAPITOL6_HEADER_NOTE').hide();
            jQuery('#CAPITOL7').hide(); jQuery('#CAPITOL7_HEADER').hide(); jQuery('#CAPITOL7_HEADER_NOTE').hide();
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

        if (jQuery('#CAPITOL1_R150_C1').is(':checked') && !(jQuery('#CAPITOL1_R170_C1').is(':checked') || jQuery('#CAPITOL1_R170_C2').is(':checked'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R170_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.4. Rind.150 este Da atunci Rind.170 trebuie sa fie DA sau NU')
            });
        }

        if (jQuery('#CAPITOL1_R170_C1').is(':checked') && !(jQuery('#CAPITOL1_R180_C1').is(':checked') || jQuery('#CAPITOL1_R180_C2').is(':checked'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R180_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.5. Rind.170 este Da atunci Rind.180 trebuie sa fie DA sau NU')
            });
        }


        if (jQuery('#CAPITOL1_R170_C2').is(':checked') && !(jQuery('#CAPITOL1_R180_C1').is(':checked') || jQuery('#CAPITOL1_R180_C2').is(':checked'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R180_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.5. Rind.170 este s atunci Rind.180 trebuie sa fie DA sau NU')
            });
        }

        if (values.CAPITOL1_R190_C1 == true && (values.CAPITOL1_R191_C1 == 0)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R191_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.6. Rind.190 este Da atunci Rind.191 > 0')
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


        var r190_c1 = 0;
        r190_c1 = Number(values.CAPITOL1_R190_C1);
        var r190_c2 = 0;
        r190_c2 = Number(values.CAPITOL1_R190_C2);

        var r192_c1 = 0;
        r192_c1 = Number(values.CAPITOL1_R192_C1);
        var r192_c2 = 0;
        r192_c2 = Number(values.CAPITOL1_R192_C2);

        var r193_c1 = 0;
        r193_c1 = Number(values.CAPITOL1_R193_C1);
        var r193_c2 = 0;
        r193_c2 = Number(values.CAPITOL1_R193_C2);


        var r194_c1 = 0;
        r194_c1 = Number(values.CAPITOL1_R194_C1);
        var r194_c2 = 0;
        r194_c2 = Number(values.CAPITOL1_R194_C2);

        var r195_c1 = 0;
        r195_c1 = Number(values.CAPITOL1_R195_C1);
        var r195_c2 = 0;
        r195_c2 = Number(values.CAPITOL1_R195_C2);
        

        var sum190_195 = r190_c1 + r190_c2 + r192_c1 + r192_c2 + r193_c1 + r193_c2 + r194_c1 + r194_c2 + r195_c1 + r195_c2;
        
        if (values.CAPITOL1_R180_C1 == true  && (sum190_195 !== 5)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R190_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.14 Daca exista CAP 1 rind 180 DA exista   randurile  190,192,193,194,195')
            });
        }


        // if (values.CAPITOL1_R130_C1 == true && values.CAPITOL8_R830_C2 == true && (sum810_852 !== 6)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL1_R130_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
        //     });
        // }

        // if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL8_R830_C2 == false && values.CAPITOL8_R830_C1 == false) && (sum810_852 !== 7)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL1_R130_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
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

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R221_C1 == true || values.CAPITOL2_R221_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R221_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.10. Rind.130 este Da atunci Rind.221 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R222_C1 == true || values.CAPITOL2_R222_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R222_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.11. Rind.130 este Da atunci Rind.222 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R223_C1 == true || values.CAPITOL2_R223_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R223_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.12. Rind.130 este Da atunci Rind.223 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R224_C1 == true || values.CAPITOL2_R224_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R224_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.13. Rind.130 este Da atunci Rind.224 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL2_R230_C1 == true || values.CAPITOL2_R230_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL2_R230_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.13.1 Rind.130 este Da atunci Rind.230 trebuie sa fie selectat DA sau NU')
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

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R416_C1 == true || values.CAPITOL4_R416_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R416_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.30. Rind.130 este Da atunci Rind.416 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R417_C1 == true || values.CAPITOL4_R417_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R417_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.31. Rind.130 este Da atunci Rind.417 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R418_C1 == true || values.CAPITOL4_R418_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R418_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.32. Rind.130 este Da atunci Rind.418 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R419_C1 == true || values.CAPITOL4_R419_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R419_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.33. Rind.130 este Da atunci Rind.419 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R420_C1 == true || values.CAPITOL4_R420_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R420_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.34. Rind.130 este Da atunci Rind.420 trebuie sa fie selectat DA sau NU')
            });
        }

        // if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R430_C1 == true || values.CAPITOL4_R430_C2 == true)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL4_R430_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-001.35. Rind.130 este Da atunci Rind.430 trebuie sa fie selectat DA sau NU')
        //     });
        // }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R421_C1 == true || values.CAPITOL4_R421_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R421_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.36. Rind.130 este Da atunci Rind.421 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R422_C1 == true || values.CAPITOL4_R422_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R422_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.37. Rind.130 este Da atunci Rind.422 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R423_C1 == true || values.CAPITOL4_R423_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R423_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.39. Rind.130 este Da atunci Rind.423 trebuie sa fie selectat DA sau NU')
            });
        }
        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R424_C1 == true || values.CAPITOL4_R424_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R424_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.40. Rind.130 este Da atunci Rind.424 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R425_C1 == true || values.CAPITOL4_R425_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R425_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.41. Rind.130 este Da atunci Rind.425 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R426_C1 == true || values.CAPITOL4_R426_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R426_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.42. Rind.130 este Da atunci Rind.426 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R431_C1 == true || values.CAPITOL4_R431_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R431_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.42.1 Rind.130 este Da atunci Rind.431 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R432_C1 == true || values.CAPITOL4_R431_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R432_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.42.2 Rind.130 este Da atunci Rind.432 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R433_C1 == true || values.CAPITOL4_R433_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R433_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.42.3 Rind.130 este Da atunci Rind.433 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL4_R440_C1 == true || values.CAPITOL4_R440_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL4_R440_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.42.4 Rind.130 este Da atunci Rind.440 trebuie sa fie selectat DA sau NU')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R511_C1 == true || values.CAPITOL5_R511_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {

            var caem = values.CAEM.substr(0, 1);
            webform.errors.push({
                'fieldName': 'CAPITOL5_R511_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.39. Rind.130 este Da atunci Rind.511 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R512_C1 == true || values.CAPITOL5_R512_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R512_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.40. Rind.130 este Da atunci Rind.512 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R513_C1 == true || values.CAPITOL5_R513_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R513_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.41. Rind.130 este Da atunci Rind.513 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R514_C1 == true || values.CAPITOL5_R514_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R514_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.42. Rind.130 este Da atunci Rind.514 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R515_C1 == true || values.CAPITOL5_R515_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R515_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.43. Rind.130 este Da atunci Rind.515 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL6_R611_C1 == true || values.CAPITOL6_R611_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R611_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.44. Rind.130 este Da atunci Rind.611 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL6_R612_C1 == true || values.CAPITOL6_R612_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R612_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.45. Rind.130 este Da atunci Rind.612 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && values.CAPITOL6_R620_C1 <= 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R620_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.46. Rind.611 este Da atunci Rind.620 > 0')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && values.CAPITOL6_R620_C1 <= 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R620_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.47. Rind.612 este Da atunci Rind.620 > 0')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && !(values.CAPITOL6_R631_C1 > 0 && values.CAPITOL6_R631_C1 <= 100)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R631_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.48-49. Rind.611 este Da atunci Rind.631 apartine intervalului [0-100]')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R632_C1 > 0 && values.CAPITOL6_R632_C1 <= 100)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R632_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.50-51. Rind.612 este Da atunci Rind.632 apartine intervalului [0-100]')
            });
        }

        if ((values.CAPITOL6_R611_C1 == true || values.CAPITOL6_R612_C1 == true) && values.CAPITOL6_R633_C1 != 100) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R633_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.52. Rind.611 este Da atunci Rind.633 = 100')
            });
        }

        if ((values.CAPITOL6_R611_C1 == true || values.CAPITOL6_R612_C1 == true) && values.CAPITOL6_R643_C1 != 100) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R643_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.53. Rind.611 este Da atunci Rind.643 = 100')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && values.CAPITOL6_R643_C1 != 100) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R643_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.53-54. Rind.611 este Da atunci Rind.643 apartine intervalului [0-100]')
            });
        }
        /*
        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R642_C1 > 0 && values.CAPITOL6_R642_C1 < 100)) {
          webform.errors.push({
            'fieldName': 'CAPITOL6_R642_C1',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-001.55-56. Rind.612 este Da atunci Rind.642 apartine intervalului [0-100]')
          });
        }
        */


        var r651_c1 = 0;
        r651_c1 = Number(values.CAPITOL6_R651_C1);
        var r651_c2 = 0;
        r651_c2 = Number(values.CAPITOL6_R651_C2);

        var r652_c1 = 0;
        r652_c1 = Number(values.CAPITOL6_R652_C1);
        var r652_c2 = 0;
        r652_c2 = Number(values.CAPITOL6_R652_C2);
   
        var r653_c1 = 0;
        r653_c1 = Number(values.CAPITOL6_R653_C1);
        var r653_c2 = 0;
        r653_c2 = Number(values.CAPITOL6_R653_C2);

        var r654_c1 = 0;
        r654_c1 = Number(values.CAPITOL6_R654_C1);
        var r654_c2 = 0;
        r654_c2 = Number(values.CAPITOL6_R654_C2);


        var sum651_654 = r651_c1 + r651_c2 + r652_c1 + r652_c2 + r653_c1 + r653_c2 + r654_c1 + r654_c2;

        if (values.CAPITOL6_R611_C1 == true && (sum651_654 !== 4)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R611_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018.61 Rind.611 este Da atunci unul din Rind.651,652,653,654 trebuie sa fie selectat  ')
            });
        }

        // if (values.CAPITOL7_R750_C1 == false && (sum761_68 === 8)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL7_R750_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-018. Daca este rind 750 DA atunci sunt 761,762,763,764,765,766,767,768 si invers ')
        //     });
        // }



        if (values.CAPITOL6_R611_C1 == true && (values.CAPITOL6_R651_C1 == false && values.CAPITOL6_R652_C1 == false && values.CAPITOL6_R653_C1 == false &&
            values.CAPITOL6_R654_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R651_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.58. Rind.611 este Da atunci unul din Rind.651,652,653,654 trebuie sa fie selectat DA')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && (values.CAPITOL6_R651_C1 == false && values.CAPITOL6_R652_C1 == false && values.CAPITOL6_R653_C1 == false &&
            values.CAPITOL6_R654_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R651_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.59. Rind.612 este Da atunci unul din Rind.651,652,653,654 trebuie sa fie selectat DA')
            });
        }

        if (values.CAPITOL6_R660_C1 == true && values.CAPITOL6_R670_C1 <= 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R670_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.60. Rind.660 este Da atunci Rind.670 > 0')
            });
        }

        if (values.CAPITOL6_R660_C1 == true && (values.CAPITOL6_R681_C1 == false && values.CAPITOL6_R682_C1 == false && values.CAPITOL6_R683_C1 == false &&
            values.CAPITOL6_R684_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R681_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.61. Rind.660 este Da atunci unul din Rind.681,682,683,684 trebuie sa fie selectat DA')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL7_R710_C1 == true || values.CAPITOL7_R710_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL7_R710_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.62. Rind.130 este Da atunci Rind.710 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL7_R721_C1 == true || values.CAPITOL7_R721_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL7_R721_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.63. Rind.130 este Da atunci Rind.721 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL7_R722_C1 == true || values.CAPITOL7_R722_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL7_R722_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.64. Rind.130 este Da atunci Rind.722 trebuie sa fie selectat DA sau NU')
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

        var r181 = toFloat(values.CAPITOL1_R181_C1);
        if (r181 > r120) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R181_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.66. Rind.181 > Rind 120 (dar trebuie sa fie <=)')
            });
        }

        var r110 = toFloat(values.CAPITOL1_R110_C1);
        var r111 = toFloat(values.CAPITOL1_R111_C1);
        var r112 = toFloat(values.CAPITOL1_R112_C1);
        var r113 = toFloat(values.CAPITOL1_R113_C1);
        if (r112 == 0 && r113 == 0 && r181 != 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R181_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.67. Rind.112 = 0 si Rind.113 = 0 si Rind 181 > 0 (dar Rind.181 trebuie sa fie 0)')
            });
        }

        //var r181 = toFloat(values.CAPITOL1_R181_C1);
        if (r181 > r141) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R181_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.68. Rind.181 > Rind 141 (dar trebuie sa fie <=)')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL6_R660_C1 == true || values.CAPITOL6_R660_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R660_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.69. Rind.130 este Da atunci Rind.660 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && !(values.CAPITOL6_R651_C1 == true || values.CAPITOL6_R651_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R651_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.70. Rind.611 este Da atunci Rind.651 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && !(values.CAPITOL6_R652_C1 == true || values.CAPITOL6_R652_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R652_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.71. Rind.611 este Da atunci Rind.652 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && !(values.CAPITOL6_R653_C1 == true || values.CAPITOL6_R653_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R653_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.72. Rind.611 este Da atunci Rind.653 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && !(values.CAPITOL6_R654_C1 == true || values.CAPITOL6_R654_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R654_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.73. Rind.611 este Da atunci Rind.654 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R651_C1 == true || values.CAPITOL6_R651_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R651_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.74. Rind.611 este Da atunci Rind.651 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R652_C1 == true || values.CAPITOL6_R652_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R652_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.75. Rind.611 este Da atunci Rind.652 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R653_C1 == true || values.CAPITOL6_R653_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R653_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.76. Rind.611 este Da atunci Rind.653 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R654_C1 == true || values.CAPITOL6_R654_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R654_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.77. Rind.611 este Da atunci Rind.654 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R660_C1 == true && !(values.CAPITOL6_R681_C1 == true || values.CAPITOL6_R681_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R681_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.78. Rind.660 este Da atunci Rind.681 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R660_C1 == true && !(values.CAPITOL6_R682_C1 == true || values.CAPITOL6_R682_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R682_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.79. Rind.660 este Da atunci Rind.682 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R660_C1 == true && !(values.CAPITOL6_R683_C1 == true || values.CAPITOL6_R683_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R683_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.80. Rind.660 este Da atunci Rind.683 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R660_C1 == true && !(values.CAPITOL6_R684_C1 == true || values.CAPITOL6_R684_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R684_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.81. Rind.660 este Da atunci Rind.684 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && !(values.CAPITOL5_R520_C1 == true || values.CAPITOL5_R520_C2 == true) && (caemFill.indexOf(values.CAEM.substr(0, 1)) !== -1 && !(values.CAEM.substr(0, 4) == 'S951'))) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R520_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.82. Rind.130 este Da atunci Rind.520 trebuie sa fie selectat DA sau NU')
            });
        }

        if (values.CAPITOL6_R611_C1 == true && !(values.CAPITOL6_R631_C1 > 0)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R631_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.83. Rind.611 este Da atunci Rind.631 > 0')
            });
        }

        if (values.CAPITOL6_R612_C1 == true && !(values.CAPITOL6_R632_C1 > 0)) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R632_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.84. Rind.612 este Da atunci unul din Rind.632 > 0')
            });
        }

        if (values.CAPITOL6_R611_C2 == true && values.CAPITOL6_R631_C1 > 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R631_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.85. Rind.611 este NU atunci Rind.631 = 0')
            });
        }

        if (values.CAPITOL6_R612_C2 == true && values.CAPITOL6_R632_C1 > 0) {
            webform.errors.push({
                'fieldName': 'CAPITOL6_R632_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.86. Rind.612 este NU atunci unul din Rind.632 = 0')
            });
        }

        /*if (values.CAPITOL1_R140_C2 == true && values.CAPITOL1_R170_C2 == false ) {
          webform.errors.push({
            'fieldName': 'CAPITOL1_R170_C2',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-001.87. Rind.140 este NU atunci Rind.170 trebuie sa fie NU')
          });
        }*/

        /*if (!(caemFill.indexOf(values.CAEM.substr(0,1)) && !(values.CAEM.substr(0,4) == 'S951'))) {
          webform.errors.push({
            'fieldName': 'CAPITOL1_R110_C1',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-003. Capitolul 5,6,7 nu trebuie completat')
          });
        }*/
        var r900  = 0;
        r900 = toFloat(values.CAPITOL10_R900_C1);
        if ((values.CAPITOL10_R900_C1 == false || r900 > 600)) {
            webform.errors.push({
                'fieldName': 'CAPITOL10_R900_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-001.88. Rind.900 trebuie sa apartina intervalului 1-600')
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

        // if ((r112 > 0 || r113 > 0) && r181 == 0) {
        //     webform.warnings.push({
        //         'fieldName': 'CAPITOL1_R181_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-002.04. Rind.112 sau 113 > 0 atunci Rind 181 = 0 (dar trebuie sa fie > 0)')
        //     });
        // }

        /*if (!(values.CAPITOL7_R900_C1 > 0 && values.CAPITOL7_R900_C1 < 600)) {
          webform.warnings.push({
            'fieldName': 'CAPITOL7_R900_C1',
            'index': 0,
            'msg': Drupal.t('Cod eroare: 71-002.05-06. Rind.900 trebuie sa apartina intervalului 0-600')
          });
        }*/

        if (values.CAPITOL3_R310_C1 == true && (values.CAPITOL3_R321_C1 == false && values.CAPITOL3_R322_C1 == false && values.CAPITOL3_R323_C1 == false &&
            values.CAPITOL3_R324_C1 == false && values.CAPITOL3_R325_C1 == false && values.CAPITOL3_R326_C1 == false && values.CAPITOL3_R327_C1 == false &&
            values.CAPITOL3_R328_C1 == false && values.CAPITOL3_R329_C1 == false && values.CAPITOL3_R330_C1 == false)) {
            webform.warnings.push({
                'fieldName': 'CAPITOL3_R310_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.07. Rind.310 ati selectat DA dar Rind.321,322,323,324,325,326,327,328,329,330 nu aveti nici un DA')
            });
        }

        if (r110 == 0 && r111 == 0 && r112 == 0 && r113 == 0 && (r120 > 0 || r141 > 0 || r181 > 0)) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R110_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.08. Rind.110,111,112,113 = 0 atunci Rind.120,141,181 trebuie sa fie 0')
            });
        }

        if ((r111 > 0 || r112 > 0) && r120 == 0) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R120_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.09. Rind.111 sau 112 > 0 atunci Rind 120 = 0 (dar trebuie sa fie > 0)')
            });
        }

        if (values.CAPITOL1_R140_C2 == true && values.CAPITOL1_R170_C2 == false) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R170_C2',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.10. Rind.140 ati selectat NU atunci Rind 170 trebuie sa fie NU')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL1_R150_C1 == false && values.CAPITOL1_R170_C1 == false)) {
            webform.warnings.push({
                'fieldName': 'CAPITOL1_R150_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-002.11. Rind.130 ati selectat DA atunci unul din Rind 150,170 trebuie sa fie DA')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL1_R111_C1 == false && values.CAPITOL1_R113_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R111_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-015. Rind.130 ati selectat DA atunci unul din Rind 111,113 trebuie sa fie DA')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL1_R111_C1 == false && values.CAPITOL1_R113_C1 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R113_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-015. Rind.130 ati selectat DA atunci unul din Rind 111,113 trebuie sa fie DA')
            });
        }
       


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


        var r750_c1 = 0;
        r750_c1  = Number(values.CAPITOL7_R750_C1);

        var r750_c2 = 0;
        r750_c2 = Number(values.CAPITOL7_R750_C2);
        
        
        
        var r761_c1  = 0;
        r761_c1  = Number(values.CAPITOL7_R761_C1);
        var r761_c2 = 0;
        r761_c2 = Number(values.CAPITOL7_R761_C2);
        
        var r762_c1 = 0;
        r762_c1 = Number(values.CAPITOL7_R762_C1);
        var r762_c2 = 0;
        r762_c2 = Number(values.CAPITOL7_R762_C2);

        var r763_c1 = 0;
        r763_c1 = Number(values.CAPITOL7_R763_C1);
        var r763_c2 = 0;
        r763_c2 = Number(values.CAPITOL7_R763_C2);

        var r764_c1 = 0;
        r764_c1 = Number(values.CAPITOL7_R764_C1);
        var r764_c2 = 0;
        r764_c2 = Number(values.CAPITOL7_R764_C2);


        var r765_c1 = 0;
        r765_c1 = Number(values.CAPITOL7_R765_C1);
        var r765_c2 = 0;
        r765_c2 = Number(values.CAPITOL7_R765_C2);

        var r766_c1 = 0;
        r766_c1 = Number(values.CAPITOL7_R766_C1);
        var r766_c2 = 0;
        r766_c2 = Number(values.CAPITOL7_R766_C2);

        var r767_c1 = 0;
        r767_c1 = Number(values.CAPITOL7_R767_C1);
        var r767_c2 = 0;
        r767_c2 = Number(values.CAPITOL7_R767_C2);

        var r768_c1 = 0;
        r768_c1 = Number(values.CAPITOL7_R768_C1);
        var r768_c2 = 0;
        r768_c2 = Number(values.CAPITOL7_R768_C2);

        var r770_c1 = 0;
        r770_c1 = Number(values.CAPITOL7_R770_C1);
        var r770_c2 = 0;
        r770_c2 = Number(values.CAPITOL7_R770_C2);

        var sum761_68 = r761_c1 + r761_c2 + r762_c1 + r762_c2 + r763_c1 + r763_c2 + r764_c1 + r764_c2 
            + r765_c1 + r765_c2 + r766_c1 + r766_c2 + r767_c1 + r767_c2 + r768_c1 + r768_c2;

            

        var sum710_750 = r710_c1 + r710_c2 + r721_c1 + r721_c2 + r722_c1 + r722_c2 + r730_c1 + r730_c2 + r740_c1 + r740_c2 + r750_c1 + r750_c2 + r770_c1 + r770_c2;


        if (values.CAPITOL1_R130_C1 == true && (sum710_750 !== 7)) {
            webform.errors.push({
                'fieldName': 'CAPITOL7_R761_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018.17 Daca este rind 130 DA atunci sunt 710,721,722,730,740,750,770  ')
            });
        }

        if (values.CAPITOL7_R750_C1 == true && (sum761_68 !== 8)) {
            webform.errors.push({
                'fieldName': 'CAPITOL7_R761_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018. Daca este rind 750 DA atunci sunt 761,762,763,764,765,766,767,768 si invers ')
            });
        }

        if (values.CAPITOL7_R750_C1 == false && (sum761_68 === 8)) {
            webform.errors.push({
                'fieldName': 'CAPITOL7_R750_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-018. Daca este rind 750 DA atunci sunt 761,762,763,764,765,766,767,768 si invers ')
            });
        }

// Capitol 5 
        var r510_c1 = 0;
        r510_c1 = Number(values.CAPITOL5_R510_C1);

        var r511_c1 = 0;
        r511_c1 = Number(values.CAPITOL5_R511_C1);
        var r511_c2 = 0;
        r511_c2 = Number(values.CAPITOL5_R511_C2);
        
        var r512_c1 = 0;
        r512_c1 = Number(values.CAPITOL5_R512_C1);
        var r512_c2 = 0;
        r512_c2 = Number(values.CAPITOL5_R512_C2);

        var r513_c1 = 0;
        r513_c1 = Number(values.CAPITOL5_R513_C1);
        var r513_c2 = 0;
        r513_c2 = Number(values.CAPITOL5_R513_C2);


        var r514_c1 = 0;
        r514_c1 = Number(values.CAPITOL5_R514_C1);
        var r514_c2 = 0;
        r514_c2 = Number(values.CAPITOL5_R514_C2);

        var r515_c1 = 0;
        r515_c1 = Number(values.CAPITOL5_R515_C1);
        var r515_c2 = 0;
        r515_c2 = Number(values.CAPITOL5_R515_C2);

        var sum511_515 = r511_c1 + r511_c2 + r512_c1 + r512_c2 + r513_c1 + r513_c2 + r514_c1 + r514_c2
            + r515_c1 + r515_c2; 

        if (values.CAPITOL5_R510_C1 == true && (sum511_515 !== 5)) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R510_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-017. Daca este rind 510 DA atunci sunt toate randirile din CAP 5 si invers ')
            });
        }

        if (values.CAPITOL5_R510_C1 == false && (sum511_515 === 5)) {
            webform.errors.push({
                'fieldName': 'CAPITOL5_R510_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-017. Daca este rind 510 DA atunci sunt toate randirile din CAP 5 si invers ')
            });
        }


// Capitol 5

// Capitol 8
   

        var r810_c1 = 0;
        r810_c1 = Number(values.CAPITOL8_R810_C1);
        var r810_c2 = 0;
        r810_c2 = Number(values.CAPITOL8_R810_C2);

        var r821_c1 = 0;
        r821_c1 = Number(values.CAPITOL8_R821_C1);
        var r821_c2 = 0;
        r821_c2 = Number(values.CAPITOL8_R821_C2);

        var r822_c1 = 0;
        r822_c1 = Number(values.CAPITOL8_R822_C1);
        var r822_c2 = 0;
        r822_c2 = Number(values.CAPITOL8_R822_C2);

        var r830_c1 = 0;
        r830_c1 = Number(values.CAPITOL8_R830_C1);
        var r830_c2 = 0;
        r830_c2 = Number(values.CAPITOL8_R830_C2);


        var r840_c1 = 0;
        r840_c1 = Number(values.CAPITOL8_R840_C1);
        var r840_c2 = 0;
        r840_c2 = Number(values.CAPITOL8_R840_C2);

        var r851_c1 = 0;
        r851_c1 = Number(values.CAPITOL8_R851_C1);
        var r851_c2 = 0;
        r851_c2 = Number(values.CAPITOL8_R851_C2);


        var r852_c1 = 0;
        r852_c1 = Number(values.CAPITOL8_R852_C1);
        var r852_c2 = 0;
        r852_c2 = Number(values.CAPITOL8_R852_C2);

        var sum810_852 = r810_c1 + r810_c2 + r821_c1 + r821_c2 + r822_c1 + r822_c2 + r830_c1 + r830_c2 + r840_c1 + r840_c2 + 
            r851_c1 + r851_c2 + r852_c1 + r852_c2;

        if (values.CAPITOL1_R130_C1 == true && values.CAPITOL8_R830_C1 == true && (sum810_852 !== 7)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
            });
        }


        if (values.CAPITOL1_R130_C1 == true && values.CAPITOL8_R830_C2 == true && (sum810_852 !== 6)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL8_R830_C2 == false && values.CAPITOL8_R830_C1 == false)  && (sum810_852 !== 7)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
            });
        }
        

        // if (values.CAPITOL1_R130_C1 == false && (sum810_852 === 7)) {
        //     webform.errors.push({
        //         'fieldName': 'CAPITOL1_R130_C1',
        //         'index': 0,
        //         'msg': Drupal.t('Cod eroare: 71-019. Daca exista CAP 1 rind 130 DA exista CAP 8 toate randurile  si invers ')
        //     });
        // }
// Capitol 8


// Capitol 9


        var r922_c1 = 0;
        r922_c1 = Number(values.CAPITOL9_R922_C1);
        var r922_c2 = 0;
        r922_c2 = Number(values.CAPITOL9_R922_C2);

        var r923_c1 = 0;
        r923_c1 = Number(values.CAPITOL9_R923_C1);
        var r923_c2 = 0;
        r923_c2 = Number(values.CAPITOL9_R923_C2);

        var r924_c1 = 0;
        r924_c1 = Number(values.CAPITOL9_R924_C1);
        var r924_c2 = 0;
        r924_c2 = Number(values.CAPITOL9_R924_C2);


        var r925_c1 = 0;
        r925_c1 = Number(values.CAPITOL9_R925_C1);
        var r925_c2 = 0;
        r925_c2 = Number(values.CAPITOL9_R925_C2);


        var r926_c1 = 0;
        r926_c1 = Number(values.CAPITOL9_R926_C1);
        var r926_c2 = 0;
        r926_c2 = Number(values.CAPITOL9_R926_C2);


        var r927_c1 = 0;
        r927_c1 = Number(values.CAPITOL9_R927_C1);
        var r927_c2 = 0;
        r927_c2 = Number(values.CAPITOL9_R927_C2);


        var r931_c1 = 0;
        r931_c1 = Number(values.CAPITOL9_R931_C1);
        var r931_c2 = 0;
        r931_c2 = Number(values.CAPITOL9_R931_C2);


        var r932_c1 = 0;
        r932_c1 = Number(values.CAPITOL9_R932_C1);
        var r932_c2 = 0;
        r932_c2 = Number(values.CAPITOL9_R932_C2);


        var r933_c1 = 0;
        r933_c1 = Number(values.CAPITOL9_R933_C1);
        var r933_c2 = 0;
        r933_c2 = Number(values.CAPITOL9_R933_C2);

        var r941_c1 = 0;
        r941_c1 = Number(values.CAPITOL9_R941_C1);
        var r941_c2 = 0;
        r941_c2 = Number(values.CAPITOL9_R941_C2);



        var r951_c1 = 0;
        r951_c1 = Number(values.CAPITOL9_R951_C1);
        var r951_c2 = 0;
        r951_c2 = Number(values.CAPITOL9_R951_C2);


        var r961_c1 = 0;
        r961_c1 = Number(values.CAPITOL9_R961_C1);
        var r961_c2 = 0;
        r961_c2 = Number(values.CAPITOL9_R961_C2);


        var r971_c1 = 0;
        r971_c1 = Number(values.CAPITOL9_R971_C1);
        var r971_c2 = 0;
        r971_c2 = Number(values.CAPITOL9_R971_C2);



        var sum922_971 = r922_c1 + r922_c2 + r923_c1 + r923_c2 + r924_c1 + r924_c2 + r925_c1 + r925_c2 + r926_c1 + r926_c2 + r927_c1 + r927_c2 +
            r931_c1 + r931_c2 + r932_c1 + r932_c2 + r933_c1 + r933_c2 + r941_c1 + r941_c2 + r951_c1 + r951_c2 + r961_c1 + r961_c2 + r971_c1 + r971_c2;
            

        if (values.CAPITOL9_R910_C1 == true && (sum922_971 !== 13)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.1 Daca exista CAP 9 rind 910 DA exista CAP 9 toate randurile  si invers ')
            });
        }

        if (values.CAPITOL9_R910_C2 == false && values.CAPITOL9_R910_C1 == false && (sum922_971 === 13)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.1 Daca exista CAP 9 rind 910 DA exista CAP 9 toate randurile  si invers ')
            });
        }

// Capitol 9 


        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL9_R910_C1 == false && values.CAPITOL9_R910_C2 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca este  Rind.130  DA atunci este   Rind.910 si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == true && (values.CAPITOL9_R910_C1 == false && values.CAPITOL9_R910_C2 == false)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C2',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca este  Rind.130  DA atunci este   Rind.910 si invers')
            });
        }

        if (values.CAPITOL1_R130_C1 == false && (values.CAPITOL9_R910_C1 == true || values.CAPITOL9_R910_C2 == true)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca este  Rind.130  DA atunci este   Rind.910 si invers')
            });
        }

        // Capitol 10

        var r980_c1 = 0;
        r980_c1 = Number(values.CAPITOL10_R980_C1);
        var r980_c2 = 0;
        r980_c2 = Number(values.CAPITOL10_R980_C2);


        var r981_c1 = 0;
        r981_c1 = Number(values.CAPITOL10_R981_C1);
        var r981_c2 = 0;
        r981_c2 = Number(values.CAPITOL10_R981_C2);

        var r982_c1 = 0;
        r982_c1 = Number(values.CAPITOL10_R982_C1);
        var r982_c2 = 0;
        r982_c2 = Number(values.CAPITOL10_R982_C2);



        var r983_c1 = 0;
        r983_c1 = Number(values.CAPITOL10_R983_C1);
        var r983_c2 = 0;
        r983_c2 = Number(values.CAPITOL10_R983_C2);


        var sum980_983 = r980_c1 + r980_c2 + r981_c1 + r981_c2 + r982_c1 + r982_c2 + r983_c1 + r983_c2; 


        if (values.CAPITOL1_R130_C1 == true && (sum980_983 !== 4)) {
            webform.errors.push({
                'fieldName': 'CAPITOL9_R910_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca exista  rind 130 DA exista CAP 10 toate randurile  si invers  ')
            });
        }

        if (values.CAPITOL1_R130_C1 == false && (sum980_983 === 4)) {
            webform.errors.push({
                'fieldName': 'CAPITOL1_R130_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 71-019.2 Daca exista  rind 130 DA exista CAP 10 toate randurile  si invers ')
            });
        }

        // Capitol 10 


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