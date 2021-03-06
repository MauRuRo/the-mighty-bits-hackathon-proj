$(document).ready(function(){
    // disable next button
    $(".next-button:visible").attr('disabled', 'disabled')

    // hide all questions except the first one
    $(".question-form").hide()
    $("#form1").show()

    // add attr checked for clicked answer
    $(document).on("click", "input", function(){
        $("input:visible").removeAttr('checked')
        $(this).attr('checked', 'checked')
        if ($(".wait-text:visible").length == 0){
            $(".next-button:visible").removeAttr('disabled')
        }
        
    })
    $(document).on("click", "label", function(){
        let input_name = $(this).attr('for')
        let radio_input = $(`input:visible[name='${input_name}']`)
        $("input:visible").removeAttr('checked')
        radio_input.attr('checked', 'checked')
        if ($(".wait-text:visible").length == 0){
            $(".next-button:visible").removeAttr('disabled')
        }
    })
    // check if answer is correct: add appropriate css and move to next question
    $(document).on("click", ".next-button", function(){
        $(".next-button:visible").attr('disabled', 'disabled')
        let currentwait = $(".question-form:visible").find(".wait-text")
        $(".question-form:visible").find(".wait-text").removeAttr("hidden").show()
        let inputfield
        let answer
        inputfield = $("input:visible[checked='checked']")
        inputname = inputfield.attr("id")
        console.log(inputname)
        answer = $("input:visible[checked='checked']").attr('value')
        console.log(answer)
        if (answer == "correct") {
            $(`label[for='${inputname}']`).addClass("correct")
        } else {
            $(`label[for='${inputname}']`).addClass("wrong")
        }
        if (answer == "correct") {
            let score = parseInt($("#score").html())
            let newscore = score + 10
            $("#score").html(newscore)
        }
        nextQuestionTime()
        setTimeout(function(){
            let current = $(".question-form:visible")
            let next = $(".question-form:visible").next(".question-form")
            if (current.attr("id") != "form9"){
            current.hide()
            next.show()
            let currentimage = $(".lm-image").attr("id")
            let imageno = parseInt(currentimage.split("-")[2])
            let newno = imageno + 1
            let newid = "lm-i-" + newno
            $(".lm-image").removeAttr("id").attr("id", newid)

            } else {
                alert('end of trivia game')
            }
        }, 3000)
    })
    
    // move to next question
    function nextQuestionTime(){
        setTimeout(function(){
            let currentcount = parseInt($(".time-counter:visible").html())
            if (currentcount != 1) {
                let count = currentcount - 1
                $(".time-counter:visible").html(count)
                nextQuestionTime()
            }
        }, 1000)
    }
})

// //Initialise map function
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         disableDefaultUI: true,
//         center: {
//             lat: 53.35001680243868, //Dublin
//             lng: -6.262019153232362
//         }
//     });
// };