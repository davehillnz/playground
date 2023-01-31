$( function () {
    $( "#picView" ).click( function (){
        if( $( "html" ).hasClass ( "showPic" ) ){
            $( "html" ).removeClass( "showPic" );
        }
        else{
            $( "html" ).addClass( "showPic" );
        }
        
    })
})


