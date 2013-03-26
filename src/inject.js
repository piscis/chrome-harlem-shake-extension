;(function($,c){

  window.addEventListener('message', function(event){

    /*
    window.jQuery(document).hshakeify({
      onEnd: function(){
        console.log('the end my friend');
      },
      css_file: null,
      audio_file: 'http://piscis.testdrive.cc/jquery-harlem-shake-plugin/harlemshake'
    });
    */


    if(event.data && event.data.type=='hs-shake-config'){

      window.jQuery(document).hshakeify({
        onEnd: function(){
          console.log('the end my friend');
        },
        css_file: null,
        audio_file: event.data.audio
      });
    }

    //console.log('page javascript got message:', event);
  });

})(jQuery,chrome);