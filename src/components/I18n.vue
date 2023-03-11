<template>
    <div id="i18n">
        <h1>{{ $t('i18n.title') }}</h1>
        <div id="i18n__switch">
            <span>{{ $t('i18n.switch') }}</span>
            <select v-model="selectedLang" @change="changeLang">
                <option v-for="lang in availableLangs" :key="lang" :value="lang">
                    {{ lang }}
                </option>
            </select>
        </div>
        <p>{{ $t('i18n.content') }}</p>
        <div id="i18n__source">
            <p>{{ $t('i18n.localized-link') }}</p>
            <a v-bind:href="$t('i18n.source')">Wikipedia H2G2</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            availableLangs: ['fr', 'en', 'es'],
            selectedLang: this.$i18n.locale,
        }
    },
    methods: {
        changeLang() {
            this.$i18n.locale = this.selectedLang
        },
    },
}
</script>

<style lang="scss">
#i18n {
    display: flex;
    flex-direction: column;
    width: 30%;
    row-gap: 10px;
    & h1 {
        text-align: center;
        color: $white;
        font-size: 25px;
    }

    &__switch {
        display: flex;
        justify-content: center;
        column-gap: 5px;
        & span {
            color: $green;
            font-weight: 600;
        }
    }

    & p {
        color: $grey;
    }
    
    &__source {
        display: flex;
        column-gap: 5px;
        & p {
            color: $green;
        }
    }
}</style>
