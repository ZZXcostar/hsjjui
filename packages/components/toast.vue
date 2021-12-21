<template>
  <div class="toast" v-show="visible">
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'NkbToast',
  props: {
  },
  data () {
    return {
      visible: false,
      content: '',
      t: null
    }
  },
  methods: {
    show (content, duration = 2000) {
      this.content = content
      this.visible = true
      this.t && clearTimeout(this.t)
      this.t = setTimeout(() => {
        this.content = ''
        this.visible = false
      }, duration)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../packages/assets/css/style';
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999;
    max-width: 80%;
    padding: 22px;
    color: #fff;
    background: #000000;
    border-radius: 10px;
    opacity: 0.8;
    font-size: 28px;
  }
</style>
