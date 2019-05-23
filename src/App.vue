<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>x

<script>
import ToolBar from './components/ToolBar';

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
</style>
