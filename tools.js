function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var id = getUrlVars()["id"].toUpperCase();
if(id !== null){
$.ajax({
    type: "POST",
    url: "https://jbvi.co.uk/api.php",
    data: {"id": id},
    dataType:'JSON',
    success: function(response){
        document.title = response.title;
        document.getElementById("title").innerHTML=response.title;
        document.getElementById("judul").innerHTML=response.title;
        document.getElementById("desc").innerHTML=response.desc;

    var img = document.createElement("img");
    img.src = response.thumb;
    var src = document.getElementById("thumb");
    src.appendChild(img);

    }
});
}
