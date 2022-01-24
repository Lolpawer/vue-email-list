new Vue ({

    el: '#app',

    data: {

        emailList: [],
        index: 0,

    },

    methods: {

        generateEmail: function () {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {

            this.emailList.push(email.data.response);

            this.index++;

            });

        },

    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            this.generateEmail();
        }

    },

});