$(document).ready(function () {

    var selectedAnswers = [];

    $(".submit").on("click", function (event) {

        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),

            answers: function () {
                for (i = 1; i < 11; i++) {
                    var answer = $('input[name="q' + i + '"]:checked').val();
                    selectedAnswers.push(parseInt(answer));
                }
                return selectedAnswers;
            }
        };

        console.log(newFriend);

        $.post("/api/friends", newFriend, function (data) {

            if (data) {
                alert("Get ready to make new friends!");
            } else {
                alert("Uh-oh! Something went wrong with your survey!");
            }

            // clears the form on submit
            $("#name").val("");
            $("#photo").val("");
            $('input[type="radio"]').attr('checked', false);

        }).done(function () {
            // calls friends api
            $.ajax({
                url: "/api/friends",
                method: "GET",
                datatype: 'json'

            }).done(function (res, err) {
                if (err) {
                    console.log(err);
                }
                // console.log(res);
                var current = res[res.length - 1];
                // stores new user's best match and displays to modal
                var bestFriend = current.bestie;
                console.log(bestFriend);
                $("#friend-name").text("Hi " + current.name + ", my name is " + bestFriend
                    .name + "!");
                $("img#friend-photo").attr("src", bestFriend.photo);
            });
        });
    });
});