// ==UserScript==
// @name             BookCommunityQuestions
// @namespace  https://read.amazon.com/
// @description    Makes magic happen
// @include  https://read.amazon.com/
// @include  http://read.amazon.com/
// @run-at        document-end
// @grant         none
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



