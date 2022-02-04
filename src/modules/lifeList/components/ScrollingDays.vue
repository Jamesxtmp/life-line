<template>
    <div class="scroll-wrap">
        <div 
            v-show="dataDays"
            class="wrap-day"
            v-for="(day, i) in dataDays"
            :key="i"
        >
        <h2> {{ dataDays[i].title}} </h2>
        </div>
            <AddButton location="days" />
            <TabsDays @getTabPosition="filterByTab()" />
    </div>
</template>

<script>
import AddButton from "../components/AddButton"
import TabsDays from "../components/TabsDays"
import { reactive, computed } from "vue"

    //* Firebase Importations
import fireApp from "@/api/firebaseApi"
import { getDatabase, ref, onValue } from "firebase/database"

export default {
    components: {
        AddButton,
        TabsDays,
    },
    setup(){
        
        const data = reactive({
            dataDays: null
        })

        const fireDB = getDatabase(fireApp)
        const daysUserRef = ref(fireDB, 'users/jaime/entries/days')
        onValue(daysUserRef, snapshot => {
            data.dataDays = snapshot.val()
        })

        const filterByTab = () => {

        }

        return{
            dataDays: computed( () => data.dataDays ),

            filterByTab,
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