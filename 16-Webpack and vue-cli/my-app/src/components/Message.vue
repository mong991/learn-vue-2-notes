<template>
  <div class="box">
    <p>
      <slot></slot>
    </p>
  </div>
  
</template>

<script>
export default {
  name: 'Message'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    background-color: #e3e3e3;
    padding: 18px;
    border: 1px solid #c5c5c5;
    margin-bottom: 10px;
  }
</style>
