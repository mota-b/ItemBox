
/* Slidebars */
( function ( $ ) {
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // Initialize Slidebars
    controller.init();

    // Left Slidebar controls
    $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1' );
    } );

   

    // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
        
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
        
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
        $("#menu-icon span a i").css({"transform":"rotate(-90deg)"});
        $("#main-content").css({"filter":"brightness(100%)"})
    } );

    // Initilize, exit and css reset
    $( '.js-initialize-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init();
    } );

    $( '.js-exit-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit();
    } );

    $( '.js-reset-slidebars-css' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css();
    } );

} ) ( jQuery );

/* DOM SlideBar */
$(document).ready(function(){
    
    // Display menu
    $("#icon-list").children("li").each(function(index, elem){
        $(elem).show("slow");
    })

    // Slidebar toggle
    $("#menu-icon,#menu-icon span a i").click(function () {
        if($("#main-content").attr("class")==""){
            $("#menu-icon span a i").css({"transform":"rotate(0deg)"});
            $("#main-content").css({"filter":"brightness(60%)"})
        }
        else{
            $("#menu-icon span a i").css({"transform":"rotate(-90deg)"});
            $("#main-content").css({"filter":"brightness(100%)"})
        } 
    })

    
    /* Nav Clicks */
    $("#icon-list .nav-item").click(function(){
        var index = $(this).index();
       
        
        if( !$(this).hasClass("selected") ){
            
            if($(this).index()!= 2){
                $("#collapseGuest").removeClass("in");
            }
            $("#icon-list .nav-item,#nav-list .nav-item ").removeClass("selected");  
            $(this).addClass("selected");
            $("#nav-list .nav-item:eq("+(index-1)+")").addClass("selected");
        }
        else{
            $(this).removeClass("selected");
            $("#nav-list .nav-item:eq("+(index-1)+")").removeClass("selected");
        }
            
    })
    $("#nav-list .nav-item").click(function(){
        var index = $(this).index();
       
        
        if( !$(this).hasClass("selected") ){
            
            if($(this).index()!= 1){
                $("#collapseGuest").removeClass("in");
            }
            $("#icon-list .nav-item,#nav-list .nav-item ").removeClass("selected");  
            $(this).addClass("selected");
            $("#icon-list .nav-item:eq("+(index)+")").addClass("selected");
        }
        else{
            $(this).removeClass("selected");
            $("#icon-list .nav-item:eq("+(index)+")").removeClass("selected");
        }
            
    })
    
})