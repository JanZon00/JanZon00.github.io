<script>

export default {
  el: '#vuebuttons',
  data() {
    return {
      a : 0,
      b : 0,
    }
  },
  mixins: [
    require('../MyMixins/palowanieMixin.vue'),
    require('../MyMixins/palowanieMobileMixin.vue')
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
        //this.x = document.getElementById("displayNumber");
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
    showOptions: function(){
      var x = document.getElementById("Options");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions2: function() {
      var x = document.getElementById("Options2");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    }
  }
}
</script>

<template>
    <div id ="vuebuttons">
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-numbers-group" style="width:100%">  
              <button @click="showOptions()" style="width:33%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:33%">Auto-wyświetlanie</button>
              <button @click="rangeFunction2()" style="width:33%">Pula do powtórki</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options">	
                <input type="text-numbers" id="lrange" name="zakresl" placeholder="Zakres lewy (np: 0)">
                <input type="text-numbers" id="rrange" name="zakresr" placeholder="Zakres Prawy (np: 999)">
                <button @click="setRangeFunction(); rangeFunction();" class="submit-button-numbers" type="submit" id="submitButton" style="background-color:#366799">Potwierdź</button> 
            </div>
		
            <div id="Options2">
                <input type="text2-numbers" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-numbers" type="submit-numbers" id="submitButton" style="background-color:#366799">Potwierdź</button>
            </div>
        </v-container>
    </div>
</template>

<style>
  @import '../css/palowaniemobile.css';
</style>