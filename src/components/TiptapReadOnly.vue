<template>
  <div id="readonly"><editor-content :editor="editor" /></div>
</template>

<script setup>
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu, Editor, EditorContent, FloatingMenu } from "@tiptap/vue-3";
import { watch, ref, onMounted, toRefs, onBeforeUnmount } from "vue";
const props = defineProps({
  //selectedId: { type: Number, default: 0 },
  portfolio_blog: { type: String, default: "" },
});

const { portfolio_blog } = toRefs(props);

const editor = ref(null);

onMounted(() => {
  editor.value = new Editor({
    editable: false,
    extensions: [StarterKit, Document, Paragraph, Text, Image, Dropcursor],
    content: portfolio_blog.value,
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
    margin-top: 0.75rem /* 12px */;
    margin-bottom: 2rem /* 32px */;
    font-size: 2.25rem /* 36px */;
    line-height: 2.5rem /* 40px */;
    font-weight: 700;
    letter-spacing: -0.025em;
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
    line-height: 1.25;
  }
  h2 {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
    font-weight: 700;
    letter-spacing: -0.025em;
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }
  h3 {
    font-weight: 600;
    line-height: 1.5rem /* 24px */;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }
  p {
    //margin-top: 1.5rem /* 24px */;
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
    font-size: 16px;
    line-height: 1.75rem;
  }

  ul {
    margin-top: 0.2rem /* 16px */;
    list-style-type: disc;
    padding-left: 1rem /* 16px */;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }
  ol {
    padding: 0 1rem;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }
}
</style>
