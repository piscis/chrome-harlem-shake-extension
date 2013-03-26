;(function($){
  var s1=document.createElement('script');
  var done = false;
  s1.onload = s1.onreadystatechange = function(){

    if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){

      var s2=document.createElement('script');
      document.getElementsByTagName('body')[0].appendChild(s2);
      var done = false;

      s2.onload = s2.onreadystatechange = function(){
		console.log('123');
        if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
		  console.log(document);
          jQuery(function($){
            $(document).hshakeify({
              onEnd: function(){
                console.log('the end my friend');
              },
              css_file: 'http://piscis.testdrive.cc/jquery-harlem-shake-plugin/jquery-harlem-shake-1.0.css',
              audio_file: 'http://piscis.testdrive.cc/jquery-harlem-shake-plugin/harlemshake'
            });
          });
        }
      }
	  
	  s2.setAttribute('src','http://piscis.testdrive.cc/jquery-harlem-shake-plugin/jquery-harlem-shake-1.0.js?adsf=asadfsdfddfdffasd');
    }
  }

  s1.setAttribute('src','http://code.jquery.com/jquery-1.9.1.min.js');
  document.getElementsByTagName('body')[0].appendChild(s1);
})(jQuery);