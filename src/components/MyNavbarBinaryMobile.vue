<script>

export default {
  el: '#vuebuttons',
  data() {
    return {
      a : 1, b : 1,
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
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    setRangeFunction: function(){
        this.a = document.getElementById("lrange").value;
        console.log(this.a);
        this.b = document.getElementById("rrange").value;
        console.log(this.b);
        if(this.b == 1){
            var pole1 = document.getElementById("displayBinary");
            pole1.style.paddingTop = "30px";
            pole1.style.height = "100px";
            pole1.style.width = "260px";
        }
        else if(this.b == 2){
            var pole2 = document.getElementById("displayBinary");
            pole2.style.height = "120px";
            pole2.style.paddingTop = "20px";
            pole2.style.width = "230px";
        }
        else{
            var pole3 = document.getElementById("displayBinary");
            pole3.style.height = "150px";
            pole3.style.paddingTop = "20px";
            pole3.style.width = "200px";
        }
    },
    odstepKreska : function(){
        this.przerwa = !this.przerwa;
    },
    rangeFunction: function(){
        var c = this.generateBinary(this.a * this.b);
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

        var result = this.x;
        var col = 0;

        if(this.b > 1){
            if(this.b == 2){
                col = this.a;
                while(col < this.a * this.b){
                    result = result.slice(0, col) + '<br>' + result.slice(col);
                    col += 2;
                }
                document.getElementById("displayBinary").innerHTML = result;
            }
            else{
                col = 3;
                result = result.slice(0, col) + '<br>' + result.slice(col, col*2) + '<br>' + result.slice(col*2);             
                document.getElementById("displayBinary").innerHTML = result;
            }
        }
        else{
            if(this.przerwa == true){
                var od = this.a/2;
                result = result.slice(0, od) + " " + result.slice(od); 
            }
            document.getElementById("displayBinary").innerHTML = result;    
        }
    },
    generateBinary: function(length) {
        const characters ='10';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
  }
}
</script>

<template>
    <div id ="vuebuttons">
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-binary-group" style="width:100%">  
              <button @click="showOptions()" style="width:33%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:33%">Auto-wyświetlanie</button>
              <button @click="showOptions3()" style="width:33%">Wygląd</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options">	
                <input type="text-binary" id="lrange" name="zakresl" placeholder="Liczba kolumn (np: 8)">
                <input type="text-binary" id="rrange" name="zakresr" placeholder="Liczba wierszy (np: 2)">
                <button @click="setRangeFunction(); rangeFunction();" class="submit-button-binary" type="submit" id="submitButton" style="background-color:#ff8400">Potwierdź</button> 
            </div>
		
            <div id="Options2">
                <input type="text2-binary" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-binary" type="submit-binary" id="submitButton" style="background-color:#ff8400">Potwierdź</button>
            </div>

            <div id="Options3">
                <button @click="odstepKreska()" class="submit-button-binary" type="submit-binary" id="submitButton2">Przerwa</button>
            </div>
        </v-container>
    </div>
</template>

<style>
  @import '../css/palowaniemobile.css';
</style>