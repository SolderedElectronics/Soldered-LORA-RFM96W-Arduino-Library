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
    [ "LoRa API", "md_src_libs_arduino__lo_ra_master__a_p_i.html", [
      [ "Repository Contents", "index.html#autotoc_md1", null ],
      [ "Hardware design", "index.html#autotoc_md2", null ],
      [ "Documentation", "index.html#autotoc_md3", null ],
      [ "About Soldered", "index.html#autotoc_md4", null ],
      [ "Original source", "index.html#autotoc_md5", null ],
      [ "Open-source license", "index.html#autotoc_md6", null ],
      [ "Include Library", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md8", null ],
      [ "Setup", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md9", [
        [ "Begin", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md10", null ],
        [ "Set pins", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md11", [
          [ "No MCU controlled reset pin", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md12", null ],
          [ "Pin dio0 interrupt callbacks", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md13", null ]
        ] ],
        [ "Set SPI interface", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md14", null ],
        [ "Set SPI Frequency", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md15", null ],
        [ "End", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md16", null ]
      ] ],
      [ "Sending data", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md17", [
        [ "Begin packet", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md18", null ],
        [ "Writing", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md19", null ],
        [ "End packet", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md20", null ],
        [ "Tx Done", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md21", null ],
        [ "Register callback", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md22", null ]
      ] ],
      [ "Receiving data", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md23", [
        [ "Parsing packet", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md24", null ],
        [ "Continuous receive mode", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md25", [
          [ "Register callback", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md26", null ],
          [ "Receive mode", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md27", null ]
        ] ],
        [ "Packet RSSI", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md28", null ],
        [ "Packet SNR", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md29", null ]
      ] ],
      [ "RSSI", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md30", [
        [ "Packet Frequency Error", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md31", null ],
        [ "Available", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md32", null ],
        [ "Peeking", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md33", null ],
        [ "Reading", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md34", null ]
      ] ],
      [ "Other radio modes", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md35", [
        [ "Idle mode", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md36", null ],
        [ "Sleep mode", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md37", null ]
      ] ],
      [ "Radio parameters", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md38", [
        [ "TX Power", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md39", null ],
        [ "Frequency", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md40", null ],
        [ "Spreading Factor", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md41", null ],
        [ "Signal Bandwidth", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md42", null ],
        [ "Coding Rate", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md43", null ],
        [ "Preamble Length", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md44", null ],
        [ "Sync Word", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md45", null ],
        [ "CRC", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md46", null ],
        [ "Invert IQ Signals", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md47", null ],
        [ "LNA Gain", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md48", null ]
      ] ],
      [ "Other functions", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md49", [
        [ "Random", "md_src_libs_arduino__lo_ra_master__a_p_i.html#autotoc_md50", null ]
      ] ]
    ] ],
    [ "issue_template", "md_src_libs_arduino__lo_ra_master_issue_template.html", null ],
    [ "LoRa module initialization", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html", [
      [ "For AU915", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md83", null ],
      [ "For AS923 or EU868", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md84", null ],
      [ "For US915", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md85", [
        [ "Setup Authentication Keys for ABP activation", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md64", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md62", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md63", null ],
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md65", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md66", null ]
        ] ],
        [ "Setup Device address", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md67", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md68", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md69", null ]
        ] ],
        [ "Setup Authentication Keys for OTAA activation", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md70", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md71", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md72", null ]
        ] ],
        [ "Join Procedure", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md73", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md74", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md75", null ]
        ] ],
        [ "Set Device Class", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md76", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md77", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md78", null ]
        ] ],
        [ "Set Channel", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md79", null ],
        [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md80", [
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md81", null ]
        ] ],
        [ "Set Data Rate", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md82", null ],
        [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md86", [
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md87", null ]
        ] ],
        [ "Send data to LoRaWAN", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md88", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md89", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md90", null ]
        ] ],
        [ "Update and run LoRa FSM", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md91", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md92", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md93", null ]
        ] ],
        [ "Check and retrieve incoming data", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md94", [
          [ "Syntax", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md95", null ],
          [ "Example", "md_src_libs__beelan__lo_ra_w_a_n_2_0_0__a_p_i.html#autotoc_md96", null ]
        ] ]
      ] ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_e_s-128_8cpp.html",
"class_lo_ra_class.html#aff3deaecc03da514af3a05e5e0c38e69"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';