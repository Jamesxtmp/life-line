<template>
    <div class="scroll-wrap">
        <div 
            class="wrap-notes"
            v-for="(note, i) in notes"
            :key="i"
            :class="{ hidden : tabPosition == 'flag'}"
        >
        <h2> {{ note.title }} </h2>
        </div>
        <div 
            class="wrap-goals"
            v-for="(goal, i) in goales"
            :key="i"
            :class="{ hidden : tabPosition == 'note'}"
        >
        <h2> {{ goal.title }} </h2>
        </div>
        <AddButton location="ideas" />
        <TabsIdeas @getTabPosition="tabPositioning" />
    </div>
</template>

<script>
import { computed, reactive } from 'vue'
import AddButton from "../components/AddButton"
import TabsIdeas from "../components/TabsIdeas"

    //* Firebase Importations
import fireApp from "@/api/firebaseApi";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
    components: {
        AddButton,
        TabsIdeas,
    },
    setup(){
        
        const data = reactive({
            tabPosition: 'note',
            goales: null,
            notes: null
        })

        const fireDb = getDatabase(fireApp)
        const goalesUserRef = ref(fireDb, 'users/jaime/entries/goales')
        const tasksUserRef = ref(fireDb, 'users/jaime/entries/tasks')
        onValue(goalesUserRef, snapshot => {
            data.goales = snapshot.val()
            // console.log(snapshot.val())
        })
        onValue(tasksUserRef, snapshot => {
            data.notes = snapshot.val()
            // console.log(snapshot.val())
        })

        const tabPositioning = ( position ) => {
            if ( position == 'note' ) {
                data.tabPosition = 'note'
            }
            if ( position == 'flag' ) {
                data.tabPosition = 'flag'
            }
        }   
        return{
            tabPosition: computed( () => data.tabPosition ),
            goales: computed( () => data.goales ),
            notes: computed( () => data.notes ),


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