$( document ).ready(function() {

    let questionArray = [
        "Summer is better than winter.",
        "Spicy food is the best.",
        "You enjoying races (like a 5K or marathon).",
        "Rainy days are better then sunny ones.",
        "Sports are the best things ever.",
        "You're ever an optimist.",
        "Country music is where it's at.",
        "You're a morning person",
        "Yoga is the best thing ever!",
        "Math is something to do for fun."
    ];

    for (let i = 0; i < questionArray.length; i++) {
        let currentNum = parseInt(i+1);
        $(".q-body").append(
            "<div class='form-group'>" +
                "<label for='question-" + currentNum + "'>" +
                    "<h4>" + currentNum + ". " + questionArray[i] + "</h4>" +
                "</label>" +
                "<div class='card-body' id='options'>" +
                    "<div class='form-check form-check-inline'>" +
                        "<label class='form-check-label'>" +
                            "<input class='form-check-input' type='radio' name='q1' id='inlineRadio1' value='1'> 1" +
                        "</label>" +
                    "</div>" +   
                    "<div class='form-check form-check-inline'>" +
                        "<label class='form-check-label'>" +
                            "<input class='form-check-input' type='radio' name='q1' id='inlineRadio2' value='2'> 2" +
                        "</label>" +
                    "</div>" +
                    "<div class='form-check form-check-inline'>" +
                        "<label class='form-check-label'>" +
                            "<input class='form-check-input' type='radio' name='q1' id='inlineRadio3' value='3'> 3" +
                        "</label>" +
                    "</div>" +
                    "<div class='form-check form-check-inline'>" +
                        "<label class='form-check-label'>" +
                            "<input class='form-check-input' type='radio' name='q1' id='inlineRadio4' value='4'> 4" +
                        "</label>" +
                    "</div>" + 
                    "<div class='form-check form-check-inline'>" +
                        "<label class='form-check-label'>" +
                            "<input class='form-check-input' type='radio' name='q1' id='inlineRadio5' value='5'> 5" +
                        "</label>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "<hr>");
    };
});