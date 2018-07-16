'use strict';

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
  	const e = document.getElementById('subvalue_ACCOUNTCF14').innerText;
  	sendResponse(e);
 });