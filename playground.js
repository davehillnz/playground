$( function () {
    $( "#picView" ).click( function (){
        alert ( "here" );
        if( $( "html" ).hasClass ( "showPic" ) ){
            $( "html" ).removeClass( "showPic" );
        }
        else{
            $( "html" ).addClass( "showPic" );
        }
        
    })
})


