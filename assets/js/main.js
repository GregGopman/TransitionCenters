window.addEventListener("hashchange", function () {

    $( '.collapse.in').each(function() {
      var $el = $( this );
      $el.removeClass('in');
    });

});