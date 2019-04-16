// 案例一：输出指定字符串
var str1="朱一龙未来可期，可爱的龙龙";
var key1="朱一龙";
var index1=str1.indexOf(key1);
str1=str1.substr(index1,3);
console.log(str1);

// 案例二：找到这个字符串中所有 o 出现的位置
var str2="hello odd old good oh";
var key2="o";//要找的字符串
var index2=0;//开始找的位置
while((index2=str2.indexOf(key2,index2))!=-1){//如果是-1，则证明找完了
	console.log(index2);
	index2 += key2.length;
}
// 案例三：找到这个字符串中每个字符串出现了多少次
var str3="WhatOareYyouYnoYshaHleiGood";
//第一步：把所有的字母都变成小写
str3=str3.toLocaleLowerCase();
//第二步：创建一个空对象
var obj={
	//目的：把字母作为键，次数作为值
};
//第三步：遍历字符串，获取每个字母
for(var i=0;i<str3.length;i++){
	var key3=str3[i];//每个字母
	//判断obj对象中有没有这个字母(字母---->键)
	if(obj[key3]){
		//对象中有这个字母了就次数加1
		obj[key3]++;
	}else{
		//对象中没有这个字母，那就把字母加到对象中，并且给这个字母一个出现的次数，默认为1
		obj[key3]=1;
	}
}
// 遍历对象，显示每个字母的次数
for(var key3 in obj){
	console.log(key3+"这个字母出现了"+obj[key3]+"次");
}