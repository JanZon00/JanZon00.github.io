<script>
export default {
  el: '#vuebuttons',
  data() {
    return {
      a : 'AB', b : 'WU',
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
  }
}
</script>

<template>
    <div id ="vuebuttons">
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-letters-group" style="width:100%">  
              <button @click="showOptions()" style="width:33%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:33%">Auto-wyświetlanie</button>
              <button @click="rangeFunction2()" style="width:33%">Pula do powtórki</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options">	
                <input type="text-letters" id="lrange" name="zakresl" placeholder="Zakres lewy (np: AB)">
                <input type="text-letters" id="rrange" name="zakresr" placeholder="Zakres Prawy (np: WU)">
                <button @click="setRangeFunction(); rangeFunction();" class="submit-button-letters" type="submit" id="submitButton" style="background-color:#126b06">Potwierdź</button> 
            </div>
		
            <div id="Options2">
                <input type="text2-letters" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-letters" type="submit-letters" id="submitButton" style="background-color:#126b06">Potwierdź</button>
            </div>
        </v-container>
    </div>
</template>

<style>
  @import '../css/palowaniemobile.css';
</style>