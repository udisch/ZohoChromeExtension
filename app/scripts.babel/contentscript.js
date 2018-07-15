'use strict';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	var e = document.getElementById('subvalue_ACCOUNTCF14').innerText;
  	sendResponse(e);
 }
 );