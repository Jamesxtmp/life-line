<template>
    <div class="scroll-wrap">
        <div 
            class="wrap-day"
            v-for="(day, i) in 40"
            :key="i"
        >
        <h2> {{ 'Titulo de la etiqueta' }} </h2>
        </div>
            <AddButton/>
    </div>
</template>

<script>
import AddButton from "../components/AddButton"

export default {
    components: {
        AddButton,
    },
}
</script>

<style scoped>
.scroll-wrap{
    background-color: var(--color-a);
    height: calc(100% - 30px);
    padding: 15px 0;
    overflow-y: scroll;
}
.wrap-day{
    width: 90%;
    margin: auto;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    margin: 10px auto;
    padding: 5px;
    border-radius: 8px;
    background: linear-gradient(130deg, var(--color-a) 90%, rgb(30, 109, 255));
}
.wrap-day h2{
    color: rgb(211, 211, 211);
    font-size: 18px;
}
</style>