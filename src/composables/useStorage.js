import {ref,watch} from "vue"
export function useStorage(key) {
    console.log('12312')
    console.log(key)
    let storedVal = localStorage.getItem(key)
    
    if (storedVal) {
        val = ref(storedVal)
    } else {
        val = ref(val)
    }

    let val = ref(storedVal)

    watch(val, ()=>{
        write();
    })

    function write() {
        if (val.value === '') {
            localStorage.setItem(key)
        } else {
            localStorage.setItem(key, val.value)
        }        
    }
    return val
}