
window.onload=function(){
    var topbtn=document.getElementById("totop");//定义一个按钮，获取ID
    var timer=null;//定义一个为空的计时器
    var pagelookheight=document.documentElement.clientHeight;//获取当前高度
    /*获取当前页面高度，
     根据高度进行相关操作
     */
    window.onscroll=function(){
        var backtop=document.body.scrollTop;
        if(backtop>pagelookheight){
            totop.style.display="block"
        }
    }
    totop.onclick=function(){
        timer=setInterval(function(){
            var backtop=document.body.scrollTop;
            var speedtop=backtop/5;
            document.body.scrollTop=backtop-speedtop;
            if(backtop==0){
                clearInterval(timer);
            }
        },30);
    }
	time();
	draw2();
	textticker();
    show();
}


function time(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
    var d=today.getFullYear();
	m=checktime(m);
	s=checktime(s);
	
	document.getElementById("time").innerHTML=d+","+h+":"+m+":"+s;
	t=setTimeout(function(){
		time();
	},1000);
	}
   function checktime(i){
   	if(i<10){
   		i="0"+i;
   	}
   	return i;
   }
 
 
 
 function draw2(){
 	
        var pieData = [
				{
					value: 70,
					color:"#F38630"
				},
				
				{
					value : 100,
					color : "#69D2E7"
				}
			
			];
        var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieData);
	    var pieDate = [
				{
					value: 30,
					color:"#F38630"
				},
				
				{
					value : 100,
					color : "#69D2E7"
				}
			
			];
        var myPie = new Chart(document.getElementById("canvas2").getContext("2d")).Pie(pieDate);
	    var pieDate = [
				{
					value: 100,
					color:"#F38630"
				},
				
				{
					value : 100,
					color : "#69D2E7"
				}
			
			];
        var myPie = new Chart(document.getElementById("canvas3").getContext("2d")).Pie(pieDate);
	
 }
 
 
  	
        var max=0;
        var sd=150;  //这里是控制速度的
        var txt,lentxt,go;
function textlist() {
	    if (max>=lentxt){clearTimeout(go);}
        document.getElementById('introduce').innerHTML+=txt.substr(max,1);
        document.getElementById('introduce').innerHTML=document.getElementById('introduce').innerHTML.replace(/\%\$/ig,'<br>')
        max++
        }
 function textticker(){
 	    txt=document.getElementById('introduce').innerHTML;
        txt=txt.replace(/\<br\>/ig,'%$')
        lentxt=txt.length;
        document.getElementById('introduce').innerHTML='';
        go = setInterval(textlist, sd);
        }

 function $(id){
     return typeof id=="string"?document.getElementById(id):id;
 }
 function show(){
     var titleName=$("tab-title").getElementsByTagName("li");
     var tabContent=$("tab-content").getElementsByTagName("div");
     if(titleName.length !=tabContent.length){
         return;
     }
     for(var i=0;i<titleName.length;i++){
         titleName[i].id=i;
         titleName[i].onmouseover=function(){
             for(var j=0;j<titleName.length;j++){
                 titleName[j].className = "";
                 tabContent[j].style.display = "none";
             }
             this.className="select";
             tabContent[this.id].style.display = "block";
         }
     }
 }






        

