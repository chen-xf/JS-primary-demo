// 自己定义一个对象，实现系统的max方法
function MyMax(){
	// 添加一个方法
	this.getMax=function(){
		var max=arguments[0];
		for(var i=0; i<arguments.length; i++){
			if(max<arguments[i]){
				max=arguments[i];
			}
		}
		return max;
	};
}

var mt =new MyMax();
var result=mt.getMax(10,20,50,12,33);
console.log(result);