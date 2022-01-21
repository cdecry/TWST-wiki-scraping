// https://twisted-wonderland.fandom.com/wiki/Card_Stats

var ssr_rows = $( "tr[style='border-bottom:1px solid white']" );
var data = "";

for (i = 0; i < ssr_rows.length; i++) {
    var card_name = ssr_rows[i].children[0].getAttribute('data-sort-value');
    if (card_name == null) {
        card_name = '------------------------------------------------------------------------------------------------------';
    }
    data = data + card_name + "\n"
}
console.log(data);