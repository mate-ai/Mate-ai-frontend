<template>
  <div id="home">
    <HelloWorld v-bind:msg="$t('message')"/>
    <div id="home__components">
      <graphql />
      <hr>
      <i18n />
    </div>
    <div id="home__docs">
      <h1>{{ $t('docs') }}</h1>
      <ul>
        <a href="https://router.vuejs.org">vue-router</a>
        <a href="https://apollo.vuejs.org">apollo (graphql client)</a>
        <a href="https://v4.apollo.vuejs.org/guide-composable/setup.html">apollo-composable</a>
        <a href="https://vue-i18n.intlify.dev">vue-i18n</a>
        <a href="https://vue-meta.nuxtjs.org">vue-meta</a>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import HelloWorld from '@/components/HelloWorld.vue'
import graphql from '@/components/Graphql.vue'
import i18n from '@/components/I18n.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld, graphql, i18n
  },
  beforeMount() {
    useMeta({
      title: this.$i18n.t('router.home'),
    })
  },
}
</script>

<style lang="scss">
#home {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  &__components {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 20px;
  }
  &__docs {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    & h1 {
      color: $white;
      font-size: 25px;
      text-transform: capitalize;
    }
    & ul {
      display: flex;
      justify-content: center;
      column-gap: 10px;
      & a {
        color: $green;
        text-decoration: underline;
      }
    }
  }
}

</style>