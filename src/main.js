import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'


// I18n (internationalization)
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: navigator.language.substring(0, 2), // get user language
  fallbackLocale: 'en', // fallback if iser language is not available in app
  messages: {
    fr: require('./locales/fr.json'),
    en: require('./locales/en.json'),
    es: require('./locales/es.json')
  }
})


// Apollo ( Graphql Client https://v4.apollo.vuejs.org )

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable' // For using .gql files
import { setContext } from '@apollo/client/link/context' // for auth


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://graphqlzero.almansi.me/api', // Using GraphQLZero for example ( https://graphqlzero.almansi.me )
})

// Set the token in authorization header
const authLink = setContext((_, { headers }) => {
  // Get the token from environment variable (.env)
  const token = process.env.VUE_APP_BEARER_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// Cache implementation
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink), // authLink from set context
  cache,
  fetchPolicy: 'netowrk-only', // Add the fetchPolicy option
})

provideApolloClient(apolloClient)

createApp(App).use(router).use(i18n).use(createMetaManager()).mount('#app')
