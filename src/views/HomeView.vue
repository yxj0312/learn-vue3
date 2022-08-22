<script setup>
    textarea.addEventListener("keydown", (e) => {
        if (e.keyCode === 9) {
            // tab was pressed
            // get caret position/selection
            let val = textarea.value,
            start = textarea.selectionStart,
            end = textarea.selectionEnd;

            // set textarea value to: text before cret + tab +text after caret
            textarea.value = val.substring(0, start) + "\t" + val.substring(end)

            // put caret at right position again
            textarea.selectionStart = textarea.selectionEnd = start + 1

            e.preventDefault();s
        }
    })
</script>
<template>
    <main>
        <form>
            <textarea style="width: 100%; height: 300px">Hi there</textarea>
        </form>
    </main>
</template>