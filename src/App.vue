<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | MyVueApp.com` : `YOUR SITE` }}</template>
  </metainfo>
  <nav>
    <h1>{{ $t('router.title') }}</h1>
    <div>
      <router-link to="/">{{ $t('router.home') }}</router-link> |
      <router-link to="/about">{{ $t('router.about') }}</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  beforeMount() {
    useMeta({
      htmlAttrs: {
        lang: this.$i18n.locale,
      }
    })
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $black;
  height: 100vh;
}

nav {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  padding: 30px;

  h1 {
    color: $white;
    font-weight: 600;
  }

  a {
    font-weight: bold;
    color: $grey;
    padding: 0 5px;

    &.router-link-exact-active {
      color: $green;
    }
  }
}
</style>
