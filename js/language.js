var abouttext="Videogames can clearly consume the attention of children and adolescents.For sure videogames is one of the main entertaiment media of young people,that does not mean that they can not serve well as educational media with significant good results in the learning process. Our goal is to design and implement fun and still educational games. If a child can't learn the way we teach, maybe we should teach the way they learn."

function createplaystorbadge(hreflink,imgsrc){
    var node = document.createElement("a");                 // Create a <a> node
    node.href=hreflink
    var imgnode = document.createElement("img");         // Create a img
    imgnode.src=imgsrc;
    imgnode.className="img-fluid"
    node.appendChild(imgnode);
    return node;                              // Append the img to <a>
    //document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with
}

var translations={
    en:{
        phrase:"Learn or play? Why not both?",
        navgames:"Games",
        navabout:"About",
        navcontact:"Contact",
        aboutpar:abouttext,
        aboutsection:"About",
        gamesection:"Our Games",
        contactme:"Ask me anything",
        name:{placeholder:"Name"},
        email:{placeholder:"Email"},
        phone:{placeholder:"Phone"},
        message:{placeholder:"Message"},
        labelname:"Name",
        labelemail:"Email",
        labelmesssage:"Message",
        location:"Location",
        athens:"Athens",
        socialtext:"You also can find us",
        labelphone:"Phone",
        sendMessageButton:"Send",
        playstorebadge:{
            hreflink:"http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
            imglink:"https://play.google.com/intl/en_us/badges/static/images/badges/el_badge_web_generic.png"
        },
        menubutton:"Menu"
    }
}

// $.get("https://ipinfo.io", function(response) {
//     console.log(response.country);
// }, "jsonp");
//
var request = new XMLHttpRequest();
request.open('GET', 'http://ip-api.com/json');
request.setRequestHeader('Accept', 'application/json');
request.onreadystatechange = function () {
    //console.log("STATE="+this.readyState);
  if (this.readyState === 4) {
    //console.log("LAnguage="+JSON.parse(this.responseText).countryCode);
    //if the ip is NOT from greece or icant get the ip then translate to english
    //console.log("ISGREEK="+(JSON.parse(this.responseText).countryCode==="GR"));
    //console.log("ISNULL="+(JSON.parse(this.responseText).countryCode==null));
    if(!(JSON.parse(this.responseText).countryCode==="GR")){
        //console.log("YES ITS IS="+(JSON.parse(this.responseText).countryCode==="GR"));
        //document.getElementById("navphrase").textContent=translations.en.phrase;
        document.getElementById("navgames").textContent=translations.en.navgames;
        document.getElementById("navabout").textContent=translations.en.navabout;
        document.getElementById("navcontact").textContent=translations.en.navcontact;
        document.getElementById("aboutpar").textContent=translations.en.aboutpar;
        document.getElementById("contactme").textContent=translations.en.contactme;
        document.getElementById("name").placeholder=translations.en.name.placeholder;
        document.getElementById("email").placeholder=translations.en.email.placeholder;
        document.getElementById("phone").placeholder=translations.en.phone.placeholder;
        document.getElementById("message").placeholder=translations.en.message.placeholder;
        document.getElementById("labelname").textContent=translations.en.labelname;
        document.getElementById("labelemail").textContent=translations.en.labelemail;
        document.getElementById("labelphone").textContent=translations.en.labelphone;
        document.getElementById("labelmessage").textContent=translations.en.labelmesssage;
        document.getElementById("location").textContent=translations.en.locations;
        document.getElementById("athens").textContent=translations.en.athens;
        document.getElementById("socialtext").textContent=translations.en.socialtext;
        document.getElementById("aboutsection").textContent=translations.en.aboutsection;
        document.getElementById("gamesection").textContent=translations.en.gamesection;
        document.getElementById("sendMessageButton").textContent=translations.en.sendMessageButton;

        document.getElementById("playstorebadge").textContent='';
        var badge=translations.en.playstorebadge;
        document.getElementById("playstorebadge").appendChild(createplaystorbadge(badge.hreflink,badge.imglink))
        
        document.getElementById("menubutton").textContent=translations.en.menubutton;

    }
  }
};

request.send();