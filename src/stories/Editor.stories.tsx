import { Story } from '@storybook/vue3';

import { Editor } from '../main/ts/components/Editor';

const apiKey = 'qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc';
const content = `
<h2 style="text-align: center;">
  TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.
</h2>
<p style="text-align: center;">
  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you're building, TinyMCE has got you covered.</span></span></strong>
</p>`;

export default {
  title: 'Editor',
  component: Editor,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
};

export const Iframe: Story = () => ({
  components: {Editor},
  setup() {
    return {
      apiKey,
      content
    }
  },
  template: '<div><editor :api-key="apiKey" :initialValue="content" /></div>'
});

export const Inline: Story = () => ({
  components: { Editor },
  data: () => ({ content }),
  template: `
    <div style="padding-top: 100px;">
      <editor
        api-key="${apiKey}"
        v-model="content"
        inline
      />
    </div>`
});

export const Controlled: Story = () => ({
  components: { Editor },
  data: () => ({ content }),
  methods: {
    log: (e, _editor) => console.log(e)
  },
  template: `
    <div>
      <editor
        api-key="${apiKey}"
        :init="{height: 300}"
        v-model="content"
        @onBlur="log"
      />
      <textarea
        style="width: 100%;
        height:200px;"
        v-model="content"
      ></textarea>
      <div v-html="content"></div>
    </div>`
});

export const Disable: Story = () => ({
  components: { Editor },
  data: () => ({ content, disabled: false }),
  methods: {
    toggleDisabled(_e) {
      this.disabled = !this.disabled;
    }
  },
  template: `
    <div>
      <button @click="toggleDisabled">{{ disabled ? 'enable' : 'disable' }}</button>
      <editor
        api-key="${apiKey}"
        v-bind:disabled="disabled"
        :init="{height: 300}"
        v-model="content"
      />
    </div>`
});