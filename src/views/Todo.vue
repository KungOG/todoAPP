<template>
    <main id="todo">
       <section class="main-todo">
            <h1>Telefon</h1>
            <h3>hjälp när det inte fastnar</h3>
       </section>
       <section>
           <ul>
               <li>Köpa</li>
               <li>Lista</li>
               <li>Makaroner</li>
               <li>Bilar</li>
           </ul>
       </section>
    </main>
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
