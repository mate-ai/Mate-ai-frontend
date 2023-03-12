<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>

export default {
    name: 'prompt',
    props: {
        msg: String
    }
}

</script>

<style scoped lang="scss"> 
div {
    display: flex;
    background-color: $green;
    width: 24%;
    border-radius: 15px;
    height: 24%;
    align-items: center;
}
</style>