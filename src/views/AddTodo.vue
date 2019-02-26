<template>
    <main id="addTodo" v-touch:swipe.right="swipe">
        <header>
            <p>Dela denna lista via:</p>
            <p>https://kungog.se/</p>
        </header>
        <section class="content">
            <input type="text" >
        </section>
        <footer>
            <a href="#" class="btn">Lägg till!</a>
        </footer>
    </main>
</template>

<script>
export default {
    name: 'AddTodo',
    methods: {
        swipe(e) {
            this.$emit('swipe', 0)
        }
    }
}
</script>
<style lang="scss">
</style>
