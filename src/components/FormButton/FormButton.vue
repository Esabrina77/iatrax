<template>
    <button :type="type" @click="handleClick" class="form-button">{{ label }}</button>
  </template>
  
  <script>
  export default {
    name: "FormButton",
    props: {
      type: {
        type: String,
        default: "button",
      },
      label: String,
    },
    methods: {
      handleClick(event) {
        this.$emit("click", event);
      },
    },
  };
  </script>
  
  <style scoped>
  .form-button {
    width: 100%;
    padding: 0.75rem;
    border-radius: 30px;
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
  .form-button:hover{
    background-color: #bfbfbf66;
    color: #000000;
  }
  </style>