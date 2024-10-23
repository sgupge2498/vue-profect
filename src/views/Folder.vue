<template>
  <div class="folder">
    <div class="content-wrapper">
      <header>
        <h1>Folder Page</h1>
      </header>
      <main>
        <div class="content">
          <h2>Folder Content</h2>
          <button @click="goHome">Back to Home</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFolder'
  // methods: {
  //   goHome() {
  //     this.$router.push('/')
  //   }
  // }
}
</script>

<style scoped>
.folder {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 1280px;
}

header {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
}

.content {
  text-align: center;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

button:hover {
  background-color: #555;
}
</style>