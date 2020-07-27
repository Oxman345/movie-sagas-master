const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// // return all movies
// router.get('/', (req, res) => {
// const searchQuery = `SELECT * FROM movies;`;
// //pool is our connection to the database
// //we are going to query a queryString command to pool (database)
// pool.query(searchQuery)
// .then(response=>{
//   console.log('Sending response:', response.rows)
//   res.send(response.rows);
// }).catch(error =>{
//   console.log('Error in get:', error)
//   res.sendStatus(500)
// })

// });

// // return all movies
// router.get('/details/:id', (req, res) => {
//   //creates a route that targets a specific id then takes the info connected to that id 
//   //and sends that info to the details page of the movie clicked
//   const searchQuery = `SELECT * FROM movies WHERE id=$1;`;
//   //pool is our connection to the database
//   //we are going to query a queryString command to pool (database)
//   pool.query(searchQuery)
//   .then(response=>{
//     console.log('Sending response:', response.rows)
//     res.send(response.rows);
//   }).catch(error =>{
//     console.log('Error in get:', error)
//     res.sendStatus(500)
//   })
  
//   });

// return all favorite images
router.get('/', (req, res) => {
  // return all categories
  const queryText = `
    SELECT movies.id, title, description, poster, array_agg(genres.name)
    FROM movies
    JOIN movie_genres on movies.id = movie_genres.movie_id
    JOIN genres ON movie_genres.genre_id = genres.id
    GROUP BY movies.id
    ORDER BY title ASC;`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`***Error on query`,error);
          res.sendStatus(500);
      });
});

router.put('/', (req, res) => {
  console.log(req.body)
  const movie = req.body
  const queryText = `
    UPDATE movies 
    SET "title" = $1, "description" = $2
    WHERE "id" = $3;
      `
  const queryValues = [
    movie.title,
    movie.description,
    movie.id
  ]
  pool.query(queryText, queryValues)
  .then((result) => {
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log(`***Error updating movie`, error);
      res.sendStatus(500);
  })
});

module.exports = router;