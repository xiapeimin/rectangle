/*global $forkMeGH,$bszPageFooter*/
/*eslint no-undef: "error"*/
function i(e, t) {
  return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}

$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  //console.log($(window).height());
  $forkMeGH.show('https://github.com/xiapeimin/rectangle');
  $bszPageFooter.show($('#times'));

  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

    var p = i(2 * (w + h),2),
        a = i(w * h,2);

    $perimeter.val(p);
    $area.val(a);
  });
});
