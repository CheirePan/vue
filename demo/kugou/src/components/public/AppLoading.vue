<template>
  <div :class="className">
    <svg class="icon loading__svg" aria-hidden="true">
      <use xlink:href="#icon-loading"></use>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppLoading',
  computed: {
    ...mapState('loading', ['isShow', 'sizeClassName']),
    className() {
      let className = this.isShow ? 'loading' : 'loading loading--fade_out'
      return className + ' ' + this.sizeClassName
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.loading {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15vw;
  position: fixed;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
}
.loading--exclude_header {
  margin-top: @header_height;
  height: calc(100% - @header_height);
}
.loading--exclude_nav {
  margin-top: @header_height + @nav_height;
  height: calc(100% - @header_height - @nav_height);
}
.loading--exclude_module_title {
  margin-top: @header_height + @module_title_height;
  height: calc(100% - @header_height - @module_title_height);
}
.loading--exclude_search_form {
  margin-top: @header_height + @module_title_height + @search_form_height;
  height: calc(
    100% - @header_height - @module_title_height - @search_form_height
  );
}
.loading--fade_out {
  background-color: transparent;
  animation: fade_out 0.5s ease 0.3s forwards;
}
.loading__svg {
  animation: rotate 1s linear infinite reverse;
}
</style>
