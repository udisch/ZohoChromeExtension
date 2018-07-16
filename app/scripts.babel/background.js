'use strict';

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);

  // Replace all rules 
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    // With a new rule
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // match url
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'crm.zoho.com' }
          })
        ],
        // shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

function copyToClipboard(msg) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = msg;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  document.body.removeChild(copyFrom);
}

chrome.pageAction.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, {}, copyToClipboard);
});
