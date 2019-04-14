// 格式化日期和时间
function getDate(dt){
	var year = dt.getFullYear();
	var month = dt.getMonth() + 1;
	var day = dt.getDate();
	var hour = dt.getHours();
	var minute = dt.getMinutes();
	var second = dt.getSeconds();
	var dateArr=[year,month,day,hour,minute,second];
	for(var i=0;i<dateArr.lenght;i++){
		if(dateArr[i]<10){
			dateArr[i]="0"+dateArr[i];
		}
	}
	// second = second < 10 ? "0" + second : second;
	return year+"年"+month+"月"+day+"日"+""+hour+":"+minute+":"+dateArr[5];
}
var dt = new Date();
console.log(getDate(dt));

// 产生随机的十六进制颜色
function getColor(){
	var str="#";//十六进制颜色前面的#
	//一个十六进制的值的数组
	var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	for(var i=0;i<6;i++){
		//产生的每个随机数都是一个索引，根据索引找到数组中对应的值，然后拼接在一起
		var num=parseInt(Math.random()*16);
		str += arr[num];
		
	}
	return str;
}
console.log(getColor());
//页面记载的事件
window.onload=function(){
	//在文档中通过id属性的值查找这个元素（标签），设置该标签的背景颜色
	document.getElementById("dv").style.backgroundColor=getColor();
}