const app = Vue.createApp({
    data(){
        return{
            wattage: null,
            powerRate: null,
            hUsed: null,
            dUsed: null,
            cost: 0,
            kWh: 0,
       }
    },
    methods: {  
       calculate : function() {   
            this.wattage = parseFloat(Number(this.wattage))
            this.powerRate = parseFloat(Number(this.powerRate))
            this.hUsed = parseFloat(Number(this.hUsed))
            this.dUsed = parseFloat(Number(this.dUsed))
            this.kWh = (this.wattage * this.hUsed) / 1000
            this.cost = (this.kWh * this.powerRate) * this.dUsed
        },

        clear : function() {
            this.wattage = null;
            this.powerRate = null;
            this.hUsed = null;
            this.dUsed = null;
            this.cost = 0;
            this.kWh = 0;
        },

        show : function(){
            return this.kWh + " kWh | Php " + this.cost;
        }
    }
 })
 
app.mount('#app')