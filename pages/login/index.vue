<template>
  <div class="content d-flex justify-content-center align-items-center box-login">
    <form class="login-form" @submit.prevent="login_auth">
      <div class="card mb-0">
        <div class="card-body">
          <div class="text-center mb-3">
            <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
            <h5 class="mb-0"><b>ĐĂNG NHẬP HỆ THỐNG</b></h5>
          </div>
          <div class="form-group form-group-feedback form-group-feedback-left">
            <input type="text" class="form-control" placeholder="Email" v-model="formEmail">
            <div class="form-control-feedback">
              <i class="icon-user text-muted"></i>
            </div>
          </div>

          <div class="form-group form-group-feedback form-group-feedback-left">
            <input type="password" class="form-control" placeholder="Mật khẩu" v-model="formPassword">
            <div class="form-control-feedback">
              <i class="icon-lock2 text-muted"></i>
            </div>
          </div>

          <div class="form-group float-right">
            <input type="checkbox" v-model="savePassword" value="save"> <span>Lưu mật khẩu </span>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-info btn-block legitRipple">Đăng nhập <i class="icon-circle-right2 ml-2"></i></button>
            <div class="text-center" style="padding: 10px 0">-- Hoặc đăng nhập bằng --</div>
            <button type="button" class="btn btn-primary btn-block" @click="login_facebook">Facebook <i class="fa fa-facebook-square ml-2 fa-xs"></i></button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Đăng nhập hệ thống'
            }
        },

        async asyncData (context) {
            console.log(context.$auth.loggedIn)
            if (context.$auth.loggedIn === true) {
                context.redirect('/home')
            }
        },

        data () {
            console.log(this.$auth.getToken(this.$auth.strategy.name))
            console.log(this.$auth.user)
            console.log(this.$auth.loggedIn)
            return {
                formError: null,
                formEmail: '',
                formPassword: '',
                savePassword: ''
            }
        },

        computed: {
            redirect() {
                console.log('redirect')
                return (
                    this.$route.query.redirect &&
                    decodeURIComponent(this.$route.query.redirect)
                )
            },
            isCallback() {
                console.log('call back')
                return Boolean(this.$route.query.callback)
            }
        },
        methods: {
            async login_auth () {
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.formEmail,
                        password: this.formPassword
                    }
                }).then((res) => {
                    console.log(this.$auth.strategy.name)
                    console.log(this.$auth.getToken(this.$auth.strategy.name))
                    console.log(this.$auth)
                })
            },

            async login_facebook() {
                await this.$auth.loginWith('facebook')
            }
        }
    }
</script>
