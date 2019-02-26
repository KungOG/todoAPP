<template>
    <article class="todos">
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
    name: 'todos',
    props: ['todo'],

}
</script>
<style lang="scss">
</style>

