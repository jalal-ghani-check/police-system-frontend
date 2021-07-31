export default ({ app, store }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('validateIntegerKeyPress', (evt) => { // For Integer only, 0 to 9
    const charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode === 46 || (charCode > 31)) && (charCode < 48 || charCode > 57)) {
      evt.preventDefault()
    }
    return true
  })



  inject('scrollToTop', (id) => {
    if (!id) {
      id = 'body'
    }
    document.getElementById('body').scrollIntoView()
  })


  inject('renderWarrantRejectPopup', (warrantId) => {
    store.dispatch('warrant/generateWarrantRejectPopup', {
      warrantId
    })
  })

  inject('renderWarrantAcceptPopup', (warrantId) => {
    store.dispatch('warrant/generateWarrantAcceptPopup', {
      warrantId
    })
  })

  inject('renderWarrantDetailPopup', (warrantId , warrantDetail) => {
    store.dispatch('warrant/generateWarrantDetailPopup', {
      warrantId,
      warrantDetail
    })
  })

  inject('getRangeReverse', (size, startAt) => {
    return [...Array(size).keys()].map(i => startAt - i);
  })
}
