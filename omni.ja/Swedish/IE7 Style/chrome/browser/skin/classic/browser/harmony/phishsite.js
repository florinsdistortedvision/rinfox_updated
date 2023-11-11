var sRealPageUrl = RealPageURL();
function RealPageURL()
{
   urlresult = '';
   DocURL=document.location.href;

   BeginURL=DocURL.indexOf("#",1) + 1;
   urlresult=DocURL.substring(BeginURL);
   
   if (!isExternalUrlSafeForNavigation(urlresult))
   {
       urlresult = window.document.location.toString();
   }
   
   return urlresult;
}

function closePage() {
    window.close();
}

function makeReportURL() {
    var sReportURL = 'https://go.microsoft.com/fwlink/?linkid=48016&clcid=0x409&result=block&URL=' + encodeURIComponent(sRealPageUrl);
    window.open(sReportURL);

}

function BodyLoad()
{
   document.all.overridelink.href = sRealPageUrl;
   document.all.linkdiv.innerText = sRealPageUrl;
}
