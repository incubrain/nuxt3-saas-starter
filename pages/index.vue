<template>
  <div>
    <h1 class="text-color:white">
      Welcome to the homepage
    </h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

html{
  font-size: 20px;
}
body{
  font-family: sans-serif;
  margin: 1rem;
}

.container{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    max-width: 1440px;
    margin: 0 auto;
}

.tile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tile:nth-child(1){
    grid-column: span 4;
    grid-row: span 2;
}

.tile:nth-child(2),
.tile:nth-child(3){
    grid-column: span 2;
}

.tile:nth-child(4),
.tile:nth-child(5){
    grid-column: span 3;
}
@media screen and (max-width: 650px){
    .container{
        display: block;
    }
    .tile{
        margin-bottom: 1rem;
    }
}

</style>
