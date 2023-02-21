
// Show the hidden rating form in the Add form page
function showHiddenRatingFrom(){

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
}

// Calculate the rating
function calculateOverall(){

    let foodQualityRating = parseInt($("#foodQualityRating").val());
    //
    let serviceRating = parseInt($("#serviceRating").val());
    //
    let valueRating = parseInt($("#valueRating").val());
    //
    let overallRating = parseInt((foodQualityRating + serviceRating + valueRating) * 100/15);
    $("#overallRating").val(overallRating);
}

// Default function
function init(){
   $("#foodQualityRating").on("input", calculateOverall());
   $("#serviceRating").on("input", calculateOverall());
   $("#valueRating").on("input", calculateOverall());
}


// When the page is loaded
$(document).ready(function () {
    init();
    showHiddenRatingFrom();
});
