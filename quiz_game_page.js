player1name = localStorage.getItem("player_name1");
player2name = localStorage.getItem("player_name2");
console.log(player1name);
console.log(player2name);
player1score = 0;
player2score = 0;
document.getElementById("player_name1").innerHTML=player1name;
document.getElementById("player_name2").innerHTML=player2name;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
function send() {
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text'id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick'check()'>check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1"){
            player1score = player1score + 1;
            console.log("working1_score");
            document.getElementById("player1score").innerHTML= player1score;
        }
        else{
            player2score = player2score + 1;
            console.log("working2_score");
            document.getElementById("player2score").innerHTML= player2score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML ="Question Turn - " + player_name2;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML ="Question Turn - " + player_name1;
    }
    }
