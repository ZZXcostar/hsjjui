<template>
  <div class="nkb-dialog-wrapper" v-show="visible" @click.self="handleClose">
    <div class="nkb-dialog" :style="{ width, top }">
      <div class="nkb-dialog-header">
        <slot name="title">
          <span>{{title}}</span>
        </slot>
        <!--<nkb-button @click="handleClose">X</nkb-button>-->
      </div>
      <div class="nkb-dialog-body">
        <slot></slot>
      </div>
      <div class="nkb-dialog-footer" v-show="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NkbDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '75%'
    },
    top: {
      type: String,
      default: '25%'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose () {
      // this.$emit('close', false)
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/style';
  .nkb-dialog-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .nkb-dialog {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 24px;
      .nkb-dialog-body {
        padding: 24px;
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .nkb-dialog-footer {
        @include hairline(top, #F1F1F1);
        height: 87px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 30px;
        button {
          flex: 1;
          height: 87px;
          display: flex;
          align-items: center;
          justify-content: center;
          @include hairline(left, #F1F1F1);
          &:first-child {
            &:after {
              visibility: hidden;
            }
          }
        }
      }
    }
  }
</style>
