const host = "lallah.db.elephantsql.com",
  database = "wyynaqgo",
  user = "wyynaqgo",
  password = "P2v-4H5OMWvr9JCA4olV0vqrreTq_fAv";

const pgp = require("pg-promise")({
  query: function (e) {
    console.log("QUERY:", e.query);
  },
});

const options = {
  host: host,
  database: database,
  user: user,
  password: password,
};

const db = pgp(options);

module.exports = db;
