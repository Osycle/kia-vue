const express = require('express')

// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')

// Import API Routes
app.use(users)
app.use(test)

console.log(app, "1111111111Я тут")

// Export express app
module.exports = app

// Start standalone server if directly running
console.log((require.main === module), "22222222Я тут")
if (require.main === module) {
  const port = 3001 || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
