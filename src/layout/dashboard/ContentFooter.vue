<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{ path: '/admin' }">Admin</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">&copy; GTA Sdn Bhd</div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style></style>
