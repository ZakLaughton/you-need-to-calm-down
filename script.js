$(document).ready(function() {
  if ($('video').prop('muted', true)) {
    $('#mute').css('background-image', 'url(media/mute-on.svg)');
  }

  $('#mute').click(function() {
    if ($('video').prop('muted')) {
      $('video').prop('muted', false);
      $('#mute').css('background-image', 'url(media/mute-off.svg)');
    } else {
      $('video').prop('muted', true);
      $('#mute').css('background-image', 'url(media/mute-on.svg)');
    }
  });
});
