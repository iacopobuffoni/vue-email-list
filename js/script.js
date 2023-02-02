const { createApp } = Vue

createApp({
    data() {
      return {
        emails: [],
        show : false
      }
    },
    methods: {
        getEmail () {
            this.emails = [];
            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                    (resp) => {
                        console.log(resp);
                        console.log(resp.data);
                        console.log(resp.data.response);
                        this.emails.push(resp.data.response)
                        if (this.emails.length == 10) {
                            this.show = true
        
                        }

                    }
                )
                
            }
            
            
        }
    },
    created () { 
        this.getEmail()
        
    }
}).mount('#app')