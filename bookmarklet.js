;(function(){

  var injectJS = function(link,cb) {
    var src = document.createElement("script");
    done = false,
        cb = cb || function(){};

    src.onload = src.onreadystatechange = function(){

      if( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
        cb();
      }
    }

    src.type="text/javascript";
    src.src=link;
    (document.head || document.body || document.documentElement).appendChild(src);
  }

  var injectCSS = function(link,cb) {

    var src = document.createElement("link");
        done = false,
        cb = cb || function(){};

        src.onload = src.onreadystatechange = function(){

        if( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
            cb();
        }
    }

    src.rel="stylesheet";
    src.href=link;
    (document.head || document.body || document.documentElement).appendChild(src);
  }

  injectJS(chrome.extension.getURL("libs/jquery/jquery-1.9.1.min.js"),function(){

    injectCSS(chrome.extension.getURL("libs/jquery-harlem-shake/jquery-harlem-shake-1.0.css"),function(){

      injectJS(chrome.extension.getURL("libs/jquery-harlem-shake/jquery-harlem-shake-1.0.js"),function(){

        injectJS(chrome.extension.getURL("inject.js"), function(){

            window.postMessage({
              type: 'hs-shake-config',
              audio: chrome.extension.getURL("libs/jquery-harlem-shake/harlemshake")
            },'*' /* targetOrigin: any */ );
        });
      });
    });
  });

})();