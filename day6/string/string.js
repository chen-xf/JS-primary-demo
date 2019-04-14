
var str1="hello";
var result1=str1.length;
console.log(result1);

var str2="hello"
var result2=str2.charAt(1);
console.log(result2);


var result3=String.fromCharCode(65);
console.log(result3);

var str4="hello";
var result4=str4.concat(" ","world","!");
console.log(result4);

var str5="hello world";
var result5=str5.indexOf("o");
console.log(result5);

var str6="hello world";
var result6=str6.lastIndexOf("o");
console.log(result6);

var str7="hello world";
var result7=str7.replace("he","ww");
console.log(result7);

var str8="hello world";
var result8=str8.slice(3,8);
console.log(result8);

var str9="hello/world";
var result9=str9.split("/");
console.log(result9);

var str10="hello world";
var result10=str10.substr(3,2);
console.log(result10);

var str11="hello world";
var result11=str11.substring(3,2);
console.log(result11);