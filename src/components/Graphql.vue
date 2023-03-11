<template>
  <section id="graphql">
    <h1>{{ $t('graphql.title') }}</h1>
    <article v-for="article of articles.data" :key="article.id">
      <router-link v-bind:to="'/article/' + article.id">
        <span>{{ article.id }}</span>
        <h2>{{ article.title }}</h2>
    </router-link>
    </article>
    <p>{{ $t('graphql.router') }}</p>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable';
import GetPosts from '../queries/GetPosts.gql';


export default {
  name: 'Graphql',
  setup() {
    const options = {
      paginate: {
        page: 1,
        limit: 5,
      },
    };
    const { result, refetch, loading } = useQuery(GetPosts, { options });

    const articles = computed(() => result.value?.posts ?? []) // transform in computed
    
    return {
      articles,
      refetch,
      loading,
    };
  },
};
</script>

<style lang="scss">
#graphql {
  display: flex;
  flex-direction: column;
  width: 30%;
  & h1 {
    text-align: center;
    color: $white;
  }
  & article a {
    display: flex;
    column-gap: 5px;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    &:hover h2 {
      color: $green;
    }
    &:hover span {
      background-color: $green;
    }
    & span {
      color: $black;
      background-color: $grey;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 800;
    }
    & h2 {
      color: $grey;
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
  & p {
    color: $green;
    text-align: right;
    font-size: 14px;
  }
}
</style>