<template>
  <div id="readandwrite" v-if="editor">
    <bubble-menu
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        Bold
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        Italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        Strike
      </button>
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        code
      </button>
    </bubble-menu>

    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{
          'is-active': editor.isActive('heading', { level: 1 }),
        }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{
          'is-active': editor.isActive('heading', { level: 2 }),
        }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        Bullet List
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        ordered list
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        code block
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        blockquote
      </button>
      <button @click="addImage">add image from URL</button>
    </floating-menu>
  </div>

  <editor-content :editor="editor" />
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
const emit = defineEmits(["change"]);
const editor = ref(null);

function addImage() {
  const url = window.prompt("URL");

  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
}

onMounted(() => {
  console.log(portfolio_blog);
  editor.value = new Editor({
    extensions: [StarterKit, Document, Paragraph, Text, Image, Dropcursor],
    content: portfolio_blog,
    // content: `
    //       <p>This is a basic example of implementing images. Drag to re-order.</p>
    //       <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
    //       <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
    //     `,
    // triggered on every change
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      //console.log(html);
      emit("change", { data: html });
    },
  });
});

onBeforeUnmount(() => {
  editor.value.destroy();
});

// export default {
//     components: {
//         EditorContent,
//         BubbleMenu,
//         FloatingMenu,
//     },

//     data() {
//         return {
//             editor: null,
//         };
//     },

//     mounted() {
//         this.editor = new Editor({
//             extensions: [StarterKit],
//             content: `
//           <p>
//             Try to select <em>this text</em> to see what we call the bubble menu.
//           </p>
//           <p>
//             Neat, isn’t it? Add an empty paragraph to see the floating menu.
//           </p>
//         `,
//         });
//     },

//     beforeUnmount() {
//         this.editor.destroy();
//     },
// };
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  height: 300px;
  overflow-y: auto;
  --tw-bg-opacity: 1;
  background-color: rgb(247 247 247 / var(--tw-bg-opacity));
  border-radius: 10px;
  padding: 0.5rem /* 8px */;
  padding-top: 1rem;
  border-width: 0px;
  > * + * {
    margin-top: 0.75em;
  }
  h1 {
    font-weight: 700;
  }

  ul,
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
    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }
}
.tippy-box {
  max-width: 444px;
}

.bubble-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
  display: flex;
  background-color: #0d0d0d10;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
</style>
