// Targeted DOM elements
var divAllLegislators = document.querySelector(".all-legislators");

// JSON API call
$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
  var legisResults = serverRes.results;
  var legisStr = "";
  forEach(legisResults, function(legisEntry,index,arr){
    legisStr = "<div class='legislator col-xs-12 col-sm-6 col-md-4 col-lg-4'>"
    legisStr +=   "<div class='legis-block thumbnail'>"
    legisStr +=     "<h3>" + legisEntry.first_name + " " + legisEntry.last_name + "</h3>";
    legisStr +=     "<h4>" + legisEntry.title + " — " + legisEntry.party + "-" + legisEntry.state_name;
    legisStr +=     "<ul>"
    legisStr +=       "<li>Phone Number: " + legisEntry.phone + "</li>";
    legisStr +=       "<li>Website: " + legisEntry.website + "</li>";
    legisStr +=       "<li>Facebook: " + legisEntry.facebook_id + "</li>";
    legisStr +=       "<li>Twitter: " + legisEntry.twitter_id + "</li>";
    legisStr +=     "</ul>";
    legisStr +=     "<p>Term Ends: " + legisEntry.term_end + "</p>";
    legisStr +=  "</div></div>"
    divAllLegislators.innerHTML += legisStr;
  })
})
