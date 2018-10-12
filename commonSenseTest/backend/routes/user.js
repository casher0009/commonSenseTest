var express = require('express');
var router = express.Router();
//var fetch = require('node-fetch');

const userInteraction = require('../models/User');




//get query
router.get('/queries', (req, res) => {
  userInteraction.find()
      .then(queriesRequest => {
          return res.status(200).json(queriesRequest); //200: The request was fulfilled.                       
      })
      .catch(e => next(e))

});

/* CREATE a new query REST API. */
router.post('/queries', (req, res, next) => {
  const theQuery = new userInteraction({
    apiQuestion: req.body.apiQuestion,
    apiAnswers: req.body.apiAnswers,
  });

  theQuery.save()
  .then(theQuery => {
    res.json({
      message: 'New query made!',
      id: theQuery._id
    });
  })
  .catch(error => next(error))
});



module.exports = router;