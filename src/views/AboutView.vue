<template>
  <div id="about">
    <h1>{{ $t('about') }}</h1>
    <img src="../assets/meme.png">
    <span>{{ $t('luck') }}</span>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}
h1 {
  color: $green;
  text-align: center;
}
img {
  width: 500px;
}
span {
  color: $black;
  border-radius: 5px;
  font-weight: 600;
  padding: 5px 10px;
  background-color: $green;
}
</style>
