const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
// GET /places/new
  router.get('/new', (req, res) => {
  res.render('places/new')
})

// // GET /places/:id
// router.get('/:id', (req, res) => {
//   let place = {
//     id: req.params.id,
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '../images/thai_rest.jpg'
//   }
//   res.render('places/show', { place })
// })

module.exports = router