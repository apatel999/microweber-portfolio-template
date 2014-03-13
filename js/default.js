

$(window).load(function(){
   // Simple way to enable the 'placeholder' attribute for browsers that doesn't support it
   if('placeholder' in document.createElement('input') === false){
       mw.$("[placeholder]").each(function(){
          var el = $(this), p = el.attr("placeholder");
          el.val() == '' ? el.val(p) : '' ;
          el.bind('focus', function(e){ el.val() == p ? el.val('') : ''; });
          el.bind('blur', function(e){ el.val() == '' ? el.val(p) : '';});
       });
   }

 });