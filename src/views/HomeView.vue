<template>
  <main>
    <prompt v-for="message in messages" v-bind:msg="message" />

  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  row-gap: 1%;
}
</style>

<script>
import { useMeta } from 'vue-meta'

import prompt from '../components/prompt.vue'
import GPT from '../components/GPT.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      messages: [
        "Bonjour ChatGPT, peux-tu me donner des idées de cadeaux d'anniversaire pour ma mère ?",
        "Comment puis-je apprendre à coder plus rapidement ?",
        "Quel est le meilleur livre que tu aies jamais lu ?",
        "Que penses-tu du dernier film de science-fiction que j'ai vu ?",
        "Comment puis-je améliorer mes compétences en communication ?",
        "Quelles sont les meilleures pratiques pour la gestion du temps ?",
        "Comment puis-je trouver la motivation pour faire de l'exercice ?",
        "Quelle est la meilleure façon d'apprendre une nouvelle langue ?",
        "Comment puis-je mieux organiser mes idées lorsque j'écris ?",
        "Quelles sont les compétences les plus importantes pour réussir dans le monde des affaires ?",
        "Quel est votre jeu vidéo préféré et pourquoi ?",
        "Quels sont les jeux vidéo les plus populaires du moment ?",
        "Quels sont les meilleurs jeux vidéo pour jouer en ligne avec des amis ?",
        "Quel est le meilleur jeu vidéo de tous les temps et pourquoi ?",
        "Quels sont les jeux vidéo à venir que vous attendez avec impatience ?",
        "Quels sont les avantages et les inconvénients des jeux vidéo en réalité virtuelle ?"
      ]
    }
  },
  components: {
    prompt, GPT
  },
  beforeMount() {
    useMeta({
      title: this.$i18n.t('router.home'),
    })
  },
}
</script>