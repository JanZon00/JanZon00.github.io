<script>
module.exports = {
    data() {
        return {
            isLoading : true, isclicked1 : true, isclicked2 : true, isclicked3 : true, isclicked4 : true, isclicked5 : false, isclicked6 : false, isclicked7 : false, isclicked8 : false,
            myInterval : null,
            //lettersArray : ["AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AW", "BA", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BW", "CA", "CB", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CW", "DA", "DB", "DC", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DW", "EA", "EB", "ED", "EC", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EW", "FA", "FB", "FC", "FD", "FE", "FG", "FH", "FI", "FJ", "FK", "FL", "FM", "FN", "FO", "FP", "FQ", "FR", "FS", "FT", "FU", "FW", "GA", "GB", "GC", "GD", "GE", "GF", "GH", "GI", "GJ", "GK", "GL", "GM", "GN", "GO", "GP", "GQ", "GP", "GR", "GA", "GT", "GU", "GW", "HA", "HB", "HC", "HD", "HE", "HF", "HG", "HI", "HJ", "HK", "HL", "HM", "HN", "HO", "HP", "HQ", "HR", "HS", "HT", "HU", "HW", "IA", "IB", "IC", "ID", "IE", "IF", "IG", "IH", "IJ", "IK", "IL", "IM", "IN", "IO", "IP", "IQ", "IR", "IS", "IT", "IU", "IW", "JA", "JB", "JC", "JD", "JE", "JF", "JG", "JH", "JI", "JK", "JL", "JM", "JM", "JO", "JP", "JQ", "JR", "JS", "JT", "JU", "JW", "KA", "KB", "KC", "KD", "KE", "KF", "KG", "KH", "KI", "KJ", "KL", "KM", "KN", "KO", "KP", "KQ", "KR", "KS", "KT", "KU", "KW", "LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", "LI", "LI", "LK", "LM", "LN", "LO", "LP", "LQ", "LR", "LS", "LT", "LU", "LW", "MA", "MB", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MJ", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MW", "NA", "NB", "NC", "ND", "NE", "NF", "NG", "NH", "NI", "NJ", "NK", "NL", "NM", "NO", "NP", "NQ", "NR", "NS", "NT", "NU", "NW", "OA", "OB", "OC", "OD", "OE", "OF", "OG", "OH", "OI", "OJ", "OK", "OL", "OM", "ON", "OP", "OQ", "OR", "OS", "OT", "OU", "OW", "PA", "PB", "PC", "PD", "PE", "PF", "PG", "PH", "PI", "PJ", "PK", "PL", "PM", "PN", "PO", "PQ", "PR", "PS", "PT", "PU", "PW", "QA", "QB", "QC", "QD", "QE", "QF", "QG", "QH", "QI", "QJ", "QK", "QL", "QM", "QN", "QO", "QP", "QR", "QS", "QT", "QU", "QW", "RA", "RB", "RC", "RD", "RE", "RF", "RG", "RH", "RI", "RJ", "RK", "RL", "RM", "RN", "RO", "RP", "RS", "RT", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SF", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SP", "SQ", "SR", "ST", "SU", "SW", "TA", "TB", "TC", "TD", "TE", "TF", "TG", "TH", "TI", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TQ", "TR", "TS", "TU", "TW", "UA", "UB", "UC", "UD", "UE", "UF", "UG", "UH", "UI", "UJ", "UK", "UL", "UM", "UN", "UO", "UP", "UQ", "UR", "US", "UT", "UW", "WA", "WB", "WC", "WD", "WE", "WF", "WG", "WH", "WI", "WJ", "WK", "WL", "WM", "WN", "WO", "WP", "WQ", "WR", "WS", "WT", "WU"],
            lettersArray: ["ZZ", "ZJ", "ZD", "ZT", "ZC", "ZP", "ZS", "ZN", "ZB", "ZM","JZ", "JJ", "JD", "JT", "JC", "JP", "JS", "JN", "JB", "JM","DZ", "DJ", "DD", "DT", "DC", "DP", "DS", "DN", "DB", "DM","TZ", "TJ", "TD", "TT", "TC", "TP", "TS", "TN", "TB", "TM","CZ", "CJ", "CD", "CT", "CC", "CP", "CS", "CN", "CB", "CM","PZ", "PJ", "PD", "PT", "PC", "PP", "PS", "PN", "PB", "PM","SZ", "SJ", "SD", "ST", "SC", "SP", "SS", "SN", "SB", "SM","NZ", "NJ", "ND", "NT", "NC", "NP", "NS", "NN", "NB", "NM","BZ", "BJ", "BD", "BT", "BC", "BP", "BS", "BN", "BB", "BM", "MZ", "MJ", "MD", "MT", "MC", "MP", "MS", "MN", "MB", "MM"],
            numbers : new Set(), num : 0, x : 0, rangeArray : [0, 0],
            opcjaEweliny : false, 
            waskie : 1, shuffledArray: null, napis : "WĄSKO",
            currentSrc1: 0, currentSrc2: 0, currentSrc3: 0, currentSrc4: 0,
            imagesArray : [require("../assets/deck/1.png"), require("../assets/deck/2.png"), require("../assets/deck/3.png"), require("../assets/deck/4.png"), require("../assets/deck/5.png"), require("../assets/deck/6.png"), require("../assets/deck/7.png"), require("../assets/deck/8.png"), require("../assets/deck/9.png"), require("../assets/deck/10.png"), require("../assets/deck/11.png"), require("../assets/deck/12.png"), require("../assets/deck/13.png"), require("../assets/deck/14.png"), require("../assets/deck/15.png"), require("../assets/deck/16.png"), require("../assets/deck/17.png"), require("../assets/deck/18.png"), require("../assets/deck/19.png"), require("../assets/deck/20.png"), require("../assets/deck/21.png"), require("../assets/deck/22.png"), require("../assets/deck/23.png"), require("../assets/deck/24.png"), require("../assets/deck/25.png"), require("../assets/deck/26.png"), require("../assets/deck/27.png"), require("../assets/deck/28.png"), require("../assets/deck/29.png"), require("../assets/deck/30.png"), require("../assets/deck/31.png"), require("../assets/deck/32.png"), require("../assets/deck/33.png"), require("../assets/deck/34.png"), require("../assets/deck/35.png"), require("../assets/deck/36.png"), require("../assets/deck/37.png"), require("../assets/deck/38.png"), require("../assets/deck/39.png"), require("../assets/deck/40.png"), require("../assets/deck/41.png"), require("../assets/deck/42.png"), require("../assets/deck/43.png"), require("../assets/deck/44.png"), require("../assets/deck/45.png"), require("../assets/deck/46.png"), require("../assets/deck/47.png"), require("../assets/deck/48.png"), require("../assets/deck/49.png"), require("../assets/deck/50.png"), require("../assets/deck/51.png"), require("../assets/deck/52.png")],
            notyet : false,
            przerwa : false,
        }
    },
    methods: {
            getRandomInt:function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            setRangeFunction: function(){
                this.a = document.getElementById("lrange").value;
                console.log(this.a);
                this.b = document.getElementById("rrange").value;
                console.log(this.b);
            },
            getRandomItem: function(set) {
                let items = Array.from(set);
                return items[Math.floor(Math.random() * items.length)];
            },
            autoPlay: function() {
                var v = document.getElementById("interwał").value;
                console.log(v);	
                this.myInterval = setInterval(this.rangeFunction, v);
            },

            buttons(){
                const buttonopen = document.querySelector(".button-open")
                buttonopen.style.display = "block"
                
                const buttonhide = document.querySelector(".button-hide")
                buttonhide.style.display = "none"
            },
            showOptions1: function(){
                this.isclicked2 = !this.isclicked2
                this.isclicked3 = !this.isclicked3
                this.isclicked4 = !this.isclicked4
                this.isclicked5 = !this.isclicked5
            },
            showOptions2: function(){
                this.isclicked1 = !this.isclicked1
                this.isclicked3 = !this.isclicked3
                this.isclicked4 = !this.isclicked4
                this.isclicked6 = !this.isclicked6
            },
            showOptions3: function(){
                this.isclicked1 = !this.isclicked1
                this.isclicked2 = !this.isclicked2
                this.isclicked4 = !this.isclicked4
                this.isclicked7 = !this.isclicked7
            },
            showOptions4: function(){
                this.isclicked1 = !this.isclicked1
                this.isclicked2 = !this.isclicked2
                this.isclicked3 = !this.isclicked3
            },
            showOptions4a: function(){
                this.isclicked1 = !this.isclicked1
                this.isclicked2 = !this.isclicked2
                this.isclicked3 = !this.isclicked3
                this.isclicked8 = !this.isclicked8
            },
            showOptions4b: function(){
                this.isclicked3 = !this.isclicked3
                this.isclicked1 = !this.isclicked1
                this.isclicked2 = !this.isclicked2
                this.isclicked7 = !this.isclicked7
            },
            showOptions5: function(){
                this.isclicked2 = !this.isclicked2
                this.isclicked3 = !this.isclicked3
                this.isclicked4 = !this.isclicked4
                this.isclicked5 = !this.isclicked5
            },
            showOptions6: function(){
                this.isclicked1 = !this.isclicked1
                this.isclicked3 = !this.isclicked3
                this.isclicked4 = !this.isclicked4
                this.isclicked6 = !this.isclicked6
            },
            showOptions7: function(){
                this.isclicked3 = !this.isclicked3
                this.isclicked1 = !this.isclicked1
                this.isclicked2 = !this.isclicked2
                this.isclicked7 = !this.isclicked7
            },
            showOptions9: function(){
                this.opcjaEweliny = !this.opcjaEweliny
                this.isclicked1 = !this.isclicked1
                this.isclicked2 = !this.isclicked2
                this.isclicked3 = !this.isclicked3
                this.isclicked8 = false
            },
        }
    }
</script>