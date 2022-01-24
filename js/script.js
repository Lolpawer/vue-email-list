new Vue ({

    el: '#app',

    data: {

        emailList: [],

    },

    methods: {

        generateEmail: function () {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {

            this.emailList.push(email.data.response);

            });

        },

    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            this.generateEmail();
        }

    },

});