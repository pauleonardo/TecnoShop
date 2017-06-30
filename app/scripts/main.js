// console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
var $form = $('#suscribeForm');
var $formGroup = $form.find('.form-group');
var $formControl = $formGroup.find('.form-control');

$form.submit( function(ev){
  ev.preventDefault();
  var error = Math.random() > 0.5;

  $formGroup.removeClass().addClass('form-group');
  $formControl.removeClass().addClass('form-control');

  $formGroup.addClass( error ? 'has-danger' : 'has-success' );
  $formControl.addClass( error ? 'form-control-danger' : 'form-control-success' );

  $formGroup.find('.form-control-feedback').remove();

  var el;

  if(error){
    el = $('<div>', { html: 'Ha ocurrido un error' });
  }
  else {
    el = $('<div>', { html: 'Te enviaremos todas las novedades' })
  }

  el.addClass('form-control-feedback');

  $formGroup.append(el);

})

function mostarModal () {
  var noMostrarModal = JSON.parse(localStorage.noMostrarModal);

  if(!noMostrarModal){
    $('#modalOferta').modal();
  }

  $('#btnNoRegistrar').click( function() {
    localStorage.noMostrarModal = true ;
  })
}

var $filtrosToggle = $('#filtrosToggle');

$filtrosToggle.click(function (ev) {
  ev.preventDefault();

  var $i = $filtrosToggle.find('i.fa');
  var isDown = $i.hasClass('fa-chevron-down');

  if (isDown){
    $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
  }
  else{
    $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
  }
});
