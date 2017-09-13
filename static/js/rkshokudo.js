$("#randomButton").click(function() {
    $.ajax({method: "GET", url: "random"}).done(function(data) {
        if (!data) {
            return;
        }
        $("#restaurant")[0].innerHTML = data;
    });
});