<!-- 使用しない -->
<template>
  <div class="home">
    <div class="content-wrapper">
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <div class="button-container">
          <button @click="navigateTo('folder')">Folder</button>
          <button @click="navigateTo('note')">Note</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHome',
  methods: {
    navigateTo(route) {
      this.$router.push(`/${route}`)
    }
  }
}
</script>

<style scoped>
.home {
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

.button-container {
  display: flex;
  gap: 2rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>