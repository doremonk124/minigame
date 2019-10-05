<template>
    <div class="container d-flex align-items-center justify-content-center flex-column">
          <img :src="avatar" alt="">
          User : {{name}}
          <button type="button" @click="logout">Logout</button>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        data() {
            console.log(this.$auth.user)
            let name
            let avatar
            if (this.$auth.user.username) {
                name = this.$auth.user.username
            } else {
                avatar = this.$auth.user.picture.data.url
                name = this.$auth.user.name
            }
            return {
                name : name,
                avatar : avatar
            }
        },
        methods : {
            logout() {
                this.$auth.logout()
            }
        }
    }
</script>



<style scoped>
  .container {
    min-height: 70vh;
  }
</style>
