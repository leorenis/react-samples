const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// HTTP request 1
exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100)
    response.send(number.toString())
})

// HTTP request 2 
exports.toTheDojo = functions.https.onRequest((request, response) => {
    const url = 'https://www.google.com'
    response.redirect(url)
})

// HTTP callable function
exports.sayHello = functions.https.onCall((data, context) => {
    const { name } = data
    return `Hello, ${name}`
})