var db = new PouchDB('kittens');

var doc = {
  "_id": "1",
  "title": "Mittens2",
  "body": "new feature!!!!!!",
  "date-created": "30-02-2017",
  "notif-viewed": false
};

db.put(doc).then(function () {
  return db.get('1');
}).then(function (doc) {
  document.getElementById('display2').innerHTML = 'Notifications: ' + JSON.stringify(doc);
});

