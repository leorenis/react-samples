const requestModal = document.querySelector('.new-request')
const requestLink = document.querySelector('.add-request')

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open')
})

// close request modal
requestModal.addEventListener('click', e => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open')
  }
})

// say Hello function call
const button = document.querySelector('.call')
button.addEventListener('click', () => {
  // Get function reference
  const sayHello = global.firebase.functions().httpsCallable('sayHello')
  sayHello({ name: 'LRS' }).then(result => {
    console.log(result.data)
  })
})
