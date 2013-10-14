/* options */
var options = {
  gmail_url: 'https://gmail.com',
  gmail_atom_feed: 'https://mail.google.com/mail/feed/atom',
  check_cycle: (60 * localStorage.gml_seconds) /* seconds */
};

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
