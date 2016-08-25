$(function(){
    
/*******************************菜单栏顶部点击展开收缩**********************************/  
$(document).on("click",".left_menu_flex",function(){
    if($(".left_menu_flex .to_right").css("display")=="none"){
        $(".left_menu_flex .to_right").css("display","block");
        $(".left_menu_flex .to_left").css("display","none");
        $(".content").css("display","none");
        $(".left_main").css("width","50px");
        $(".left_menu").css("width","65px");
        $(".left_menu_right").css("left","50px");
    }else if($(".left_menu_flex .to_right").css("display")=="block"){
        $(".left_menu_flex .to_right").css("display","none");
        $(".left_menu_flex .to_left").css("display","block");
        $(".content").css("display","inline-block");
        $(".left_main").css("width","180px");
        $(".left_menu").css("width","195px");
        $(".left_menu_right").css("left","180px");
    }
})

/***********************一级菜单标题前图标变化**************************/ 
$(document).on("click",".panel-head",function(){
    if($(".to_up",$(this)).css("display") == "none"){
        $(".to_down",$(this)).css("display","none");
        $(".to_up",$(this)).css("display","block");
        $(this).css("background-color","#22282e");
    }else if($(".to_up",$(this)).css("display") == "block"){
                $(".to_down",$(this)).css("display","block");
                $(".to_up",$(this)).css("display","none");
                $(this).css("background-color","#37424f");
    }
})

/***********************菜单栏二级菜单点击右侧菜单栏展开**************************/ 
$(document).on("click",".collapse_option",function(){
    $(".left_menu_flex .to_right").css("display","block");
    $(".left_menu_flex .to_left").css("display","none");
    $(".content").css("display","none");
    $(".left_main").css("width","50px");
    $(".left_menu").css("width","65px");
    $(".menu_right_icon").html("&#xe609;");
    $(".left_menu_right").css("left","50px");
    $(".left_menu_right").width("0");
    $(".left_menu_right").animate({width:"180px"});
    $(".collapse_option").css("background-color","#293038");
    $(this).css("background-color","#0099cc");
})

/***********************菜单栏二级菜单鼠标移入提示信息显示**************************/ 
/*$(document).on("mouseover",".collapse_option",function(e){
    var text = $(".content",$(this)).html();
    $("#tips").css("display","block");
    $("#tips").html(text);
    var left = e.clientX + 5 ;
    var top = e.clientY + 5 ;
    $("#tip")
})

$(document).on("mouseout",".collapse_option",function(e){
    var text = $(".content",$(this)).html();
    $("#tips").css("display","none");
})*/

/***********************三级菜单栏图标点击菜单收缩**************************/ 
$(document).on("click",".menu_right_icon",function(){
    $(".menu_right_icon").html("");
    $(".left_menu_right").css("width","0");
})


})