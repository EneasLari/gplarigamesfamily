// var beforeplay = document.getElementById("beforeplay");
// var afterplay = document.getElementById("afterplay");
// var playbutton = document.getElementById("playvideo");
// var hiddeniframe = document.getElementById("video");
// var strings = hiddeniframe.src.split("/")


var videocards = document.getElementsByClassName("videocards")

function onYouTubeIframeAPIReady() {
    for (let index = 0; index < videocards.length; index++) {
        const element = videocards[index];
        var localbefore = element.querySelector("#beforeplay")
        var localafter = element.querySelector("#afterplay")
        var localplaybutton = element.querySelector("#playvideo")
        var localhiddeniframe = element.querySelector("#video")
        var strings = localhiddeniframe.src.split("/")
        console.log(localplaybutton)
            //InitializeEverything(localbefore, localafter, localplaybutton, localhiddeniframe);
        var player = null;

        player = new YT.Player(('player' + index), {
            videoId: strings[strings.length - 1],
            events: {
                'onReady': onPlayerReady
            }
        });

        function onPlayerReady(event) {
            console.log(event.target)
            localplaybutton.style.visibility = "visible"
            localplaybutton.addEventListener("click", function() {
                localbefore.style.display = "none";
                localafter.style.display = "block"
                localhiddeniframe.remove()
                player.playVideo();

            })
        }


    }
}



function InitializeEverything(beforeplay, afterplay, playbutton, hiddeniframe) {

}