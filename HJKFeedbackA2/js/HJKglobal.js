function init(){

}

$(document).ready(function () {
    init();

    // Variable for checkbox in add form page
    const checkbox = $("#checkRating");
    // Variable of hidden form in add form page
    const ratingForm = $(".rating-form");

    // Hide the form for rating default
    ratingForm.hide();

    // Show the form for rating when the checkbox is clicked
    checkbox.click(function(){
        ratingForm.toggle(600);
    });

});

