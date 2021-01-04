// var beforeplay = document.getElementById("beforeplay");
// var afterplay = document.getElementById("afterplay");
// var playbutton = document.getElementById("playvideo");
// var hiddeniframe = document.getElementById("video");
// var strings = hiddeniframe.src.split("/")


var videocards = document.getElementsByClassName("videocards")

for (let index = 0; index < videocards.length; index++) {
    const element = videocards[index];
    var playbutton = element.querySelector("#playvideo");
    playbutton.style.visibility = "visible"
    console.log(playbutton)
    playbutton.addEventListener("click", function (event) {
        var video = element.querySelector("#video");
        var beforeplay = element.querySelector("#beforeplay");
        beforeplay.style.display = "none"

        var afterplay = element.querySelector("#afterplay");
        afterplay.style.display = "block"

        console.log(video.src)
        event.preventDefault();
        console.log(video.src)
        console.log("WE WILL call here the function for playing video " + index)
    })

}

var footeryear=document.getElementById("footeryear");
footeryear.innerHTML=(new Date()).getFullYear();