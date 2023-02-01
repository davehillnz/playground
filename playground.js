$( function () {
    $( "#picView" ).click( function (){
        
        if( $( "html" ).hasClass ( "showPic" ) ){
            $( "html" ).removeClass( "showPic" );
            $( "#viewPic" ).html( "Show the pretty picture" );
        }
        else{
            $( "html" ).addClass( "showPic" );
            $( "#viewPic" ).html( "Hide the pretty picture" );
        }
        
    })
})


