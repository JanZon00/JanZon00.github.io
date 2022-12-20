<script>
export default {
  el: '#vuebuttons',
  data() {
    return {
      a : 0, b : 0,
    }
  },
  mixins: [
    require('../MyMixins/palowanieMixin.vue')
  ],
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        this.rangeFunction()
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp') {
        this.rangeFunction2()
      }
    });
  },
  methods: {
    rangeFunction: function(){
        var c = this.getRandomInt(this.a, this.b);
        this.x = c;

        window.addEventListener('keydown', (e) => {
          if (e.key == 'r') {
            this.numbers.add(this.x);
          }
        });

        window.addEventListener('keydown', (e) => {
          if (e.key == 'p') {
            clearInterval(this.myInterval);
          }
        });

        if(this.b <= 99 && this.b >= 10){
          if(this.x < 100 && this.x >= 10){
            document.getElementById("displayNumber").innerHTML = this.x;
          }
          else if(this.x < 10 && this.x >= 0){
            this.num = "0" + this.x;
            document.getElementById("displayNumber").innerHTML = this.num;
          }
        }
        else if(this.b <= 9){
          document.getElementById("displayNumber").innerHTML = this.x;
        }
        else{
          if(this.x < 100 && this.x >= 10){
            this.num = "0" + this.x;
            document.getElementById("displayNumber").innerHTML = this.num;
          }
          else if(this.x < 10 && this.x >= 0){
            this.num = "00" + this.x;
            document.getElementById("displayNumber").innerHTML = this.num;
          }
          else{
            document.getElementById("displayNumber").innerHTML = this.x;
          }
        }
    },
    rangeFunction2: function() {	
      if(this.numbers.size != 0){
        var r = this.getRandomItem(this.numbers);
        if(r < 100 && r >= 10){
          this.num = "0" + r;
          document.getElementById("displayNumber").innerHTML = this.num;
        }
        else if(r < 10 && r >= 0){
          this.num = "00" + r;
          document.getElementById("displayNumber").innerHTML = this.num;
        }
        else{
          document.getElementById("displayNumber").innerHTML = r;
        }
      }
    },
    closeNav: function(){
      const sidebar =  document.querySelector(".sidebar-numbers")
      sidebar.style.width = "0px"
      sidebar.style.height = "535px"

      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = false;
      this.isclicked4 = false;
      this.isclicked5 = false;
      this.isclicked6 = false;

      setTimeout(() => {console.log(this.buttons())}, 600)

      const sidebarnav = document.querySelectorAll(".sidebar-number-nav")
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "none";
      }
    },

    openNav: function(){
      const sidebar = document.querySelector(".sidebar-numbers")
      sidebar.style.width = "300px"
      sidebar.style.height = "535px"

      this.isclicked1 = true;
      this.isclicked2 = true;
      this.isclicked3 = true;
      this.isclicked4 = true;

      const buttonopen = document.querySelector(".button-open")
      buttonopen.style.display = "none"

      const buttonhide = document.querySelector(".button-hide")
      buttonhide.style.display = "block"     

      const sidebarnav = document.querySelectorAll(".sidebar-number-nav")
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "block";
      }
    },
  }
}
</script>

<template>
    <div id ="vuebuttons">
      <div class="sidebar-numbers">
        <v-col>
          <div class="btn-group" style="width:100%">  
            <span v-if="isclicked1"><button @click="showOptions1" class="btnnumber" id="btn1">Wybierz zakres</button></span>
            <span v-if="isclicked2"><button @click="showOptions2" class="btnnumber" id="btn2">Auto-wyświetlanie</button></span>
            <span v-if="isclicked3"><button @click="rangeFunction2" class="btnnumber" id="btn3">Pula do powtórki</button></span>
            <span v-if="isclicked4"><button @click="showOptions4" class="btnnumber" id="btn4">Własna Lista</button></span>
            <span v-if="isclicked5"><input type="text" id="lrange" class="btnnumber2" name="zakresl" placeholder="Zakres lewy (np: 1)"></span>
            <span v-if="isclicked5"><input type="text" id="rrange" class="btnnumber2" name="zakresr" placeholder="Zakres prawy (np: 999)"></span>
            <span v-if="isclicked5"><button @click="showOptions5(); rangeFunction(); setRangeFunction();" class="btnnumber" type="submit" id="submitButton">Potwierdź</button></span>
            <span v-if="isclicked6"><input type="text2" id="interwał" class="btnnumber2" name="interwał" placeholder="Interwał (np: 1000 -> 1 sekunda)"></span>
            <span v-if="isclicked6"><button @click="autoPlay();showOptions6();" class="btnnumber" type="submit" id="submitButton2">Potwierdź</button></span>
          </div>
          <button max-height="50" max-width="50" class="button-hide" @click="closeNav"><i class="arrow-left"></i></button>
          <button max-height="50" max-width="50" class="button-open" @click="openNav"><i class="arrow-right"></i></button>
        </v-col>
      </div>
    </div>
</template>

<style>
@import '../css/numbersnav.css';
@import '../css/nav.css';
</style>