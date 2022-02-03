<template>
    <template v-if="showOptions">
        <div 
            class="options-plus"
            v-if="location == 'days'"
        >
            <span class="tarea">Tarea</span>
            <span class="hoy">Hoy</span>
            <span class="pasado">Pasado</span>
        </div>
        <div 
            class="options-plus"
            v-if="location == 'ideas'"
        >
            <span class="nota">Nota</span>
            <span class="meta">Meta</span>
        </div>
    </template>

    <button
        @click="toggleShowOptions()"
    >
        <i v-if="!showOptions" class="las la-plus"></i>
        <i v-if="showOptions" class="las la-angle-down"></i>
    </button>
</template>

<script>
import { ref } from 'vue'
export default {
    props: {
        location: {
            require: true
        }
    },
    setup(props){
        const showOptions = ref(false)

        return{
            showOptions,

            toggleShowOptions: () => { showOptions.value = !showOptions.value}
        }
    }
}
</script>

<style scoped>
button{
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-b);
}
button i{
    font-size: 30px;
    color: white;
}
.options-plus{
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 80px;
    right: 20px;
}
.options-plus span{
    text-align: center;
    background-color: var(--color-b);
    border-radius: 10px;
    padding: 5px 15px;
    margin: 4px 0;
    color: white;
}
.hoy, .nota{
    font-size: 20px;
}
</style>