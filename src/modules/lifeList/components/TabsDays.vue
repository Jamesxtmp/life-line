<template>
  <div class="wrap-tabs">
    <button
        class="tareas"
        :class="{ focusClass: focusActully == 'tareas' }"
    >
        <i
            class="las la-tasks"
            @click="emitPosition('tareas'); setFocus('tareas')"
        >
        </i>
    </button>
    <button
        class="hoy"
        :class="{ focusClass: focusActully == 'hoy' }"
    >
        <i
            class="lar la-dot-circle"
            @click="emitPosition('hoy'); setFocus('hoy')"
        >
        </i>
    </button>
    <button
        class="pasado"
        :class="{ focusClass: focusActully == 'pasado' }"
    >
        <i
            class="las la-history"
            @click="emitPosition('pasado'); setFocus('pasado')"
        >
        </i>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(props, context){

        const focusActully= ref('hoy')

        const emitPosition = ( position ) => {
            context.emit('getTabPosition', position)
        }
        const setFocus = ( position ) => {
            focusActully.value = position
        }  

        return{
            focusActully,

            emitPosition,
            setFocus,
        }
    }
}
</script>

<style scoped>
.wrap-tabs{
    position: absolute;
    display: flex;
    align-items: end;
    bottom: 0;
}
button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px 15px 0 0;
    background-color: var(--color-b-a);
}
button i{
    font-size: 30px;
    color: white;
}
.hoy{
    width: 60px;
    height: 50px;
}
.tareas, .pasado{
    width: 50px;
    height: 40px;
}

.focusClass{
    background-color: var(--color-c);
}
</style>