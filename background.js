function updateTabCount() {
  chrome.tabs.query({}, function(tabs) {
    const tabUrls = {};
    let duplicateCount = 0;
    tabs.forEach(tab => {
        if (tabUrls[tab.url]) {
            duplicateCount++;
        } else {
            tabUrls[tab.url] = true;
        }
    });
    console.log("Number of duplicate tabs:", duplicateCount);
    chrome.action.setBadgeText({text: duplicateCount.toString()});
});
}

chrome.tabs.onCreated.addListener(function(tab) {
  console.log("Tab created:", tab);
  updateTabCount();
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  console.log("Tab removed:", tabId);
  updateTabCount();
});
chrome.runtime.onInstalled.addListener(updateTabCount);