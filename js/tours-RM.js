$(document).ready(function() {

    //Hide tour menu divs to start, show placeholder image.



    var daynumber
        //  ('#startToursMenu').slideDown();
        //  ('#oneDayTour').hide();
        //  ('#twoDayTour').hide();
        //  ('#threeDayTour').hide();

//this should


    //Check input on click


        ('#button1').click(function() {
            if ('#daynumber1').val() == '1'); { //If input value is 1.
            ('.startToursMenu').hide();
            ('.oneDayTour').slideDown();
            ('.twoDayTour').hide();
            ('.threeDayTour').hide();
        }
        else if ('#daynumber1').val() == '2') { //If input value is 2.
        ('.startToursMenu').hide();
        ('.oneDayTour').hide();
        ('.twoDayTour').slideDown();
        ('.threeDayTour').hide();
    }
    else if ('#daynumber').val() == '3') { //If input value is 3.
    ('.startToursMenu').hide();
    ('.oneDayTour').hide();
    ('.twoDayTour').hide();
    ('.threeDayTour').slidedown();
}
else ('input').val() == '2') { //If input value is not 1, 2 or 3.
('startToursMenu').slideDown();
('oneDayTour').hide();
('twoDayTour').hide();
('threeDayTour').hide();
}
});
