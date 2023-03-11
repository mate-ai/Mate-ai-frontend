<template>
  <div id="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
#hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 150px;
  }
  & h1 {
    color: $white;
    font-weight: 300;
    color: $green;
  }
}
</style>
