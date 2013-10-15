/* options */
var options = {
  gmail_url: 'https://gmail.com',
}

/* on icon click, launch gmail.com */
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.tabs.getAllInWindow(undefined, function(tabs) {
      for (var i = 0, tab; tab = tabs[i]; i++)
      {
        /* check if there's any gmail tab open */
        if (tab.url.indexOf('mail.google.com') > -1)
        {
          /* change to gmail tab */
          chrome.tabs.update(tab.id, {selected: true});
          return true;
        }
      }

      /* create a gmail tab */
      chrome.tabs.create({
          url: options.gmail_url
      });
    });
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.storage) {
    if (typeof request.value != 'undefined') {
      localStorage[request.storage] = request.value;
    }
    sendResponse({storage: localStorage[request.storage]});
  } else {
    sendResponse({});
  }
});