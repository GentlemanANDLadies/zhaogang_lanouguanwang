function removeLi(){$(".tabControl").children(".num").remove()}function pageControl(){for(var s=0,c=Math.ceil($(".content").height()/600),t=c,l=t,o=0;o<t;o++)$("<li>"+l--+"</li>").prependTo(".tabControl").addClass("num");$(".num").eq(s).css("background","lightblue"),$(".num").click(function(){s=$(this).index(),$(".content").css({top:600*-s}),$(".num").eq(s).css("background","lightblue").siblings(".num").css("background","#fff"),console.log(s)}),$(".home_page").click(function(){s=0,$(".content").css({top:600*-s}),$(".num").eq(s).css("background","lightblue").siblings(".num").css("background","#fff")}),$(".next_page").click(function(){c=parseInt($(".content").height()/600),++s>c&&(s=c),$(".content").css({top:600*-s}),$(".num").eq(s).css("background","lightblue").siblings(".num").css("background","#fff")}),$(".prev_page").click(function(){--s<0&&(s=0),$(".content").css({top:600*-s}),$(".num").eq(s).css("background","lightblue").siblings(".num").css("background","#fff")}),$(".end_page").click(function(){s=c,$(".content").css({top:600*-s}),$(".num").eq(s).css("background","lightblue").siblings(".num").css("background","#fff")})}for(var data={content:[{class:"HTML5",school:"北京校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"HTML5",school:"上海校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"HTML5",school:"大连校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"HTML5",school:"西安校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"HTML5",school:"广州校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"HTML5",school:"郑州校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"HTML5",school:"北京校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"JavaEE",school:"北京校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"JavaEE",school:"北京校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"JavaEE",school:"大连校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"JavaEE",school:"西安校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"JavaEE",school:"广州校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"JavaEE",school:"郑州校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"JavaEE",school:"上海校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"VR/AR/游戏",school:"北京校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"VR/AR/游戏",school:"郑州校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"VR/AR/游戏",school:"广州校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"VR/AR/游戏",school:"西安校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"VR/AR/游戏",school:"大连校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"VR/AR/游戏",school:"上海校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"VR/AR/游戏",school:"西安校区",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"PHP",school:"北京校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"PHP",school:"大连校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"PHP",school:"西安校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"PHP",school:"广州校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"PHP",school:"上海校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"PHP",school:"郑州校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"PHP",school:"成都校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"大数据",school:"北京校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"大数据",school:"大连校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"大数据",school:"西安校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"大数据",school:"广州校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"大数据",school:"郑州校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"大数据",school:"成都校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"大数据",school:"上海校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"Andriod",school:"上海校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"Web安全",school:"郑州校区",status:"已爆满",time1:"2017-09-25",click:"立即报名"},{class:"HTML5",school:"北京校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"JavaEE",school:"郑州校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"VR/AR/游戏",school:"石家庄",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"PHP",school:"西安校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"大数据",school:"成都校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"Andriod",school:"上海校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"Web安全",school:"郑州校区",status:"已爆满",time1:"2017-09-25",click:"立即报名"},{class:"HTML5",school:"北京校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"JavaEE",school:"郑州校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"VR/AR/游戏",school:"石家庄",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"PHP",school:"西安校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"大数据",school:"成都校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"Andriod",school:"上海校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"Web安全",school:"郑州校区",status:"已爆满",time1:"2017-09-25",click:"立即报名"},{class:"HTML5",school:"北京校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"JavaEE",school:"郑州校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"VR/AR/游戏",school:"石家庄",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"PHP",school:"西安校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"Andriod",school:"北京校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"大数据",school:"成都校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"Andriod",school:"上海校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"Web安全",school:"郑州校区",status:"已爆满",time1:"2017-09-25",click:"立即报名"},{class:"HTML5",school:"北京校区",status:"已爆满",time1:"2017-07-03",click:"立即报名"},{class:"Andriod",school:"西安校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"JavaEE",school:"郑州校区",status:"已爆满",time1:"2017-07-08",click:"立即报名"},{class:"VR/AR/游戏",school:"石家庄",status:"已爆满",time1:"2017-07-28",click:"立即报名"},{class:"PHP",school:"西安校区",status:"已爆满",time1:"2017-08-03",click:"立即报名"},{class:"Andriod",school:"成都校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"大数据",school:"成都校区",status:"已爆满",time1:"2017-08-13",click:"立即报名"},{class:"Andriod",school:"上海校区",status:"已爆满",time1:"2017-09-04",click:"立即报名"},{class:"Web安全",school:"郑州校区",status:"已爆满",time1:"2017-09-25",click:"立即报名"},{class:"Web安全",school:"北京校区",status:"已爆满",time1:"2017-09-25",click:"立即报名"}]},i=0;i<data.content.length;i++)$("<li class='content_li'><span class='class'></span><span class='school'></span><span class='status'></span><span class='time1'></span><span class='click'></span></li>").appendTo(".content");$(".content_li .class").each(function(s){$(this).html(data.content[s].class)}),$(".content_li .school").each(function(s){$(this).html(data.content[s].school)}),$(".content_li .status").each(function(s){$(this).html('<img src="img/hot1.png">'+data.content[s].status)}),$(".content_li .time1").each(function(s){$(this).html(data.content[s].time1)}),$(".content_li .click").each(function(s){$(this).html("<a href='###'>"+data.content[s].click+"</a>")}),$("#search").on("click",function(s){$(".content_li").hide();for(var c=0;c<$(".content_li").length;c++)$(".content_li:eq("+c+") span:eq(1)").html()==$(".schoolAll").val()&&$(".content_li:eq("+c+") span:eq(0)").html()==$(".classes").val()?$(".content_li:eq("+c+")").show():$(".content_li:eq("+c+") span:eq(1)").html()==$(".schoolAll").val()&&"全部学科"==$(".classes").val()?$(".content_li:eq("+c+")").show():$(".content_li:eq("+c+") span:eq(0)").html()==$(".classes").val()&&"全部校区"==$(".schoolAll").val()?$(".content_li:eq("+c+")").show():"全部学科"==$(".classes").val()&&"全部校区"==$(".schoolAll").val()&&$(".content_li").show();removeLi(),pageControl()}),pageControl(),$(".button").click(function(){console.log($("#text_t").val()),0==$(".text").eq(0).val()||0==$(".text").eq(1).val()||0==$(".text").eq(2).val()||0==$("#text_t").val()?$('<span class="input_span">请输入正确格式</span>').appendTo($("#input")).css({position:"absolute",top:110,left:210,color:"red",fontSize:14}):$(".input_span").remove()});