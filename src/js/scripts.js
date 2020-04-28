(function() {
    'use strict';

  // forms

    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);


    // tagcloud 

    $.fn.tagcloud.defaults = {
      size: {start: 12, end: 22, unit: 'pt'},
      color: {start: '#5a68af', end: '#f52'}
    };

    $(function () {
      $('#tagcloud a').tagcloud();
    });

  })();