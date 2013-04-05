// ==UserScript==
// @name             BookCommunityQuestions
// @namespace  https://read.amazon.com/
// @description    Makes magic happen
// @include  https://read.amazon.com/
// @include  http://read.amazon.com/
// @run-at        document-end
// @grant         none
// @require fg_ajax.js
// @require fg_form_submitter.js
// @require fg_moveable_popup.js
// @require gen_validatorv31.js
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)


function Greasemonkey_main() {
   var doc2=document.getElementById("KindleReaderIFrame").contentDocument;
   var loct = doc2.getElementById('kindleReader_footer_message').textContent;
   var patt=/% · (\d+) of/;
   var match = patt.exec(loct);
   alert(match[1]);
}

window.setTimeout(Greasemonkey_main, 2000);


function loc = get_read_loc() {
    var doc2=document.getElementById("KindleReaderIFrame").contentDocument;
    var loct = doc2.getElementById('kindleReader_footer_message').textContent;
    var patt=/% · (\d+) of/;
    var matches = patt.exec(loct);
    var loc = matches[1];
}


