
function login() {
    player_name1 = document.getElementById("user_name_1").value;
    player_name2 = document.getElementById("user_name_2").value;
    localStorage.setItem("player_name1", player_name1);
    localStorage.setItem("player_name2", player_name2);
    console.log("test");
    window.location = "quiz_game_page.html";
}

function twitter() {
    window.alert("Our site Is on Maintance so Twitter And Facebook Sign In Option Won't be Working  . We are sorry for that. Have A Nice Day (^◡^ ).");
}

function facebook() {
    window.alert("Our site Is on Maintance so Twitter And Facebook Sign In Option Won't be Working  . We are sorry for that. Have A Nice Day (^◡^ ).");
}