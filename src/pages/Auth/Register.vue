<template>
  <div
    class="container d-flex justify-content-center align-items-center min-vh-100"
  >
    <div class="card p-4 shadow-lg" style="max-width: 400px; width: 100%">
      <h2 class="card-title text-center">Register</h2>
      <form @submit.prevent="register" class="mt-3">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group mt-2">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button disabled type="submit" class="btn btn-disabled btn-block mt-4">
          Register
        </button>
        <div class="text-center mt-3">
          <router-link to="/login" class="text-muted"
            >Already have an account? Login</router-link
          >
        </div>
        <div class="text-center mt-3">
          Note: Registration is disabled in the demo version.
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/firebaseConfig";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  },
};
</script>
