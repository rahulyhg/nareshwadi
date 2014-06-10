// JavaScript Document


function makecircle(circle,nav,percentx,percenty) {
 var radius=($(circle).width()/2);
   var navs=$(nav);
   var totalnav1=$(navs).length;
   
   var angle=2*Math.PI/totalnav1;
   
   for(var i=0;i<totalnav1;i++)
   {
	   var x=radius*(1+(Math.sin(angle*(i))*percentx))-($(navs).eq(i).width()/2);
	   var y=radius*(1-(Math.cos(angle*(i))*percenty))-($(navs).eq(i).height()/2);
	   
	   $(navs).eq(i).css({left:x,top:y});
	   if(y<0)
	   {
		   
	   }
   }
   console.log(angle);
}
function colornav2(nav2) {
	for(var i=0;i<$(nav2).length;i++)
	{
		if(i%2==0)
		$(nav2).eq(i).css("color","#ae0019");
	}
}

function circlenavleft(name) {
$(".maincontent .navigation").css({zoom: "0.6","margin-left": "60px","margin-top": "-200px"} );
	$(".content .row").fadeOut(1000);
	
	$.post("files/"+name+".html",{},function (msg) {
		$(".content .internalpage").html(msg);
	});
	
}

$(document).ready(function(e) {
console.log("");
  makecircle(".circle1",".circle1 .nav1",0.9,0.76);
   makecircle(".circle2",".circle2 .nav1",0.8,0.8);
   colornav2(".nav2");

    $(".circle3 img").hover(function() {
			$(this).addClass("animated shake");
		},function() {
			$(this).removeClass("animated shake");
		});
	$(".logo").hover(function() {
		$(this).removeClass("animated rollIn");
			$(this).addClass("animated swing");
		},function() {
			$(this).removeClass("animated swing");
		});
	$(".circle1 .nav1").hover(function() {
			$(this).addClass("animated tada");
		},function() {
			$(this).removeClass("animated tada");
		});
	$(".circle1 .nav1").click(function() {
	var name=$.trim($(this).text().toLowerCase().replace(/ /g,''));
	console.log(name);
		circlenavleft(name);
		});	
	$(".circle2 .nav1").click(function() {
	var number=$(this).index(".circle2 .nav1");
	console.log(number);
	$(".circle1 .nav1").eq(number).trigger("click");
	//	circlenavleft();
		});	
		
	$(".circle2 .nav1").hover(function() {
			$(this).addClass("animated rubberBand");
		},function() {
			$(this).removeClass("animated rubberBand");
		});	
	$(".homemod").hover(function() {
		$(this).removeClass("animated fadeInUp");
			$(this).addClass("animated bounce");
		},function() {
			$(this).removeClass("animated bounce");
		});
	$(".homemod").click(function() {
		$(".homemod").removeClass("animated fadeInUp bounce");
		var numbersel=$( ".homemod" ).index( this );
		for(var i=0;i<$( ".homemod" ).length;i++)
		{
			if(i!=numbersel)
			$( ".homemod" ).eq(i).addClass("animated hinge");
		}
		console.log();
		return false;
	});
});