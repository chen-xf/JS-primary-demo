// 构造函数
// var arr1=new Array();
// 字面量方式
// var arr2=[];

// 判断变量是不是数组类型：两种方式
var obj=[];
var result=Array.isArray(obj);
console.log(result);
console.log(obj instanceof Array);

var arr1=[10,20,30];
var arr11=[40,50,60];
var result1=arr1.concat(arr11);
console.log(result1);

var arr2=[1000,2000,3000];
// a--->元素的值
// b--->索引的值
// c--->谁调用这个方法，那么c就是谁--->arr2
var flag=arr2.every(function(element,index){
	return element>2000;
});
console.log(flag);
var flag1=arr2.filter(function(element){
	return element>1000;
});
console.log(flag1);
var flag2=arr2.push(4000);
console.log(arr2);
console.log(flag2);
var flag3=arr2.pop();
console.log(flag3);
console.log(arr2.shift());
console.log(arr2.unshift(5000));
console.log(arr2);
console.log(arr2.forEach(function(element,index,arr){
	console.log("arr2["+index+"]"+"="+element);
}));
/*arr2[0]=5000 array.js:38:2
arr2[1]=2000 array.js:38:2
arr2[2]=3000 array.js:38:2
undefined*/
console.log(arr2.indexOf(1000));
console.log(arr2.join("||"));
console.log(arr2.map(function(element){
	return element*2;
}));
console.log(arr2.reverse());

var arr3=[2,5,1,15,33,9,105];
console.log(arr3.sort(function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}));
console.log(arr3.slice(2,5));
console.log(arr3.splice(1,1,100));
console.log(arr3);



// 基本包装类型
var str="hello";
str=str.replace("ll","gg");
console.log(str);

var num=10;
console.log(num.toString());

var bo=new Boolean(false);
var re=bo&&true;
console.log(re);
var re1=true&&bo;
console.log(re1);