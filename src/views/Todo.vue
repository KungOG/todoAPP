<template>
    <main id="todos">
       <header>
            <h1>Telefon</h1>
            <h3>hjälp när det inte fastnar</h3>
       </header>
       <section class="content">
           <todoitem />
       </section>
       <footer>
           <a href="#" class="btn">Slide to add new Todo</a>
        </footer>
    </main>
</template>
<script>
import todoitem from '../components/Todo_item';

export default {
    name: 'todos',
    components: {
        todoitem
    }

}
</script>
<style>

</style>