<template>
  <button
    class="nkb-button"
    :class="[`nkb-button-${type}`, {
      'nkb-button-outline': outline,
      'nkb-button-rounded': rounded
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'NkbButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.type)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/style';
</style>
