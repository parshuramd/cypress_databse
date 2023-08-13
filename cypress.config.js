const { defineConfig } = require("cypress");
const mysql = require('mysql2');
function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    })
  })
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        queryDb: (query) => {
          return queryTestDb(query, config);
        }
      })
    },
  },
  env:{
    db:{
      host:'localhost',
      user:'root',
      password:'Prisha@2022',
      database:'cypress_test'
    }
  }
});
