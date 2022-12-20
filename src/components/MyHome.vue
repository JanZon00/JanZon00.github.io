<template>
  <v-container fluid class="padcon">
        <v-row class="pa-0 ma-0">
          <v-col lg="6" md="6" sm="6" cols="12" class="pa-0 ma-0">
            <router-link to="trening" class="pa-0 ma-0">
              <div @mouseover="hovertrening = true"  @mouseleave="hovertrening = false">
              <span><div class="field1h"><span class="dot1">
                <span class="indot1h"></span></span>
              </div></span></div>
            </router-link>
          </v-col>
          <v-col lg="6" md="6" sm="6" cols="12" class="pa-0 ma-0">
            <router-link to="palowanie" class="pa-0 ma-0">
              <div @mouseover="hoverpaluj = true"  @mouseleave="hoverpaluj = false">
              <span><div class="field2h"><span class="dot2">
              <span class="indot2h"></span></span></div></span></div>
            </router-link>
          </v-col>
          <div class="mozg"><span class="dotcenter"><span class="dotinnercenter"></span>
            <span v-if="hovertrening"><span class="dotinnercenter" style="background-color:#f0d53d"><p class="title">TRENING</p></span></span>
            <span v-if="hoverpaluj"><span class="dotinnercenter" style="background-color:#e04d26"><p class="title">PAŁOWANIE</p></span></span>
            <span v-if="hoverwyniki"><span class="dotinnercenter" style="background-color:#3e9231"><p class="title">WYNIKI</p></span></span>
            <span v-if="hoverustawienia"><span class="dotinnercenter" style="background-color:#5ed4f3"><p class="title">USTAWIENIA</p></span></span>
          </span></div>
          <v-col lg="6" md="6" sm="6" cols="12" class="pa-0 ma-0">
            <router-link to="wyniki" class="pa-0 ma-0">
              <div @mouseover="hoverwyniki = true"  @mouseleave="hoverwyniki = false">
              <span><div class="field3h"><span class="dot3">
              <span class="indot3h"></span></span></div></span></div>
            </router-link>
          </v-col>
          <v-col lg="6" md="6" sm="6" cols="12"  class="pa-0 ma-0">
            <router-link to="ustawienia" class="pa-0 ma-0">
              <div @mouseover="hoverustawienia = true"  @mouseleave="hoverustawienia = false">
              <span><div class="field4h"><span class="dot4">
              <span class="indot4h"></span></span></div></span></div>
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
.field1h, .field2h, .field3h, .field4h{
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
.field1h{
  background-image: url("../views/assets/home2.png");
}
.field2h{
  background-image: url("../views/assets/home1.png");
}
.field3h{
  background-image: url("../views/assets/home4.png");
}
.field4h{
  background-image: url("../views/assets/home3.png");
}
.field1h:hover, .field2h:hover, .field3h:hover, .field4h:hover {
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
  .field1h, .field3h{
    margin-left: 0px;
  }
}
@media screen and (max-width: 600px) {
  .field2h, .field4h{
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

.indot1h, .indot2h, .indot3h, .indot4h{
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
.indot1h{
  background-image: url("../views/assets/brain.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
.indot2h{
  background-image: url("../views/assets/stopwatch.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
.indot3h{
  background-image: url("../views/assets/ranking.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
.indot4h{
  background-image: url("../views/assets/settings.png");
  background-size: 100px 100px;
  background-position: 50% 50%;
}
</style>