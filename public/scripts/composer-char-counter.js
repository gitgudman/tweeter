$(document).ready(function() {
  console.log("composer-char-counter.js loaded");

  $('.new-tweet textarea').on('input', function() {
    const textLength = $(this).val().length;
    const maxLength = 140;
    const remaining = maxLength - textLength;

    const counter = $(this).siblings('div').children('.counter');
    counter.text(remaining);

    if (remaining < 0) {
      counter.addClass('over-limit');
    } else {
      counter.removeClass('over-limit');
    }
  });
});
