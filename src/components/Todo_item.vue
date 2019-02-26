<template>
    <article class="todo">
        <aside class="done">
            <img src="../assets/check.svg" alt="done">
        </aside>
        <section class="text">
            {{todo.text}}
        </section>
    </article>
</template>

<script>
export default {
    name: 'todo',
    data () {
        return {
            todo: {
                text: 'Bananer',
                done: false
            }
        }
    }
}
</script>

<style lang="scss">

</style>

