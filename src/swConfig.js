// eslint-disable-next-line
export default {
  onUpdate: registration => {
    registration.unregister().then(() => {
      window.location.reload()
    })
  },
}
