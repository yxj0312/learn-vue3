<script setup>
    import { onMounted, ref } from "vue"

    let textarea = ref('null');


    function onTabPress(e) {
        let t = textarea.value
        
        // tab was pressed
        // get caret position/selection
        let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

        // set textarea value to: text before cret + tab +text after caret
        t.value = val.substring(0, start) + "\t" + val.substring(end)

        // put caret at right position again
        t.selectionStart = t.selectionEnd = start + 1

        e.preventDefault();
    }

    
</script>
<template>
    <main>
        <form>
            <textarea ref="textarea" @keydown.tab="onTabPress" style="width: 100%; height: 300px">Hi there</textarea>
        </form>
    </main>
</template>