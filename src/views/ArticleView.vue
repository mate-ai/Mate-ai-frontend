<template>
    <article>
        <header>
            <span>{{ result.post.id }}</span>
            <h1>{{ result.post.title }}</h1>
        </header>
        <p>{{ result.post.body }}</p>
    </article>
</template>
  
<script>
import { useMeta } from 'vue-meta'
import { useQuery } from '@vue/apollo-composable';
import GetAPost from '../queries/GetAPost.gql';
import { useRoute } from 'vue-router'


export default {
    name: 'Article',
    setup() {
        const route = useRoute()

        const { result, refetch, loading } = useQuery(GetAPost, {
            id: route.params.id
        });
        return {
            result,
            refetch,
            loading,
        };
    },
    mounted() {
        useMeta({
            title: this.result.post.title,
        })
    },
};

</script>

<style scoped lang="scss">
article {
    padding-left: 2%;
}

header {
    display: flex;
    align-items: center;
    column-gap: 10px;

    & span {
        background-color: $green;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 600;
        font-size: 20px;
    }

    & h1 {
        color: $green;
        font-size: 35px;
        text-transform: capitalize;
    }
}

p {
    color: $white;
    margin-top: 1%;
}
</style>