//Need to include errorPageStrings.js when you include this file

function isExternalUrlSafeForNavigation(urlStr)
{
    var regEx = new RegExp("^(http(s?)|ftp|file)://", "i");
    return regEx.exec(urlStr);
}

function clickRefresh()
{
    var location = window.location.href;
    var poundIndex = location.indexOf('#');
    
    if (poundIndex != -1 && poundIndex+1 < location.length && isExternalUrlSafeForNavigation(location.substring(poundIndex+1)))
    {
        window.location.replace(location.substring(poundIndex+1));
    }
}

function navCancelInit()
{
    var location = window.location.href;
    var poundIndex = location.indexOf('#');
    
    if (poundIndex != -1 && poundIndex+1 < location.length && isExternalUrlSafeForNavigation(location.substring(poundIndex+1)))
    {
        var bElement = document.createElement("A");
        bElement.innerText = L_REFRESH_TEXT;
        bElement.href = 'javascript:clickRefresh()';
        navCancelContainer.appendChild(bElement);
    }
    else
    {
        var textNode = document.createTextNode(L_RELOAD_TEXT);
        navCancelContainer.appendChild(textNode);
    }
}

function expandCollapse(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}


function initHomepage()
{
    // in real bits, urls get returned to our script like this:
    // res://shdocvw.dll/http_404.htm#http://www.DocURL.com/bar.htm

    //For testing use
    //DocURL = "res://shdocvw.dll/http_404.htm#http://www.microsoft.com/bar.htm"
    DocURL=document.location.href;

    var poundIndex = DocURL.indexOf('#');
    
    if (poundIndex != -1 && poundIndex+1 < location.length && isExternalUrlSafeForNavigation(location.substring(poundIndex+1)))
    {
   
       //this is where the http or https will be, as found by searching for :// but skipping the res://
       protocolIndex=DocURL.indexOf("://", 4);
   
       //this finds the ending slash for the domain server
       serverIndex=DocURL.indexOf("/", protocolIndex + 3);
   
       //for the href, we need a valid URL to the domain. We search for the # symbol to find the begining
       //of the true URL, and add 1 to skip it - this is the BeginURL value. We use serverIndex as the end marker.
       //urlresult=DocURL.substring(protocolIndex - 4,serverIndex);
       BeginURL=DocURL.indexOf("#",1) + 1;
       urlresult=DocURL.substring(BeginURL, serverIndex);
       if (protocolIndex - BeginURL > 7)
           urlresult="";

        //for display, we need to skip after http://, and go to the next slash
       displayresult=DocURL.substring(protocolIndex + 3, serverIndex);
    } 
    else
    {
       displayresult = "";
       urlresult = "";
    }

    var aElement = document.createElement("A");

    aElement.innerText = displayresult;
    aElement.href = urlresult;

    homepageContainer.appendChild(aElement);
}


function initGoBack()
{
    //fills in the span container for "back to previous page"
    //Basically, makes "back to previous page" a clickable item IF there's something in the navstack.

    if (history.length < 1)
    {
        //this page is the only thing. Nothing in history.
        var textNode = document.createTextNode(L_GOBACK_TEXT);
        goBackContainer.appendChild(textNode);
    }
    else
    {
        var bElement = document.createElement("A");
        bElement.innerText = L_GOBACK_TEXT ;
        bElement.href = "javascript:history.back();";
        goBackContainer.appendChild(bElement);
    }				
}

function initMoreInfo(infoBlockID)
{
    var bElement = document.createElement("A");
    bElement.innerText = L_MOREINFO_TEXT;
    bElement.href = "javascript:expandCollapse(\'infoBlockID\', true);";
    moreInfoContainer.appendChild(bElement);				
}

function initOfflineUser(offlineUserID)
{
    var bElement = document.createElement("A");
    bElement.innerText = L_OFFLINE_USERS_TEXT;
    bElement.href = "javascript:expandCollapse('offlineUserID', true);";
    offlineUserContainer.appendChild(bElement);
}

function setTabInfo(tabInfoBlockID)
{
    //removes the previous tabInfo text
    var bPrevElement = document.getElementById("tabInfoTextID");
    var bPrevImage   = document.getElementById("tabInfoBlockIDImage");

    if (bPrevElement != null)
    {
        tabInfoContainer.removeChild(bPrevElement);
    }

    if (bPrevImage != null)
    {
        tabImageContainer.removeChild(bPrevImage);
    }

    var bElement = document.createElement("A");
    var bImageElement = document.createElement("IMG");

    var ecBlock = document.getElementById(tabInfoBlockID);

    //determines if the block is closed
    if ((ecBlock != undefined && ecBlock != null) &&
        (ecBlock.currentStyle.display == "none" || ecBlock.currentStyle.display == null || ecBlock.currentStyle.display == ""))
    {
        bElement.innerText = L_SHOW_HOTKEYS_TEXT;
        bImageElement.alt = L_SHOW_HOTKEYS_TEXT;
        bImageElement.src="down.png";
    }
    else
    {
        bElement.innerText = L_HIDE_HOTKEYS_TEXT;
        bImageElement.alt = L_HIDE_HOTKEYS_TEXT;
        bImageElement.src="up.png";
    }

    bElement.id = "tabInfoTextID";
    bElement.href = "javascript:expandCollapse(\'tabInfoBlockID\', false); setTabInfo('tabInfoBlockID');";


    bImageElement.id="tabInfoBlockIDImage";
    bImageElement.border="0";
    bImageElement.className="actionIcon";

    tabInfoContainer.appendChild(bElement);
    tabImageContainer.appendChild(bImageElement);
}


function skipTabCheck(skipTabFrom)
{
    if (skipTabFrom.skipTabCheckbox.checked)
    {
        window.external.SkipTabsWelcome();
    }
}

function diagnoseConnection()
{
    window.external.DiagnoseConnection();
}