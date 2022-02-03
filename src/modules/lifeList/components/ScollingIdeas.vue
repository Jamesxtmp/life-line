<template>
    <div class="scroll-wrap">
        <div 
            class="wrap-notes"
            v-for="(day, i) in 40"
            :key="i"
            :class="{ hidden : !isPositionNote}"
        >
        <h2> {{ 'Titulo Ideas notes' }} </h2>
        </div>
        <div 
            class="wrap-goals"
            v-for="(day, i) in 40"
            :key="i"
            :class="{ hidden : isPositionNote}"
        >
        <h2> {{ 'Titulo Ideas goals' }} </h2>
        </div>
        <AddButton location="ideas" />
        <TabsIdeas @getTabPosition="tabPositioning" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import AddButton from "../components/AddButton"
import TabsIdeas from "../components/TabsIdeas"

export default {
    components: {
        AddButton,
        TabsIdeas,
    },
    setup(){
        const isPositionNote = ref(true)

        const tabPositioning = ( position ) => {
            console.log( position )
            if ( position == 'note' ) {
                isPositionNote.value = true
            }else{
                isPositionNote.value = false
            }

        }   
        return{
            isPositionNote,

            tabPositioning
        }
    }
}
</script>

<style scoped>
.scroll-wrap{
    background-color: var(--color-a);
    height: calc(100% - 30px);
    padding: 15px 0;
    overflow-y: scroll;
}
.wrap-notes, .wrap-goals{
    width: 90%;
    margin: auto;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    margin: 10px auto;
    padding: 5px;
    border-radius: 8px;
    background: linear-gradient(130deg, var(--color-a) 90%, rgb(30, 109, 255));
}
.wrap-notes h2, .wrap-goals h2{
    color: rgb(211, 211, 211);
    font-size: 18px;
}

.hidden{
    display: none;
}
</style>