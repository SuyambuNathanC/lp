errorMessage = document.getElementById("errorMessage");
chatData = "chatTranscript.lines";

var updateCallback = function(data){
    var value = data.newValue;
    var line = value[value.length -1];
    var movieName = line.text;
    console.log("movie: "+movieName);
    if (line.source.toLowerCase()==="visitor"){
        var url = "https://www.omdbapi.com?apikey=9c244dec&t="+movieName;
        fetch(url)
                .then(function(response){
                    return response.json();
                }
                ).then(function(res){
                    document.getElementById("Title").innerHTML = res.Title;
                    document.getElementById("Year").innerHTML = res.Year;
                    document.getElementById("Rated").innerHTML = res.Rated;
                    document.getElementById("Actors").innerHTML = res.Actors;
                    document.getElementById("Genre").innerHTML = res.Genre;
                    document.getElementById("Plot").innerHTML = res.Plot;
                }).catch(function(error){
                    console.log("Error: "+error);
                })
    }
};

var notifyWhenDone = function(error) {
    if (err){
        console.log("Error: "+err);
    }
    var chatData = "chatTranscript.lines";
    errorMessage.innerHTML = "Invalid movie name";
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(chatData, updateCallback, notifyWhenDone);
