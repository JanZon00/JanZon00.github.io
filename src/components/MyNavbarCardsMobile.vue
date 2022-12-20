<script>
export default {
  el: '#vuebuttons',
    data() {
    return {
      a : 0,
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
  },
  methods: {
    setRangeFunction: function(){
        this.a = document.getElementById("cards").value;
        console.log(this.a);
        if(this.a == 2){
          let obrazek1 = document.getElementById("obrazek1");
          obrazek1.style.display = "none";
          let obrazek2 = document.getElementById("obrazek2");
          obrazek2.style.display = "block";
          let obrazek3 = document.getElementById("obrazek3");
          obrazek3.style.display = "block";
          let obrazek4 = document.getElementById("obrazek4");
          obrazek4.style.display = "none";
        }
        else if(this.a == 3){
          let obrazek1 = document.getElementById("obrazek1");
          obrazek1.style.display = "none";
          let obrazek2 = document.getElementById("obrazek2");
          obrazek2.style.display = "block";
          let obrazek3 = document.getElementById("obrazek3");
          obrazek3.style.display = "block";
          let obrazek4 = document.getElementById("obrazek4");
          obrazek4.style.display = "block";
        }
        else{
          let obrazek1 = document.getElementById("obrazek1");
          obrazek1.style.display = "block";
          let obrazek2 = document.getElementById("obrazek2");
          obrazek2.style.display = "block";
          let obrazek3 = document.getElementById("obrazek3");
          obrazek3.style.display = "block";
          let obrazek4 = document.getElementById("obrazek4");
          obrazek4.style.display = "block";
        }
    },

    rangeFunction: function(){
        window.addEventListener('keydown', (e) => {
          if (e.key == 'p') {
            clearInterval(this.myInterval);
          }
        });
        var karta1, karta2, karta3, karta4;
        if(this.a == 2 && this.opcjaEweliny == false){
		
            karta2 = Math.floor(Math.random() * 52);
            karta3 = karta2;
		
            while(karta3 == karta2){
                karta3 = Math.floor(Math.random() * 52);
            }
            if(karta2 != karta3){
                this.currentSrc2 = karta2;
                this.currentSrc3 = karta3;
            }
        }
        else if(this.a == 2 && this.opcjaEweliny == true){
		
            karta2 = Math.floor(Math.random() * 52);
            karta3 = karta2;
		
            while(karta3 == karta2){
                karta3 = this.getRandomInt(40, 51);
            }
        
            if(karta2 != karta3){
                var s = this.getRandomInt(0, 3);
                if(s == 1){
                this.currentSrc2 = karta2;
                this.currentSrc3 = karta3;
                }
                else{
                this.currentSrc2 = karta3;
                this.currentSrc3 = karta2;
                }
            }
        }
        else if(this.a == 3){
		
            karta1 = Math.floor(Math.random() * 52);
            karta2 = karta1;
            karta3 = karta1;
		
            while(karta2 == karta1){
                karta2 = Math.floor(Math.random() * 52);
            }
		
		
            while(karta3 == karta1 || karta3 == karta2){
                karta3 = Math.floor(Math.random() * 52);
            }
            if(karta2 != karta1 && karta3 != karta1 && karta3 != karta2){
                this.currentSrc2 = karta1;
                this.currentSrc3 = karta2;
                this.currentSrc4 = karta3;
            }
        }
        else{
		
            karta1 = Math.floor(Math.random() * 52);
            karta2 = karta1;
            karta3 = karta1;
            karta4 = karta1;
		
            while(karta2 == karta1){
                karta2 = Math.floor(Math.random() * 52);
            }	
            while(karta3 == karta1 || karta3 == karta2){
                karta3 = Math.floor(Math.random() * 52);
            }
            while(karta4 == karta1 || karta4 == karta2 || karta4 == karta3){
                karta4 = Math.floor(Math.random() * 52);
            }
            if(karta2 != karta1 && karta3 != karta1 && karta3 != karta2 && karta4 != karta1 && karta4 != karta2 && karta4 != karta3){
                this.currentSrc1 = karta1;
                this.currentSrc2 = karta2;
                this.currentSrc3 = karta3;
                this.currentSrc4 = karta4;

            }
        }
    },
    changeSpaceBetween: function() {
      if(this.waskie == 0){
        document.getElementById('displayCard1').style.paddingLeft = "67px";
        document.getElementById('displayCard2').style.paddingLeft = "91px";
        document.getElementById('displayCard3').style.paddingLeft = "115px";
        document.getElementById('displayCard4').style.paddingLeft = "139px";
        this.waskie = 1;
        this.napis = "WĄSKO"
      }
      else{
        document.getElementById('displayCard1').style.paddingLeft = "46px";
        document.getElementById('displayCard2').style.paddingLeft = "84px";
        document.getElementById('displayCard3').style.paddingLeft = "122px";
        document.getElementById('displayCard4').style.paddingLeft = "160px";
        this.waskie = 0;
        this.napis = "SZEROKO"
      }
    },  
    changeImage: function(){
        var img = document.getElementById('image');
        img.src = '../assets/deck/3.png';
    },
    Eweliny: function(){
        this.opcjaEweliny = !this.opcjaEweliny
    }
  }
}
</script>

<template>
    <div id ="vuebuttons">
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-cards-group" style="width:100%">  
              <button @click="showOptionsx()" style="width:25%">Wybierz zakres</button>
              <button @click="showOptionsx2()" style="width:25%">Auto-wyświetlanie</button>
              <button @click="showOptionsx3()" style="width:25%">Sposób wyświetlania</button>
              <button @click="showOptionsx4()" style="width:25%">Dodatkowe opcje</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Optionsx">	
                <input type="text-cards" id="cards" name="cards" placeholder="Ilość wyświetlanych kart (2, 3 lub 4)">
                <button @click="setRangeFunction(); rangeFunction();" class="submit-button-cards" type="submit" id="submitButton" style="background-color:#DE1400">Potwierdź</button> 
            </div>
		
            <div id="Optionsx2">
                <input type="text2-cards" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-cards" type="submit-cards" id="submitButton" style="background-color:#DE1400">Potwierdź</button>
            </div>

            <div id="Optionsx3">
                <button @click="changeSpaceBetween()" class="submit-button-cards" type="confirm" id="submitButton">{{napis}}</button>
            </div>

            <div id="Optionsx4">
               <button @click="Eweliny()" class="submit-button-cards" type="confirm" id="submitButton3">Opcja Eweliny</button>
            </div>
        </v-container>
            <v-row class="row justify-content-center no-gutters">
                <div id="displayCard1"><v-img
                    :src='imagesArray[currentSrc1]'
                    aspect-ratio="1"
                    class="card1"
                    id="obrazek1"
                  /></div>
                  <div id="displayCard2"><v-img
                      :src='imagesArray[currentSrc2]'
                      aspect-ratio="1"
                      class="card2"
                      id="obrazek2"
                    /></div>
                    <div id="displayCard3"><v-img
                      :src='imagesArray[currentSrc3]'
                      aspect-ratio="1"
                      class="card3"
                      id="obrazek3"
                    /></div>
                    <div id="displayCard4"><v-img
                        :src='imagesArray[currentSrc4]'
                        aspect-ratio="1"
                        class="card4"
                        id="obrazek4"
                      /></div>
            </v-row>
    </div>
</template>

<style>
  @import '../css/palowaniemobile.css';
#displayCard1, #displayCard2, #displayCard3, #displayCard4{
    margin: 0;
    padding-right: 0px;
    position: absolute;
    left: 26%;
}
@media screen and (max-width: 800px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left:21%; }
}
@media screen and (max-width: 700px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 18%; }
}
@media screen and (max-width: 600px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 13%; }
}
@media screen and (max-width: 500px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 9%; }
}
@media screen and (max-width: 450px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 3%; }
}
@media screen and (max-width: 400px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 0%; }
}
#displayCard1 {
  padding-left: 67px;  
  z-index: 1;
}
#displayCard2 {
  padding-left: 91px;
  z-index: 2;
}
#displayCard3 {
  padding-left: 115px;
  z-index: 3;
}
#displayCard4 {
  padding-left: 139px;
  z-index: 4;
}
</style>