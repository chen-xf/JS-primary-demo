//倒序输出数组中的值
// var arr=[32,11,3,4,78,95];
// for(var i=arr.length-1;i>=0;i--){
// 	console.log(arr[i]);
// }

// 把数组中每个元素用|拼接到一起产生一个字符串并输出
// var names=["我","在","图书馆","写","代码"];
// var arr="";
// for(var i=0;i<names.length-1;i++){
// 	arr+=names[i]+'|';
// }
// console.log(arr+names[names.length-1]);


// 去掉数组中重复的0
// var arr=[1,0,4,0,5,5,6,0,3,0,99,6,3];
// var newArr=[];
// for(var i=0;i<arr.length;i++){
// 	if(arr[i]!=0){
// 		newArr[newArr.length]=arr[i];
// 	}
// }
// console.log(newArr);


// 反转数组---把数组中的数据位置调换
// var arr=[10,20,30,40,50];
// for(var i=0;i<arr.length/2;i++){
// 	var temp=arr[i];
// 	arr[i]=arr[arr.length-1-i];
// 	arr[arr.length-1-i]=temp;
// }
// console.log(arr);

// 提示用户输入班级人数，求总成绩，平均值，最高分，最低分
// var perCount=parseInt(prompt("请输入班级人数"));
// var perScores=[];
// for(var i=0;i<perCount;i++){
// 	perScores[perScores.length]=parseInt(prompt("请输入第"+(i+1)+"个人的成绩："));
// }
// console.log(perScores);

// var sum=0;
// for(var i=0;i<perScores.length;i++){
// 	sum+=perScores[i];
// }

// var avg=0;
// 	avg=sum/perScores.length;

// var max=perScores[0];
// var min=perScores[0];
// for(var i=0;i<perScores.length;i++){
// 	if(max<perScores[i]){
// 		max=perScores[i];
// 	}
// 	if(min>perScores[i]){
// 		min=perScores[i];
// 	}
// }
// console.log("总成绩："+sum);
// console.log("平均成绩："+avg);
// console.log("最高分："+max);
// console.log("最低分"+min);

// 冒泡排序
// var arr=[20,10,5,39,12,87,92];
// for(var i=0;i<arr.length-1;i++){
// 	for(var j=0;j<arr.length-1-i;j++){
// 		if(arr[j]<arr[j+1]){
// 			var temp=arr[j];
// 			arr[j]=arr[j+1];
// 			arr[j+1]=temp;
// 		}
// 	}
// }
// console.log(arr);


// 乘法口诀表
// document.write("<table border='1' cellpadding='0' cellspace='0'>");
// for(var i=1;i<=9;i++){
// 	document.write("<tr>");
// 	for(var j=1;j<=i;j++){
// 		document.write("<td>");
// 		document.write(j+"*"+i+"="+i*j);
// 		document.write("</td>");
// 	}
// 	// document.write("<br>");
// 	document.write("</tr>");
// }
// document.write("</table>");

// 函数形参与实参个数不一致
// function sum(x,y){
// 	return x+y;
// }
// var result=sum(10,20);
// console.log(sum);

// 圆的面积
// function getS(r){
// 	return Math.PI*r*r;
// }
// console.log(getS(5));

// 输出三角形的☆
for(var i=0;i<6;i++){
	for(var j=0;j<i;j++){
		document.write("☆");
	}
	document.write("<br>");
}


