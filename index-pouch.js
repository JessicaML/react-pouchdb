var doc = {
  "_id": "1",
  "title": "Mittens2",
  "body": "new feature!!!!!!",
  "date-created": "30-02-2017",
  "notif-viewed": false
};
// Destroy the database before doing anything, because I want 
// you to see the same thing if you reload.
// Ignore the man behind the curtain!

new PouchDB('sample').destroy().then(function () {
  return new PouchDB('sample');
}).then(function (db) {
  //
  // IMPORTANT CODE STARTS HERE
  //

  db.put(doc).then(function () {
    return db.get('1');
  }).then(function (doc) {
    document.getElementById('display2').innerHTML = 'Notifications: ' + JSON.stringify(doc);
  });

  //
  // IMPORTANT CODE ENDS HERE
  //
});