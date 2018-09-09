//40
//var x = "hello world!";
//41
// console.log("global:message="+message);

// var a = function(){
// 	var message="inside a";
// 	console.log("a:message =" + message);
// 	function b (){
// 	console.log("b:message="+message);
// }
// 	b();
// }

//function b (){
	//console.log("b:message="+message);
//}
// a();
//43
// var string="hello";
// string=string+" world";
// string+=" world";
// console.log(string+"!");
//***
// console.log((5+4)/3);
// console.log(undefined/5);
// function test1 (a){
// 	console.log(a/5);
// }
// test1();
//44
//var x=4,y=4;
// if (x==y) {
// 	console.log("x equals y");
// }
//x="4"
// if (x==y) {
// 	console.log("x equals y");
// }
// if(x===y){console.log("equal");}
// else{console.log("not equal");}
//****
// if(false||null||undefined||""||0||NaN){
// 	console.log("line won't execute");
// }
// else{console.log("all false");}
// if(true&&"hello"&&1&&-1&&"false"){
// 	console.log("all true");
// }
//****IF
// function a()
// {return 
// {
// 	name:"amy"
// };
// }
// function b(){
// 	return {
// 	name:"amy"
// };
// }
// console.log(a());
// console.log(b());
//*******FOR
// var sum=0;
// for (var i = 0.; i < 10; i++){
// 	console.log(i);
// 	sum=sum+i;
// }
// console.log("sum:"+sum);
//function orderChickenWith(sideDish){
//	// if (sideDish==undefined){
//	// 	sideDish="wathevs";

//	//}
// 	sideDish=sideDish||"wathevs";
// 	console.log("Chicken with "+ sideDish);
// }
// orderChickenWith("noodles");
// orderChickenWith();
//45
// var company = new Object();
// company.name = "twitt";
// company.ceo=new Object();
// company.ceo.firstName="ema";
// company.ceo.favColor="black";
// console.log(company);
// console.log("ceo is:"+ company.ceo.firstName);
// console.log(company["name"]);
// // // company.$stock =110;
// // // console.log(company);
// var stockCompany="stock of company";
// company[stockCompany]=110;
// console.log("STOCK OF COMPANNY: "+ company[stockCompany]);
//*****
// var twitt= {
// 	name:"Twitt",
// 	ceo:{
// 		firstName:"ema",
// 		favColor:"black"
// 	},
// 	"stock of company":110
// };
// console.log(twitt.ceo.firstName);
//46
// function multiply (x,y){
// 	return x*y;
// }

// multiply.version="v.1.0.0"
// console.log (multiply.version);
// // //functtion factory
// function makeMultiplier( multiplier){
// 	var myFunc = function(x){
// 		return multiplier*x;
// 	};
// 	return myFunc;
// }
// var multiplyBy3=makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll= makeMultiplier(2);
// console.log(doubleAll(100));
// // //passing funcs as args
// function doOperationOn(x, operation){
// 	return operation(x);
// }
// var result= doOperationOn(5, multiplyBy3);
// console.log(result);
// result= doOperationOn(100, doubleAll);
// console.log(result);
//47
// var a =7;
// var b=a;
// console.log("a:"+a);
// console.log("b:"+b);
// b=5;
// console.log("a:"+a);
// console.log("b:"+b);
//*****
// var a={x:7};
// var b=a;
// console.log(a);
// console.log(b);
// b.x=5;
// console.log(a);
//  console.log(b);
//*****
// function changePrimitive(primValue){
// 	console.log("in change primitive...");
// 	console.log("before:");
// 	console.log(primValue);
// 	primValue=5;
// 	console.log("after:");
// 	console.log(primValue);
// }
// var value=7; 
// changePrimitive(value);
// console.log("after change primitive, origin value:");
// console.log(value);
// //*****
// function changePrimitive(objValue){
// 	console.log("in change primitive...");
// 	console.log("before:");
// 	console.log(objValue);
// 	objValue.x=5;
// 	console.log("after:");
// 	console.log(objValue);
// }
// var value={x:7}; 
// changePrimitive(value);
// console.log("after change primitive, origin value:");
// console.log(value);
//48
// function test (){
// 	console.log(this);
// 	this.myName="ema";
// }
// test();
// console.log(window.myName);
//****
// function Circle (radius){
// 	console.log(this);

// 	}
//****
// function Circle (radius){
// 	this.radius=radius;
//// this.getArea=
//// function(){
//// 	return Math.PI * Math.pow(this.radius,2);
// //	}
// }
// 	Circle.prototype.getArea=
// 	function(){
// 		return Math.PI * Math.pow(this.radius,2);
// };
// var myCircle= new Circle(10);
// console.log(myCircle);

// var myOtherCircle= new Circle(20);
// console.log(myOtherCircle);
//49
// var literalCircle ={
// 	radius:10,

// 	getArea: function(){

// 		var self=this;
// console.log(this);
// var increaseRadius=function(){
//  self.radius=20;

//  };
// increaseRadius();
//  console.log(this.radius);
// return Math.PI * Math.pow(this.radius,2);
// 	}
// };
// console.log(literalCircle.getArea());
//literalCircle.getArea();
//array
// var array= new Array();
// array[0]="ema";
// array[1]=2;
// array[2]= function(name){
// 	console.log("hello "+name);
// };
// array[3]={course:"html, css, js"};
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);
// var names2=["css", "html", "js"];
//console.log(name);
// for (var i = 0; i < names.length; i++) {
// 	console.log("hello "+ names[i]);
// }
// names[100]="beh";
// for (var i = 0; i < names.length; i++) {
// 	console.log("hello "+ names[i]);
// }
// var names=["css", "html", "js"];
// var myObj={
// 	name:"ema",
// 	course:"css/html/js",
// 	platform:"coursera"
// };
// for (var prop in myObj){
// 	console.log(prop+ ":" +myObj[prop]);
// }
// for (var name in names2){
// 	console.log( "hello: " +names2[name]);
// }
