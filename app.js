
var a = 5;
var toonuud=[5,4,3,2,1,0];
var test=["text",5,true,false,null,3.14];
console.log(toonuud);
console.log(toonuud[0]);
console.log("length:"+toonuud.length);
console.log(toonuud[toonuud.length-1]);
for(i=0;i<=toonuud.length-1;i++){
	console.log(toonuud[i]);
}
var toonuud2=[109,201,3000,43454,604234];
console.log(toonuud2[0]*toonuud2[toonuud2.length-1]);
for(i=0;i<=toonuud2.length-1;i++){
	if(toonuud2[i]%2==0){
		console.log("Tegsh:"+toonuud2[i])
	}else{
		console.log("Sondgoi:"+toonuud2[i])
	}
}
var t3=[554544564654656549999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995454456465465654999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999];
for (i=0;i<=t3.length-1;i++){
	t3 = t3 *t3[i];
}
console.log(t3);
var t2=[554544564654656549999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995454456465465654999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999];
for (i=0;i<=t2.length-1;i++){
	t2 = t2 *t2[i];
}
console.log(t2);
var color1=["red","blue","green","purple","black","magenta","brown","violet","royalblue","violetred","c","skyblue"];
var body = document.getElementsByTagName('body')[0];
var i=-1;
function color(){
	i++;
	if(i==12){
		i = -1
	}
	body.style.backgroundColor=color1[i];
}
function color2(){
	i--;
	if(i==-1){
		i = 12
		body.style.backgroundColor=color1[i];
	}
	body.style.backgroundColor=color1[i];
}
function auto(){
		i++;
	
	if(i>color1.length-1){
		i = 0;
	}
	body.style.backgroundColor=color1[i];
up = setTimeout(auto,1000);
}
function stop(){
	clearTimeout(up);
}