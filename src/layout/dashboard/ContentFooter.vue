<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <!-- <li>
            <router-link :to="{ path: '/admin' }">Admin</router-link>
          </li> -->
          <li>
            <router-link :to="{ path: '/' }">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; {{ currentYear }} GTAsia Engineering Sdn Bhd 
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<style></style>
