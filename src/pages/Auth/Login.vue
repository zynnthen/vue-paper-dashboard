<template>
  <div
    class="container d-flex justify-content-center align-items-center min-vh-100"
  >
    <div class="card p-4 shadow-lg" style="max-width: 400px; width: 100%">
      <h2 class="card-title text-center">Login</h2>
      <form @submit.prevent="login" class="mt-3">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            @input="clearErrorMessage"
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
            @input="clearErrorMessage"
            type="password"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block mt-4">
          Login
        </button>
        <div v-if="errorMessage" class="alert alert-danger mt-3">
          {{ errorMessage }}
        </div>
        <div class="text-center mt-3">
          <router-link to="/register" class="text-muted"
            >Don't have an account? Register</router-link
          >
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
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Login failed:", error);

        let errorCode = error.code;
        let errorMessage = error.message;

        // Attempt to parse the error message if it contains JSON
        try {
          const parsedError = JSON.parse(error.message);
          if (parsedError.error) {
            errorCode = parsedError.error.code;
            errorMessage = parsedError.error.message;
          }
        } catch (e) {
          // If parsing fails, use the original message
          errorMessage = error.message;
        }

        this.errorMessage = `Login failed: ${errorCode} - ${errorMessage}`;
      }
    },
    clearErrorMessage() {
      this.errorMessage = "";
    },
  },
};
</script>
