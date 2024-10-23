<template>
  <div id="app">
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
<!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
        <li><router-link to="/Folder">Folder</router-link></li>


        <li><router-link to="/Note">Note</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
