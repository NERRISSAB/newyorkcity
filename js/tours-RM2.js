$(document).ready(function() {

   $('#submitDay').click(function () {
       
       var checkDay =
       $('selectDay option:selected').val();
       
        switch (checkDay) {
            
            case "1":
                
                $('#tourMenu1').removeClass('startTourMenu');
                $('#oneDayTour').addClass('hideTourDivs');
               
                
                        break;
                        
            case "2":
                
                $('.tourMenu').removeClass('startTourMenu');
                $('.tourMenu').addClass('twoDayTour');
            
                
                        break;
                       
            case "3":
                        
                $('.tourMenu').removeClass();
                $('.tourMenu').addClass('threeDayTour');
                
                        break;
                        
            
            default:
            
            $('.tourMenu').text('Please select 1, 2 or 3.');
            
        }
   });
});
        