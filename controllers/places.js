const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '../images/thai_rest.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '../images/cafe.jpg'
  }]
  res.render('places/index', { places })
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places/:id
router.get('/:id', (req, res) => {
  let place = {
    id: req.params.id,
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '../images/thai_rest.jpg'
  }
  res.render('places/show', { place })
})

module.exports = router
