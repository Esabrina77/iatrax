<template>
    <div class="form-group">
      <label :for="id" class="form-label">{{ label }}</label>
      <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)" class="form-input" />
    </div>
  </template>
  
  <script>
  export default {
    name: "FormInput",
    props: {
      id: String,
      label: String,
      type: {
        type: String,
        default: "text"
      },
      placeholder: String,
      modelValue: String
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .form-label {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .form-input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 15px;
    width: 90%;
  }
  </style>