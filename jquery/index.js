$('a').attr('href', 'https://yahoo.com');
$('button').click(function (e) {
  e.preventDefault();
  $('h1').css('color', 'purple');
});

$(document).keydown(function (e) {
  $('h1').text(e.key);
});

$('h1').on('mouseover', function () {
  $('h1').css('color', 'purple');
});
