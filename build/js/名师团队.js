$(".course_tab_li").mouseover(function(){$(".cou_hide").not(function(){$(this).hide()}).hide(),$(".teacher li").not(function(){$(this).css("display","block")}).css("display","none"),$(".cou_hide").eq($(this).index()).show(),$(".teacher li").eq($(this).index()).css("display","block")});