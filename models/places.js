const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
 name: { type: String, required: true },
 pic: { type: String, default: 'https://source.unsplash.com/random/400x400/?city,night' },
 cuisines: { type: String, required: true },
 city: { type: String, default: 'Anytown' },
 state: { type: String, default: 'USA' },
 founded: {
   type: Number,
   min: [1673, 'Did they even have numbers back then? 🧐'],
   max: [new Date().getFullYear(), 'Time to break out the DeLorean! ⏰🚗']
 },
 comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function() {
 return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
