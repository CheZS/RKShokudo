function getRandomRestaurant() {
    var randomButton = $("#randomButton");
    randomButton.addClass('loading');
    $.ajax({method: "GET", url: "random"}).done(function(data) {
        if (!data) {
            return;
        }
        $("#restaurant")[0].innerHTML = data;
    }).always(function() {
        randomButton.removeClass('loading');
    });
}

$("#randomButton").click(getRandomRestaurant);

window.onload = getRandomRestaurant;
