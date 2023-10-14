let url = "https://www.espncricinfo.com/series/icc-cricket-world-cup-2023-24-1367856"
const request = require("request");
const cheerio = require("cheerio");
request(url, callback);

function callback(err,res,body) {
    if (err) {
        console.log("error" , err);
    } else {
        handleHtml(body);
    }
}
function handleHtml(Html) {
    let selecTool = cheerio.load(Html);
    let title = selecTool(`a[title="View All Fixtures"]`);
    // atter method => all attrebute ke vale lane ma help krta ha
    
   
    let relativelink = title.attr("href");
    console.log(relativelink);
    let fullLink = "https://www.espncricinfo.com" + relativelink;
    console.log(fullLink);
    // console.log(title);
}
//  current link => https://www.espncricinfo.com/series/icc-cricket-world-cup-2023-24-1367856
//next page link => https://www.espncricinfo.com/series/icc-cricket-world-cup-2023-24-1367856/match-schedule-fixtures-and-results