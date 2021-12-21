<template>
  <div id="app">
    <nkb-button type="primary" @click="handlePrimaryClick">Toast</nkb-button>
    <nkb-button type="primary" @click="handleLoadingClick">Loading</nkb-button>
    <nkb-button type="success" @click="handleSuccessClick" disabled>Disabled</nkb-button>
    <nkb-button type="warning" outline rounded @click="visible = true">Dialog</nkb-button>
    <!--<nkb-dialog :visible="visible" @close="handleDialogClose">-->
    <nkb-dialog :visible.sync="visible">
      <!--<template v-slot:title>标题</template>-->
      <p>这里是内容</p>
      <template v-slot:footer>
        <nkb-button outline @click="visible = false">取消</nkb-button>
        <nkb-button>确定</nkb-button>
      </template>
    </nkb-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handlePrimaryClick () {
      // alert('Primary Click')
      this.$toast('sdf', 2000)
    },
    handleLoadingClick () {
      this.$showLoading()
      setTimeout(() => {
        this.$hideLoading()
      }, 5000)
    },
    handleSuccessClick () {
      console.log('Success Click')
    }
    /* handleDialogClose (value) {
      this.visible = value
    } */
  }
}
</script>

<style lang="scss">
  /*@import 'assets/css/style';*/
</style>
