<template>
    <div id="readonly"><editor-content :editor="editor" /></div>
</template>

<script setup>
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu, Editor, EditorContent, FloatingMenu } from "@tiptap/vue-3";
import { watch, ref, onMounted, toRefs, onBeforeUnmount } from "vue";
const props = defineProps({
    link: Object,
});

const { link } = toRefs(props);

const editor = ref(null);

onMounted(() => {
    editor.value = new Editor({
        editable: false,
        extensions: [StarterKit],
        content: link.value.data.portfolio_blog,
        // triggered on every change
        // onUpdate: ({ editor }) => {
        //     const html = editor.getHTML();
        //     //console.log(html);
        //     emit("change", { data: html });
        // },
    });
});

onBeforeUnmount(() => {
    editor.value.destroy();
});
</script>

<style lang="scss">
/* Basic editor styles */
#readonly .ProseMirror {
    height: 100%;
    overflow-y: hidden;
    --tw-bg-opacity: 1;
    background-color: transparent;
    padding: 0.5rem /* 8px */;
    padding-top: 1rem;
    border-width: 0px;
    > * + * {
        margin-top: 0.75em;
    }
    h1 {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.25;
    }
    h2 {
        font-size: 1.25rem;
        font-weight: 600;
    }
    p {
        font-size: 16px;
        line-height: 1.5;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0d0d0d, 0.1);
    }
}
</style>
