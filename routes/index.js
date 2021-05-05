const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/demo', function(req, res, next) {
  res.render('demo');
});

router.post('/todo', function(req, res, next) {

  req.body

  const todos = [
    {
      title: 'Buy milk',
      done: false,
    },
    {
      title: 'Call mom',
      done: false,
    },
    {
      title: 'Prepare for presentation',
      done: true,
    },
  ];

  res.render('todo', {
    itemsToDo: todos.filter(item => !item.done),
    itemsDone: todos.filter(item => item.done),
  });
});

module.exports = router;
