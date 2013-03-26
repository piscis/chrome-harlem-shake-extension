;(function($){

  window.addEventListener('message', function(event){

    if(event.data && event.data.type=='hs-shake-config'){

      $(document).hshakeify({
        onEnd: function(){
        },
        css_file: null,
        audio_file: event.data.audio
      });
    }

  });

})(jQuery,chrome);