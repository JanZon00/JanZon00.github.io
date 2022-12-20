<template>
  <v-container fluid class="padcon">
        <v-row class="pa-0 ma-0">
          <v-col lg="6" md="6" sm="6" cols="12" class="pa-0 ma-0">
            <router-link to="palowanie/karty" class="pa-0 ma-0">
              <div @mouseover="hovertrening = true"  @mouseleave="hovertrening = false">
              <span><div class="field1"><span class="dot1">
                <span class="indot1"></span></span>
              </div></span></div>
            </router-link>
          </v-col>
          <v-col lg="6" md="6" sm="6" cols="12" class="pa-0 ma-0">
            <router-link to="palowanie/binarne" class="pa-0 ma-0">
              <div @mouseover="hoverpaluj = true"  @mouseleave="hoverpaluj = false">
              <span><div class="field2"><span class="dot2">
              <span class="indot2"></span></span></div></span></div>
            </router-link>
          </v-col>
          <div class="mozg"><span class="dotcenter"><span class="dotinnercenter"></span>
            <span v-if="hovertrening"><span class="dotinnercenter" style="background-color:#e04d26"><p class="title">KARTY</p></span></span>
            <span v-if="hoverpaluj"><span class="dotinnercenter" style="background-color:#f0d53d"><p class="title">BINARNE</p></span></span>
            <span v-if="hoverwyniki"><span class="dotinnercenter" style="background-color:#5ed4f3"><p class="title">LICZBY</p></span></span>
            <span v-if="hoverustawienia"><span class="dotinnercenter" style="background-color:#3e9231"><p class="title">LITERY</p></span></span>
          </span></div>
          <v-col lg="6" md="6" sm="6" cols="12" class="pa-0 ma-0">
            <router-link to="palowanie/liczby" class="pa-0 ma-0">
              <div @mouseover="hoverwyniki = true"  @mouseleave="hoverwyniki = false">
              <span><div class="field3"><span class="dot3">
              <span class="indot3"></span></span></div></span></div>
            </router-link>
          </v-col>
          <v-col lg="6" md="6" sm="6" cols="12"  class="pa-0 ma-0">
            <router-link to="palowanie/litery" class="pa-0 ma-0">
              <div @mouseover="hoverustawienia = true"  @mouseleave="hoverustawienia = false">
              <span><div class="field4"><span class="dot4">
              <span class="indot4"></span></span></div></span></div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default({
  data(){
    return {
      hovertrening:false,
      hoverpaluj:false,
      hoverwyniki:false,
      hoverustawienia:false
    };
  }
  
});

</script>

<style>
:root {
  --red: #cc0000;
  --green: #09a716;
  --blue: #366799;
  --orange: #f1ab12;
  --gray: #313131;
  --gray2: #383838;
  --darkgray: #383838;
  --background: #282828;
  --bluenav: #44c7ef;
  --bluebordernav: #29b0d9;
}
.padcon{
  margin-top: 0px;
  padding-top: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
@media screen and (max-width: 600px) {
  .padcon{
    padding-top: 0px;
  }
}
.field1, .field2, .field3, .field4{
  transition-duration: 0.4s;
  color: white;
  border-radius: 20px;
  background-size: cover;
  background-position: 50% 50%;
  border: 7px solid white;
  min-height: 49vh;
  max-height: 50%;
  position: relative;
}
.field1{
  background-image: url("../views/assets/tlo1.png");
}
.field2{
  background-image: url("../views/assets/tlo2.png");
}
.field3{
  background-image: url("../views/assets/tlo3.png");
}
.field4{
  background-image: url("../views/assets/tlo4.png");
}
.field1:hover, .field2:hover, .field3:hover, .field4:hover {
  transform: scale(1.02);
}
a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}
.title{
  font-size: 30px;
  color: white;
  line-height: 190px;
  font-weight: 600;
}
@media screen and (max-width: 600px) {
  .field1, .field3{
    margin-left: 0px;
  }
}
@media screen and (max-width: 600px) {
  .field2, .field4{
    margin-right: 0px;
  }
}
@media screen and (max-width: 600px) {
  .mozg{
    display: none;
  }
}
.dotcenter, .dotinnercenter{
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 50%;
  display: block;
  z-index: 9999;
  transition: 1s;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.dotcenter{
  background-color: white;
  height: 205px;
  width: 205px;
}
.dotinnercenter{
  height: 190px;
  width: 190px;
  background-color: #ececec;
}
.dot1, .dot2, .dot3, .dot4{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  height: 205px;
  width: 205px;
  border-radius: 50%;
  display: block;
  box-sizing: border-box;
  z-index: 9998;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.dot1{
  background-color: white;
}
.dot1:hover, .dot2:hover, .dot3:hover, .dot4:hover{
  background-color: #ececec;
  transition: 1s;
}
.dot2{
  background-color: white;
}
.dot3{
  background-color: white;
}
.dot4{
  background-color: white;
}

.indot1, .indot2, .indot3, .indot4{
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  height: 155px;
  width: 155px;
  border-radius: 50%;
  display: block;
  background-color: #ececec;
  position: relative;
  top: 27px;
}
.indot1{
  background-image: url("../views/assets/cards.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
.indot2{
  background-image: url("../views/assets/binary-code.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
.indot3{
  background-image: url("../views/assets/maths.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
.indot4{
  background-image: url("../views/assets/cubes.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
</style>
