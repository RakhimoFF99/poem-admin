<template>
  <div class="authentication-bg">
    <div class="account-pages pt-sm-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <nuxt-link to="/" class="mb-4 d-block auth-logo">
                <img
                  src="public/assets/images/logo-dark.png"
                  alt=""
                  height="22"
                  class="logo logo-dark"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Yusupov admin panel</h5>
                </div>
                <div class="p-2 mt-4">
                  <form>
                    <div class="mb-1">
                      <label class="form-label" for="username">Login</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        name="email"
                        placeholder="Loginni kiriting"
                        v-model.trim="login.userName"
                      />
                    </div>

                    <div class="mb-1">
                      <label class="form-label" for="userpassword">Parol</label>
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        name="password"
                        placeholder="Parolni kiriting"
                        v-model="login.password"
                      />
                    </div>

                    <div class="mt-3 d-flex flex-row-reverse">
                      <el-button type="primary mb-3 mx-4"  @click="loginUser"> Kirish </el-button>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center"></div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  layout: "authLayout",
  head() {
    return {
      title: "Tizimga kirish",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  data() {
    return {
      login: {
        userName: "",
        password: "",
      },
    };
  },

  async mounted() {},
  methods: {
    async loginUser() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });

        let user = this.$auth.user;

        if (user.type == "user") {
          this.$auth.logout();
        }
      } catch (err) {
        console.log(err);
        this.$toast.error("Login yoki parol noto'gri");
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.authentication-bg {
  min-height: 100vh;
  background-color: rgba(91, 140, 232, 0.25);
}
</style>
