<template>
  <div id='wrapper'>
    <form class='form' v-on:submit.prevent="onSubmit">
      <h1>Login Form</h1>
      <div class="field">
        <input class="text-input" v-validate="'required|email'" v-model="formData.email" id='email' name='email' type='email' placeholder="Email">
        <span v-if="errArray.email" class="danger">{{errArray.email | toText}}</span>
        <span class="danger">{{errors.first('email')}}</span>
      </div>
      <div class='field'>
        <input class='text-input' v-validate="'required|alpha'" v-model="formData.password" id='password' name='password' type='password' placeholder="Password">
        <span  class="danger">{{errArray.password | toText}}</span>
        <span class="danger">{{errors.first('name')}}</span>
      </div>
      <div class='field'>
        <input class='button' type='submit' value='Log In'>
      </div>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);

  import {Post} from '../services/ServicePost.js'

  export default {

    data() {
      let variables = {
        email: "",
        password: ""
      };
      return {
        formData: variables,
        errArray: {}
      }
    },

    filters: {
      toText: function (value) {
        if (!value) return ''
        return value.toString()
      }
    },

    methods: {
      async onSubmit() {
        try {
          await Post(this.formData)
        } catch (e) {
          this.errArray = e.response.data;
        }
      }
    }
  }
</script>

<style>

  .danger{
    color:red;
  }

  .form .text-input, .form .textarea, .form .button {
    padding: 1em 1.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    line-height: normal;
    border: 1px solid transparent;
    border-radius: 0;
  }

  .form .text-input, .form .textarea {
    font: inherit;
    line-height: normal;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    padding-left: 0;
    border-bottom-color: rgba(0, 0, 0, 0.3);
    background: transparent;
    outline: none;
    color: black;
  }
  .form .text-input:placeholder, .form .textarea:placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  .form .text-input:-webkit-autofill, .form .textarea:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    border-top-color: white;
    border-left-color: white;
    border-right-color: white;
  }
  .error .form .text-input, .form .error .text-input, .error .form .textarea, .form .error .textarea {
    border-color: transparent transparent red transparent;
  }
  .form:not(.has-floated-label) .text-input:active, .form:not(.has-floated-label) .textarea:active, .form:not(.has-floated-label) .text-input:focus, .form:not(.has-floated-label) .textarea:focus {
    border-color: transparent transparent black transparent;
  }
  .form h1{
    font-size: 1.5em;
    font-weight: 200;
    margin-top: 20px;
  }

  .form p{
    margin: 0.4em;
    color: red;
  }
  .form.has-floated-label .field:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 1px solid black;
    -webkit-transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .form.has-floated-label .field.focus:after {
    width: 100%;
  }
  .form .button {
    background-color: #00963d;
    border: 2px solid white;
    border-radius: 27px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin-top: 20px;
    padding: 15px 30px;
    text-transform: none;
    transition: all 200ms;
  }
  .form .button:hover, .form .button:focus, .form .button:active {
    background-color: #00963d;
    color: #fff;
    outline: 0;
  }
  .form .button:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
  .form {
    max-width: 30em;
    margin: 2em auto;
    padding: 1em 2em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  .form .field {
    position: relative;
    width: 100%;
    margin-bottom: 1.5em;
    float: left;
  }
  @media screen and (min-width: 40em) {
    .form .field.half {
      width: calc(50% - 2em);
      margin-right: 2em;
    }
    .form .field.half + .half {
      margin-left: 2em;
      margin-right: 0;
    }
  }
  .form .field:last-child {
    margin: auto;
  }
  .form .textarea {
    max-width: 100%;
  }
</style>
