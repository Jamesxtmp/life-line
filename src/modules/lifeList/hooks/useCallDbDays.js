import { reactive, computed } from "vue"

//* Firebase Importations
import fireApp from "@/api/firebaseApi"
import { getDatabase, ref, onValue } from "firebase/database"

export default () => {
    const data = reactive({
        dataDays: null
    })

    const fireDB = getDatabase(fireApp)
    const daysUserRef = ref(fireDB, 'users/jaime/entries/days')
    onValue(daysUserRef, (snapshot) => {
        data.dataDays = snapshot.val()
    })
    return{
        dataDays: computed( () => { data.dataDays } ),
    }
}