const { faker } = require('@faker-js/faker');
const fs = require('fs')

function generateFeeds() {
    var feeds = []
    for (var id = 0; id < 100; id++) {
        feeds.push({
            "feedId": id,
            "feedName": faker.animal.type(),
            "subscribe": false,
            "subscriptionId": null,
        })
    }
    return { "feeds": feeds }
}
module.exports = generateFeeds
let dataObj = generateFeeds();
fs.writeFileSync('db.json', JSON.stringify(dataObj, null, '\t'));