<template>
  <div id="app">
    <div id="nav">
      <img
        src="../public/logo.png"
        alt="logo with theme colors and JN printed"
      /><br />
      <div>
        {{ dateTime.hours }}<br />
        {{ dateTime.calandar }}
      </div>
      <router-link to="/Index"> Home </router-link>
      <router-link to="/About"> About </router-link>
      <router-link to="/Experience"> Experience </router-link>
      <router-link to="/Contact"> Contact </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<script>
const date = new Date();
export default {
  name: "App",
  data() {
    return {
      dateTime: {
        hours: date.toLocaleTimeString(),
        calandar: date.toLocaleDateString(),
      },
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.toLocaleTimeString(),
        calandar: date.toLocaleDateString(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono");
/*=============================
    Font Family Declerations 
=============================*/
@font-face {
  font-family: "bonvenocflight";
  src: url("./fonts/BonvenoCF-Light-webfont.woff") format("woff"),
    url("./fonts/BonvenoCF-Light-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@media screen and (max-width: 641px) {
  /*===================================
Contact Link Styles
===================================*/
  .contact a:link,
  a:active {
    color: #49A078;
  }
  .contact a:visited {
    color: blue;
  }

  /*=========================
Giantbulb Unlimited Link
=========================*/
  .giantbulb a:link,
  a:active {
    color: rgb(74, 179, 130);
  }
  .giantbulb a:visited {
    color: rgb(56, 55, 145);
  }

  /*===================================
Body, Header and Paragraph Styles
===================================*/

  h1 {
    font-family: "Josefin Sans", Times, Arial, sans-serif;
    color: rgb(255, 255, 255);
    display: block;
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    margin-top: 30px;
  }
  #knowledge {
    text-align: center;
    list-style: inside;
  }
  body {
    font-family: Tahoma, Verdana, Geneva, Arial;
    background: linear-gradient(
        rgba(2, 0, 36, 1) 0%,
        rgba(33, 104, 105, 1) 71%,
        rgba(0, 117, 112, 1) 100%
      )
      fixed;
    margin: 0 10%;
  }
  p {
    text-align: center;
    font-family: "IBM Plex Mono", Courier, Verdana, monospace;
  }

  h2 {
    text-align: center;
    color: #9CC5A1;
    font-size: 1em;
  }

  /*==============
Footer Styles
================*/
  footer {
    border-top: 1px solid rgb(255, 255, 255);
    font-size: 15px;
    text-align: center;
  }

  /*==========
Image Styles
==========*/
  #self {
    display: none;
  }

  /*=========================
Contact Form Styles
=========================*/
  div.form {
    display: block;
    text-align: center;
  }
  form {
    font-family: "IBM Plex Mono", Courier, Verdana, monospace;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
  }
  fieldset {
    margin-bottom: 1em;
  }
}
/*===============
Desktop Styles
=================*/
@media screen and (min-width: 641px) {
  /*==================
Contact Form Styles
===================*/
  div.form {
    display: block;
    text-align: center;
  }
  fieldset {
    margin: auto;
  }
  form {
    color: white;
    font-family: "IBM Plex Mono", Courier, Verdana, monospace;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  /*===================================
Body, Header and Paragraph Styles
===================================*/
  html {
    text-align: center;
    background-image: url("https://wallpapercave.com/wp/7US90qE.jpg");
  }
  body {
    font-family: Tahoma, Verdana, Geneva, Arial;
    margin: 0 10%;
  }
  #knowledge {
    color: white;
    text-align: center;
    list-style: inside;
  }
  p {
    color: white;
    text-align: center;
    font-family: "IBM Plex Mono", Courier, Verdana, monospace;
  }
  h1 {
    color: white;
    display: block;
    text-align: center;
    font-family: "Josefin Sans", Times, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    margin-top: 30px;
  }
  h2 {
    text-align: center;
    color: #9CC5A1;
    font-size: 1em;
  }

  /*==========
Image Styles
==========*/
  #self {
    margin-top: 1em;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  /*==============
Span Styles
================*/
  span {
    color: #9CC5A1;
  }

  /*==============
Footer Styles
================*/
  footer {
    font-size: 16px;
    text-align: center;
  }

  /*===================================
Horizontal Navigation Styles
===================================*/
  #nav a:link,
  a:visited {
    color: #9CC5A1;
  }
  #nav a:hover {
    color: #ffffff;
  }
  #nav {
    padding: 10px;
    font-family: "bonvenocflight", Helvetica, Arial, sans-serif;
    font-size: 15px;
    background-color: #506C64;
    width: 100%;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  nav li a {
    text-decoration: none;
    padding: 10px;
  }
  nav ul {
    list-style: none;
    margin: 0;
    padding: 15px;
  }
  nav > ul li {
    display: inline;
  }

  /*===================================
Contact Link Styles
===================================*/
  .contact a:link,
  a:active {
    color: rgb(98, 216, 161);
  }
  .contact a:visited {
    color: blue;
  }
}
</style>
