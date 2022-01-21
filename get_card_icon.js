// https://twisted-wonderland.fandom.com/wiki/Card_Stats

var ssr_rows = $( "tr[style='border-bottom:1px solid white']" );
var img_urls = "";

for (i = 0; i < ssr_rows.length; i++) {

    var img_src = document.getElementsByTagName("img")[i].getAttribute('src');
    img_urls = img_urls + img_src + "\n";

    console.log(img_urls);
}