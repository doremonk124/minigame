export default function ({ store,redirect }) {
  if (store.state.$auth.loggedIn === 'true') {
    return redirect('/home')
  }
}
