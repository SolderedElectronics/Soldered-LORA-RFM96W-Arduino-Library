/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "LoRa RFM96W Arduino library", "index.html", [
    [ "Radio Driver parameters", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html", [
      [ "Repository Contents", "index.html#autotoc_md1", null ],
      [ "Hardware design", "index.html#autotoc_md2", null ],
      [ "Documentation", "index.html#autotoc_md3", null ],
      [ "About Soldered", "index.html#autotoc_md4", null ],
      [ "Original source", "index.html#autotoc_md5", null ],
      [ "Open-source license", "index.html#autotoc_md6", null ],
      [ "Radio Driver Operation", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md8", [
        [ "<tt>os_radio(RADIO_RST)</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md9", null ],
        [ "<tt>os_radio(RADIO_TX)</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md10", null ],
        [ "<tt>os_radio(RADIO_RX)</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md11", null ],
        [ "<tt>os_radio(RADIO_RXON)</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md12", null ],
        [ "<tt>os_radio(RADIO_TX_AT)</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md13", null ]
      ] ],
      [ "Common parameters", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md14", [
        [ "<tt>LMIC.rps</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md15", null ],
        [ "<tt>LMIC.freq</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md16", null ],
        [ "<tt>LMIC.saveIrqFlags</tt> (OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md17", null ],
        [ "<tt>LMIC.osjob</tt> (IN/OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md18", null ]
      ] ],
      [ "Transmit parameters", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md19", [
        [ "<tt>LMIC.radio_txpow</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md20", null ],
        [ "<tt>LMIC.frame[]</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md21", null ],
        [ "<tt>LMIC.datalen</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md22", null ],
        [ "<tt>LMIC.txend</tt> (IN, OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md23", null ]
      ] ],
      [ "Receive parameters", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md24", [
        [ "<tt>LMIC.frame[]</tt> (OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md25", null ],
        [ "<tt>LMIC.datalen</tt> (OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md26", null ],
        [ "<tt>LMIC.rxtime</tt> (IN/OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md27", null ],
        [ "<tt>LMIC.lbt_ticks</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md28", null ],
        [ "<tt>LMIC.lbt_dbmax</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md29", null ],
        [ "<tt>LMIC.rxsyms</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md30", null ],
        [ "<tt>LMIC.noRXIQinversion</tt> (IN)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md31", null ],
        [ "<tt>LMIC.snr</tt> (OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md32", null ],
        [ "<tt>LMIC.rssi</tt> (OUT)", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md33", null ]
      ] ]
    ] ],
    [ "Adding a new region to Arduino LMIC", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html", [
      [ "Planning", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md41", [
        [ "Determine the region/region category", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md42", null ],
        [ "Check whether the region is already listed in <tt>lmic_config_preconditions.h</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md43", null ]
      ] ],
      [ "Make the appropriate changes in <tt>lmic_config_preconditions.h</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md44", null ],
      [ "Document your region in <tt>README.md</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md45", null ],
      [ "Add the definitions for your region in <tt>lorabase.h</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md46", null ],
      [ "Edit <tt>lmic_bandplan.h</tt>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md47", null ],
      [ "Create <code>lmic_<em>newregion</em>.c</code>", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md48", null ],
      [ "General Discussion", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md49", null ],
      [ "Adding the region to the Arduino_LoRaWAN library", "md_src_libs__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md50", null ]
    ] ],
    [ "Radio Driver parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html", [
      [ "Radio Driver Operation", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md127", [
        [ "<tt>os_radio(RADIO_RST)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md128", null ],
        [ "<tt>os_radio(RADIO_TX)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md129", null ],
        [ "<tt>os_radio(RADIO_RX)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md130", null ],
        [ "<tt>os_radio(RADIO_RXON)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md131", null ],
        [ "<tt>os_radio(RADIO_TX_AT)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md132", null ]
      ] ],
      [ "Common parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md133", [
        [ "<tt>LMIC.rps</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md134", null ],
        [ "<tt>LMIC.freq</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md135", null ],
        [ "<tt>LMIC.saveIrqFlags</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md136", null ],
        [ "<tt>LMIC.osjob</tt> (IN/OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md137", null ]
      ] ],
      [ "Transmit parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md138", [
        [ "<tt>LMIC.radio_txpow</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md139", null ],
        [ "<tt>LMIC.frame[]</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md140", null ],
        [ "<tt>LMIC.datalen</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md141", null ],
        [ "<tt>LMIC.txend</tt> (IN, OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md142", null ]
      ] ],
      [ "Receive parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md143", [
        [ "<tt>LMIC.frame[]</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md144", null ],
        [ "<tt>LMIC.datalen</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md145", null ],
        [ "<tt>LMIC.rxtime</tt> (IN/OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md146", null ],
        [ "<tt>LMIC.lbt_ticks</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md147", null ],
        [ "<tt>LMIC.lbt_dbmax</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md148", null ],
        [ "<tt>LMIC.rxsyms</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md149", null ],
        [ "<tt>LMIC.noRXIQinversion</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md150", null ],
        [ "<tt>LMIC.snr</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md151", null ],
        [ "<tt>LMIC.rssi</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md152", null ]
      ] ]
    ] ],
    [ "Adding a new region to Arduino LMIC", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html", [
      [ "Planning", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md160", [
        [ "Determine the region/region category", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md161", null ],
        [ "Check whether the region is already listed in <tt>lmic_config_preconditions.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md162", null ]
      ] ],
      [ "Make the appropriate changes in <tt>lmic_config_preconditions.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md163", null ],
      [ "Document your region in <tt>README.md</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md164", null ],
      [ "Add the definitions for your region in <tt>lorabase.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md165", null ],
      [ "Edit <tt>lmic_bandplan.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md166", null ],
      [ "Create <code>lmic_<em>newregion</em>.c</code>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md167", null ],
      [ "General Discussion", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md168", null ],
      [ "Adding the region to the Arduino_LoRaWAN library", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md169", null ]
    ] ],
    [ "Bug List", "bug.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_lo_ra-_s_o_l_d_e_r_e_d_8cpp.html",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic_8c.html#a3f56ffafc422d0d8b7f74750d834fdd8",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic_8h.html#affd6804766f68e9a1b74f5f294670292",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic__compliance_8h.html#ae95d310ec03cee000e1e15cf5500908ca75592769772822e85d7a932061d0a498",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#a73525d80680556543ca0250a13bd698f",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa8e7dae540d176d083fce5c761132068f",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa9b0aab8b0279370b9491e0911e51cde1",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fac506d88e022acce915e6d552501a8d2e",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0faf74ccfa3a22e55e824dd74238bfac480",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase__in866_8h.html#a9a06ab4f27868c100899d0db5104158aa9b3c2df62700a5904111705d299eb77b",
"arduino__lmic__hal__boards_8h_source.html",
"class_arduino___l_m_i_c_1_1_hal_configuration___catena4610__t.html#aef16643c1db84de179e150a9245b867ca70f08e9645fd2ef3edb7dce5fc7bc745",
"class_arduino___l_m_i_c_1_1_hal_configuration___catena4612__t.html#a79cc249294fd185499b2d82a0048c28cafa98b8a5cbd54a5a3d163812f086b29f",
"class_arduino___l_m_i_c_1_1_hal_configuration___catena4630__t.html#a96a9540642dfd6b63260fdfc326695bda4694f74cd5fbeaa6154af195316d5ff2",
"class_arduino___l_m_i_c_1_1_hal_configuration___catena4802__t.html#aad53c7920eb1692aedffc3f4f57e33d4a8b569a10b07586677d71f50e3899693a",
"class_arduino___l_m_i_c_1_1_hal_configuration__heltec__lora32.html#ab32aaef9311cb33a4ddc45afcc1b1657",
"class_arduino___l_m_i_c_1_1_hal_configuration__ttgo__lora32__v1.html#a6e62eef88723e293e67e5727e96c890faf794fd96afe68d0a0ddc4cbeb5f0a4b5",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2arduino__lmic__hal__configuration_8h.html#ae9453cd49c92c9fa52e033882c42e9b2a521c36a31c2762741cf0f8890cbe05e3",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic_8c.html#ac4297f879c0f81777d854bcd6335e78e",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic__bandplan_8h.html#a10b86c1f7c11770b0dc33bb8e13c2cc7",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic__eu__like_8h.html#a19eea9d6cad64a6be955be83bf41b992",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa113fd946a269f86fef0ffab780dd20ea",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa1c5a9e4d8787ecbbb21e220b6590b168",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa637cd85eb6e5d3ba2a67bf10336852ac",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fae4a7b3ee76f2af79fbcf00a8d0272f3e",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0faecc22a3fa409fd6a919073de38ece79d",
"libs_2_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase__us915_8h.html#a5dbc9592b82121bdfe11ffbdf36197ebacc5a3f2922b4434a502e0de6170d7b39",
"lmic_2lmic_8h.html#a3eb2ab8442117b649211aa274162c4a8a468795c67d97e6d78312eda7f8b20c5b",
"lmic_2lmic__compliance_8h.html#add6754e39f670c70bb2fd38120cea9f8a011e4ff292edbc11a9161d3a99e0615e",
"lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa69ec5dfbe57f0498c6f04aaca2e82b08",
"lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa959e6b66c0f2f84a4bb1a1760bd9c403",
"lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fab7896bb951fc064965efe51ba223cd8a",
"lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fad6e68740f9a033ba987e60969e00dec3",
"lmic_2lorabase_8h.html#accbbf81b89fb64feb333a36a5eccb942a5d3fa41ffec0e56aeedd1cbdae5edc6f",
"lmic_2lorawan__spec__compliance_8h.html#af6a4fb6056849e0a56fb5a3b79fb4c22ab5ed97ad6619cbac166b0d8187782d02",
"namespace_arduino___l_m_i_c.html#ae9453cd49c92c9fa52e033882c42e9b2a521c36a31c2762741cf0f8890cbe05e3"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';