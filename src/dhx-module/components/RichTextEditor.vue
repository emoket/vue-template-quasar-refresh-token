<script>
import fromCDN from 'from-cdn';
export default {
  name: 'RichTextGettingContentCdn',
  data: () => ({
    richtext: null,
    initialContent: `
      \n# Meet DHTMLX Rich Text Editor! \nThis JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt set of handy formatting tools. \n## Features \nBesides, it will convert your text into HTML or Markdown in the blink of an eye. Another bonus of DHTMLX Rich Text is its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort. \nTo learn more, read our [documentation](https://docs.dhtmlx.com/richtext/index.html) and check the [samples](https://docs.dhtmlx.com/richtext/samples/).
    `,
    content: '',
  }),
  mounted() {
    fromCDN([
      'https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js',
      'https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css',
    ]).then(() => {
      this.richtext = new dhx.Richtext(this.$refs.richtext);
      this.richtext.setValue(this.initialContent, 'markdown');
    });
  },
  methods: {
    serialize(value) {
      let result = this.richtext.getValue(value);
      this.content = result;
    },
  },
  beforeUnmount() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>

<template>
  <!-- <div class="dhx-container_inner"> -->
  <div style="width: 100%; height: calc(100vh - 50px)">
    <section class="dhx_sample-controls">
      <button
        class="dhx_sample-btn dhx_sample-btn--flat"
        @click="serialize('html')"
      >
        Serialize HTML
      </button>
      <button
        class="dhx_sample-btn dhx_sample-btn--flat"
        @click="serialize('markdown')"
      >
        Serialize Markdown
      </button>
      <button
        class="dhx_sample-btn dhx_sample-btn--flat"
        @click="serialize('text')"
      >
        Serialize Plain Text
      </button>
    </section>
    <div class="dhx_container">
      <div ref="richtext" class="dhx_sample-container__widget setting"></div>
      <textarea
        readonly
        class="dhx_sample-container__textarea"
        placeholder="The result will be here:"
        v-model="content"
      ></textarea>
    </div>
  </div>
</template>
