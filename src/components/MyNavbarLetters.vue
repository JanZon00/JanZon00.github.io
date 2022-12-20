<script>
export default {
  el: '#vuebuttons',
  data() {
    return {
      a : 'AB', b : 'WU',
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
    rangeFunction: function() {	
        var indexa = this.lettersArray.indexOf(this.a);
        var indexb = this.lettersArray.indexOf(this.b);
        var c = this.getRandomInt(indexa, indexb);
        this.x = document.getElementById("displayletter");
        this.x.style.cssText  = "font-size:44px;color:white;"
        this.x = this.lettersArray[c];
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
        document.getElementById("displayletter").innerHTML = this.x;
    },
    rangeFunction2: function() {	
      if(this.numbers.size != 0){
        var r = this.getRandomItem(this.numbers);
        if(r < 100 && r >= 10){
          this.num = "0" + r;
          document.getElementById("displayletter").innerHTML = this.num;
        }
        else if(r < 10 && r >= 0){
          this.num = "00" + r;
          document.getElementById("displayletter").innerHTML = this.num;
        }
        else{
          document.getElementById("displayletter").innerHTML = r;
        }
      }
    },
    closeNav: function(){
      const sidebarl =  document.querySelector(".sidebar-letters")
      sidebarl.style.width = "0px"
      sidebarl.style.height = "535px"

      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = false;
      this.isclicked4 = false;
      this.isclicked5 = false;
      this.isclicked6 = false;

      setTimeout(() => {console.log(this.buttons())}, 600)

      const sidebarlnav = document.querySelectorAll(".sidebar-letters-nav")
      for (let i = 0; i < sidebarlnav.length; i++) {
        sidebarlnav[i].style.display = "none";
      }
    },

    openNav: function(){
      const sidebarl = document.querySelector(".sidebar-letters")
      sidebarl.style.width = "300px"
      sidebarl.style.height = "535px"

      this.isclicked1 = true;
      this.isclicked2 = true;
      this.isclicked3 = true;
      this.isclicked4 = true;

      const buttonopen = document.querySelector(".button-open")
      buttonopen.style.display = "none"

      const buttonhide = document.querySelector(".button-hide")
      buttonhide.style.display = "block"     

      const sidebarlnav = document.querySelectorAll(".sidebar-letters-nav")
      for (let i = 0; i < sidebarlnav.length; i++) {
        sidebarlnav[i].style.display = "block";
      }
    },
  }
}
</script>

<template>
    <div id ="vuebuttons">
      <div class="sidebar-letters">
        <v-col>
          <div class="btn-group" style="width:100%">  
            <span v-if="isclicked1"><button @click="showOptions1" class="btnletters" id="btn1">Wybierz zakres</button></span>
            <span v-if="isclicked2"><button @click="showOptions2" class="btnletters" id="btn2">Auto-wyświetlanie</button></span>
            <span v-if="isclicked3"><button @click="rangeFunction2()" class="btnletters" id="btn3">Pula do powtórki</button></span>
            <span v-if="isclicked4"><button @click="showOptions4" class="btnletters" id="btn4">Własna Lista</button></span>
            <span v-if="isclicked5"><input type="text" id="lrange" class="btnletters2" name="zakresl" placeholder="Zakres lewy (np: AB)"></span>
            <span v-if="isclicked5"><input type="text" id="rrange" class="btnletters2" name="zakresr" placeholder="Zakres prawy (np: WU)"></span>
            <span v-if="isclicked5"><button @click="showOptions5(); rangeFunction(); setRangeFunction();" class="btnletters" type="submit" id="submitButton">Potwierdź</button></span>
            <span v-if="isclicked6"><input type="text2" id="interwał" class="btnletters2" name="interwał" placeholder="Interwał (np: 1000 -> 1 sekunda)"></span>
            <span v-if="isclicked6"><button @click="autoPlay();showOptions6();" class="btnletters" type="submit" id="submitButton2">Potwierdź</button></span>
          </div>
          <button max-height="50" max-width="50" class="button-hide" @click="closeNav"><i class="arrow-left"></i></button>
          <button max-height="50" max-width="50" class="button-open" @click="openNav"><i class="arrow-right"></i></button>
        </v-col>
      </div>
    </div>
</template>

<style>
@import '../css/lettersnav.css';
@import '../css/nav.css';
</style>