$( function () {
    $( "#picView" ).click( function (){
        
        if( $( "html" ).hasClass ( "showPic" ) ){
            $( "html" ).removeClass( "showPic" );
            $( "#picView" ).html( "Show the pretty picture" );
        }
        else{
            $( "html" ).addClass( "showPic" );
            $( "#picView" ).html( "Hide the pretty picture" );
        }
        
    })
})


