<template>
  <div class="nkb-loading-wrapper" v-show="visible">
    <div class="loading" v-show="visible">
      <div>{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NkbLoading',
  props: {
  },
  data () {
    return {
      visible: false,
      content: ''
    }
  },
  methods: {
    show (content = '加载中...', duration = 2000) {
      this.content = content
      this.visible = true
    },
    hide () {
      this.content = ''
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../packages/assets/css/style';
  .nkb-loading-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 99999;
    .loading {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 99999;
      max-width: 80%;
      padding: 22px;
      color: #fff;
      background: #000000;
      border-radius: 10px;
      opacity: 0.8;
      font-size: 28px;
    }
  }
</style>
