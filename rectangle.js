$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  console.log($(window).height());
  $forkMeGH.show("https://github.com/xiapeimin/rectangle");
  $bszPageFooter.show($('#times'));

  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

    var p = 2 * (w + h),
        a = w * h;

    $perimeter.val(p);
    $area.val(a);
  });
});
