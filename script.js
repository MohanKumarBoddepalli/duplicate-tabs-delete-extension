document.addEventListener('DOMContentLoaded', function() {
  function deleteOldTabs() {
      chrome.tabs.query({}, function(tabs) {
        const tabUrls = {};
          tabs.reverse();
          tabs.forEach(tab => {
              if (tabUrls[tab.url]) {
                chrome.tabs.remove(tab.id);
              }else {
                tabUrls[tab.url] = true;
            }
          });
      });
  }

  function deleteNewTabs() {
      chrome.tabs.query({}, function(tabs) {
        const tabUrls = {};
          const now = Date.now();
          tabs.forEach(tab => {
              if (tabUrls[tab.url]) {
                chrome.tabs.remove(tab.id);
              }else {
                tabUrls[tab.url] = true;
            }
          });
      });
  }

  document.getElementById('deleteOld').addEventListener('click', deleteOldTabs);
  document.getElementById('deleteNew').addEventListener('click', deleteNewTabs);
});
