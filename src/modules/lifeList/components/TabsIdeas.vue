<template>
  <div class="wrap-tabs">
    <button
        class="note"
        :class="{ focusClass: focusnote }"
    >
        <i
            class="las la-sticky-note"
            @click="emitPosition('note'); setFocus()"
        >
        </i>
    </button>
    <button
        class="flag"
        :class="{ focusClass: !focusnote }"
    >
        <i
            class="lab la-font-awesome-flag"
            @click="emitPosition('flag'); setFocus()"
        >
        </i>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(props, context){

        const focusnote = ref(true)

        const emitPosition = ( position ) => {
            context.emit('getTabPosition', position)
        }
        const setFocus = () => {
            focusnote.value = !focusnote.value
        }

        return{
            focusnote,

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
.flag{
    width: 50px;
    height: 40px;
}
.note{
    width: 60px;
    height: 50px;
}
.focusClass{
    background-color: var(--color-c);
}
</style>