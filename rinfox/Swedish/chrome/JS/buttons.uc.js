// Help button redirecting to firefox help

(function() {

try {
  Components.utils.import("resource:///modules/CustomizableUI.jsm");
  var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
  var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
  var appversion = parseInt(Services.appinfo.version);
  
  var button_label = "Help";
 
  CustomizableUI.createWidget({
	id: "help-button", // button id
	defaultArea: CustomizableUI.AREA_TABSTRIP,
	removable: true,
	label: button_label, // button title
	tooltiptext: button_label, // tooltip title
	onClick: function(event) {
	  if(event.button=='0') {
		openHelpLink('firefox-help');
	  }
	},
	onCreated: function(button) {
	  return button;
	}
		
  });
  
} catch (e) {
	Components.utils.reportError(e);
};

})();


// Library menu to show or hide Bookmark Sidebar

(function() {
  try {
    var button_label = "View favorites, feeds, and history";

    CustomizableUI.createWidget({
      id: "library-button",
      defaultArea: CustomizableUI.AREA_NAVBAR,
      removable: true,
      label: button_label,
      tooltiptext: button_label,
      onClick: function() {
        openBookmarksSidebar();
      },
      onCreated: function(button) {
        return button;
      },
    });

  } catch (e) {
    Components.utils.reportError(e);
  }

  function openBookmarksSidebar() {
    if (window.SidebarUI) {
      window.SidebarUI.toggle("viewBookmarksSidebar");
    }
  }
})();


// Bookmark menu to Add to Favorites Bar


(function() {
  try {
    Components.utils.import("resource:///modules/CustomizableUI.jsm");
    var { Services } = Components.utils.import("resource://gre/modules/Services.jsm", {});
    var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
    var appversion = parseInt(Services.appinfo.version);

    CustomizableUI.createWidget({
      id: "bookmarks-menu-button", // button id
      defaultArea: CustomizableUI.AREA_NAVBAR,
      removable: true,
      label: "Bookmarks Menu",
      tooltiptext: "Add to Favorites Bar", // Tooltip label
      type: "menu-button",
      onCommand: function(event) {
        if (event.target.id === "bookmarks-menu-button") {
          addCurrentPageToBookmarks();
        }
      },
      onCreated: function(button) {
        return button;
      }
    });

    function addCurrentPageToBookmarks() {
      var title = gBrowser.contentTitle;
      var url = gBrowser.currentURI.spec;

      // Create a bookmarks service
      var { PlacesUIUtils } = ChromeUtils.import("resource:///modules/PlacesUIUtils.jsm");
      PlacesUIUtils.showBookmarkDialog({ action: "add", type: "bookmark", uri: url, title: title });
    }
  } catch (e) {
    Components.utils.reportError(e);
  };
})();





// Hide TipTab and All Tabs when 1 tab, show when 2 tabs or more

(function () {
  const toolbarItems = ["#tiptab_william_wong-BAP", "#alltabs-button"];

  const observer = new MutationObserver(hideToolbarItems);

  const tabsToolbar = document.getElementById("TabsToolbar");
  if (tabsToolbar) {
    observer.observe(tabsToolbar, { childList: true, subtree: true });
    hideToolbarItems(); // Initial check
  }

  function hideToolbarItems() {
    const numTabs = gBrowser.tabs.length;
    const hide = numTabs <= 1;

    toolbarItems.forEach((item) => {
      const element = document.querySelector(item);
      if (element) {
        element.style.display = hide ? "none" : "";
      }
    });
  }
})();




