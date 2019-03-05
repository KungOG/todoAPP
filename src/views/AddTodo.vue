<template>
    <main id="addTodo" v-touch:swipe.right="swipe">
        <header>
            <p>Dela denna lista via:</p>
            <p>https://kungog.se/</p>
        </header>
        <section class="content">
            <input type="text" v-model="newTodo" maxlength="30">
        </section>
        <footer>
            <p>{{newTodo.length}} / 30 tecken</p>
            <a href="#" class="btn" @click="addATodo">Lägg till!</a>
        </footer>
    </main>
</template>

<script>
export default {
    name: 'AddTodo',
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        swipe() {
            this.$store.commit('swipe', 1)
        },
        addATodo () {
            this.$store.dispatch('addTodo', {
                text : this.newTodo, 
                done : false
            })
        }
    }
}
</script>
<style lang="scss">
</style>
