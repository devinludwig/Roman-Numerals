

var input;
var array = [];
var one;
var five;
var ten;

var convert = function(number) {
  array=[];
    for (var index=0; index<number.length; index ++) {

      if (number.length - index === 4) {
        one = "M";
        five = "<span>V</span>";
        ten = "";

      } else if (number.length - index === 3) {
        one = "C";
        five = "D";
        ten = "M";
      } else if (number.length - index === 2) {
        one = "X";
        five = "L";
        ten = "C";
      } else if (number.length - index === 1) {
        one = "I";
        five = "V";
        ten = "X";
      }

    /*  if (parseInt(number[index]) < 9 && parseInt(number[index]) > 4 && number.length === 4 && index === 0) {
        array.push((one).repeat(parseInt(number[index])));
      } else */ if (parseInt(number[index]) < 9 && parseInt(number[index]) > 4) {
        array.push(five);
        array.push((one).repeat(parseInt(number[index]) - 5));
      } else if (parseInt(number[index]) < 4) {
        array.push((one).repeat(parseInt(number[index])));
      } else if (parseInt(number[index]) === 9) {
        array.push(one + ten);
      } else if (parseInt(number[index]) === 4) {
        array.push(one + five);
      }
    }
  return(array);
}


$(function() {
  $("form").submit(function(event) {
    debugger;
    event.preventDefault();
    $(".result").empty();
    var input = $("input").val();
    $(".result").append((convert(input)).join(''));
  });
});
