window.onload=function(){
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 640) {
                    docEl.style.fontSize = "100px";
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
                }
                // alert(docEl.style.fontSize)
            };

        if (!doc.addEventListener) return;
        var browserInfo = navigator.userAgent.toLowerCase();
        if (!(browserInfo.indexOf("ucbrowser") != -1 && (browserInfo.indexOf('android') > -1 || browserInfo.indexOf('adr') > -1))) {
            win.addEventListener(resizeEvt, recalc, false);
        }
        doc.addEventListener("DOMContentLoaded", recalc, false);
        // 解决UC渲染
        recalc();
    })(document, window);
}
