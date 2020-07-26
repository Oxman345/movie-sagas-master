const express = require('express');
const pool = require('../modules/pool');
const { query } = require('../modules/pool');
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
const searchQuery = `SELECT * FROM genres;`;
//pool is our connection to the database
//we are going to query a queryString command to pool (database)
pool.query(searchQuery)
.then(response=>{
  console.log('Sending response:', response.rows)
  res.send(response.rows);
}).catch(error =>{
  console.log('Error in get:', error)
  res.sendStatus(500)
})

});