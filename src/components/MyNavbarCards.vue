<script>
export default {
  el: "#vuebuttons",
  data() {
    return {
      a: 0,
    };
  },
  mixins: [require("../MyMixins/palowanieMixin.vue")],
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowRight") {
        this.rangeFunction();
      }
    });
  },
  methods: {
    setRangeFunction: function () {
      this.a = document.getElementById("cards").value;
      console.log(this.a);
      if (this.a == 2) {
        let obrazek1 = document.getElementById("obrazek1");
        obrazek1.style.display = "none";
        let obrazek2 = document.getElementById("obrazek2");
        obrazek2.style.display = "block";
        let obrazek3 = document.getElementById("obrazek3");
        obrazek3.style.display = "block";
        let obrazek4 = document.getElementById("obrazek4");
        obrazek4.style.display = "none";
      } else if (this.a == 3) {
        let obrazek1 = document.getElementById("obrazek1");
        obrazek1.style.display = "none";
        let obrazek2 = document.getElementById("obrazek2");
        obrazek2.style.display = "block";
        let obrazek3 = document.getElementById("obrazek3");
        obrazek3.style.display = "block";
        let obrazek4 = document.getElementById("obrazek4");
        obrazek4.style.display = "block";
      } else {
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
    rangeFunction: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key == "p") {
          clearInterval(this.myInterval);
        }
      });
      var karta1, karta2, karta3, karta4;
      if (this.a == 2 && this.opcjaEweliny == false) {
        karta2 = Math.floor(Math.random() * 52);
        karta3 = karta2;

        while (karta3 == karta2) {
          karta3 = Math.floor(Math.random() * 52);
        }
        if (karta2 != karta3) {
          this.currentSrc2 = karta2;
          this.currentSrc3 = karta3;
        }
      } else if (this.a == 2 && this.opcjaEweliny == true) {
        karta2 = Math.floor(Math.random() * 52);
        karta3 = karta2;

        while (karta3 == karta2) {
          karta3 = this.getRandomInt(40, 51);
        }

        if (karta2 != karta3) {
          var s = this.getRandomInt(0, 3);
          if (s == 1) {
            this.currentSrc2 = karta2;
            this.currentSrc3 = karta3;
          } else {
            this.currentSrc2 = karta3;
            this.currentSrc3 = karta2;
          }
        }
      } else if (this.a == 3) {
        karta1 = Math.floor(Math.random() * 52);
        karta2 = karta1;
        karta3 = karta1;

        while (karta2 == karta1) {
          karta2 = Math.floor(Math.random() * 52);
        }

        while (karta3 == karta1 || karta3 == karta2) {
          karta3 = Math.floor(Math.random() * 52);
        }
        if (karta2 != karta1 && karta3 != karta1 && karta3 != karta2) {
          this.currentSrc2 = karta1;
          this.currentSrc3 = karta2;
          this.currentSrc4 = karta3;
        }
      } else {
        karta1 = Math.floor(Math.random() * 52);
        karta2 = karta1;
        karta3 = karta1;
        karta4 = karta1;

        while (karta2 == karta1) {
          karta2 = Math.floor(Math.random() * 52);
        }
        while (karta3 == karta1 || karta3 == karta2) {
          karta3 = Math.floor(Math.random() * 52);
        }
        while (karta4 == karta1 || karta4 == karta2 || karta4 == karta3) {
          karta4 = Math.floor(Math.random() * 52);
        }
        if (
          karta2 != karta1 &&
          karta3 != karta1 &&
          karta3 != karta2 &&
          karta4 != karta1 &&
          karta4 != karta2 &&
          karta4 != karta3
        ) {
          this.currentSrc1 = karta1;
          this.currentSrc2 = karta2;
          this.currentSrc3 = karta3;
          this.currentSrc4 = karta4;
        }
      }
    },
    changeSpaceBetween: function () {
      if (this.waskie == 0) {
        document.getElementById("displayCardd1").style.paddingLeft = "0px";
        document.getElementById("displayCardd2").style.paddingLeft = "24px";
        document.getElementById("displayCardd3").style.paddingLeft = "48px";
        document.getElementById("displayCardd4").style.paddingLeft = "72px";
        this.waskie = 1;
        this.napis = "WĄSKO";
      } else {
        document.getElementById("displayCardd1").style.paddingRight = "0px";
        document.getElementById("displayCardd2").style.paddingLeft = "38px";
        document.getElementById("displayCardd3").style.paddingLeft = "76px";
        document.getElementById("displayCardd4").style.paddingLeft = "114px";
        this.waskie = 0;
        this.napis = "SZEROKO";
      }
    },
    rangeFunction2: function () {
      if (this.numbers.size != 0) {
        var r = this.getRandomItem(this.numbers);
        if (r < 100 && r >= 10) {
          this.num = "0" + r;
          document.getElementById("displayNumberl").innerHTML = this.num;
        } else if (r < 10 && r >= 0) {
          this.num = "00" + r;
          document.getElementById("displayNumberl").innerHTML = this.num;
        } else {
          document.getElementById("displayNumberl").innerHTML = r;
        }
      }
    },
    closeNav: function () {
      const sidebar = document.querySelector(".sidebar-cards");
      sidebar.style.width = "0px";
      sidebar.style.height = "535px";
      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = false;
      this.isclicked4 = false;
      this.isclicked5 = false;
      this.isclicked6 = false;
      this.isclicked7 = false;
      this.isclicked8 = false;

      setTimeout(() => {
        console.log(this.buttons());
      }, 600);
      const sidebarnav = document.querySelectorAll(".sidebar-cards-nav");
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "none";
      }
    },
    changeImage: function () {
      var img = document.getElementById("image");
      img.src = "../assets/deck/3.png";
    },
    openNav: function () {
      const sidebar = document.querySelector(".sidebar-cards");
      sidebar.style.width = "300px";
      sidebar.style.height = "535px";
      this.isclicked1 = true;
      this.isclicked2 = true;
      this.isclicked3 = true;
      this.isclicked4 = true;

      const buttonopen = document.querySelector(".button-open");
      buttonopen.style.display = "none";

      const buttonhide = document.querySelector(".button-hide");
      buttonhide.style.display = "block";

      const sidebarnav = document.querySelectorAll(".sidebar-cards-nav");
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "block";
      }
    },
  },
};
</script>

<template>
  <div id="vuebuttons">
    <div class="sidebar-cards">
      <v-col>
        <div class="btn-group" style="width: 100%">
          <span v-if="isclicked1"
            ><button @click="showOptions1" class="btncards" id="btn1">
              Wybierz ilość kart
            </button></span
          >
          <span v-if="isclicked2"
            ><button @click="showOptions2" class="btncards" id="btn2">
              Auto-wyświetlanie
            </button></span
          >
          <span v-if="isclicked3"
            ><button @click="showOptions3" class="btncards" id="btn3">
              Sposób wyświetlania
            </button></span
          >
          <span v-if="isclicked4"
            ><button @click="showOptions4a" class="btncards" id="btn4">
              Dodatkowe opcje
            </button></span
          >
          <span v-if="isclicked5"
            ><input
              type="text"
              id="cards"
              name="cards"
              class="btncards2"
              placeholder="Ilość wyświetlanych kart (2, 3 lub 4)"
          /></span>
          <span v-if="isclicked5"
            ><button
              @click="
                showOptions5();
                rangeFunction();
                setRangeFunction();
              "
              class="btncards"
              type="submit"
              id="submitButton"
            >
              Potwierdź
            </button></span
          >
          <span v-if="isclicked6"
            ><input
              type="text2"
              id="interwał"
              class="btncards2"
              name="interwał"
              placeholder="Interwał (np: 1000 -> 1 sekunda)"
          /></span>
          <span v-if="isclicked6"
            ><button
              @click="
                autoPlay();
                showOptions6();
              "
              class="btncards"
              type="submit"
              id="submitButton2"
            >
              Potwierdź
            </button></span
          >
          <span v-if="isclicked7"
            ><button
              @click="changeSpaceBetween()"
              class="btncards"
              type="confirm"
              id="submitButton2"
            >
              {{ napis }}
            </button></span
          >
          <span v-if="isclicked8"
            ><button
              @click="showOptions9()"
              class="btncards"
              type="confirm"
              id="submitButton3"
            >
              Opcja Eweliny
            </button></span
          >
        </div>
        <button
          max-height="50"
          max-width="50"
          class="button-hide"
          @click="closeNav"
        >
          <i class="arrow-left"></i>
        </button>
        <button
          max-height="50"
          max-width="50"
          class="button-open"
          @click="openNav"
        >
          <i class="arrow-right"></i>
        </button>
      </v-col>
    </div>
  </div>
  <v-row class="text-center pa-0 ma-0">
    <v-col cols="12" class="pa-0 ma-0">
      <div class="site">
        <div id="displaycard">
          <div id="displayCardd1">
            <v-img
              :src="imagesArray[currentSrc1]"
              aspect-ratio="1"
              class="card1"
              id="obrazek1"
            />
          </div>
          <div id="displayCardd2">
            <v-img
              :src="imagesArray[currentSrc2]"
              aspect-ratio="1"
              class="card2"
              id="obrazek2"
            />
          </div>
          <div id="displayCardd3">
            <v-img
              :src="imagesArray[currentSrc3]"
              aspect-ratio="1"
              class="card3"
              id="obrazek3"
            />
          </div>
          <div id="displayCardd4">
            <v-img
              :src="imagesArray[currentSrc4]"
              aspect-ratio="1"
              class="card4"
              id="obrazek4"
            />
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style>
@import "../css/cardsnav.css";
@import "../css/nav.css";
</style>
