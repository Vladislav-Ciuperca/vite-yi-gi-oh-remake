const { createApp } = Vue

createApp({
    data() {
        return {
            button: document.getElementsByClassName("btn"),
            clickIndex: 0,
            files: [
                {
                    image: './img/chameleon-1.jpg',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: './img/chameleon-2.jpg',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: './img/chameleon-3.jpg',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: './img/chameleon-4.jpg',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: './img/chameleon-5.jpg',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }, {
                    image: './img/chameleon-6.jpg',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        }
    },
    methods: {
        changeImage(target) {
            // ho deciso di fare il carodello con l'opearatore %
            if (target == 'dx') {
                this.clickIndex = (this.clickIndex + 1) % this.files.length
            }
            else {
                this.clickIndex = (this.clickIndex - 1 + this.files.length) % this.files.length; 
            }
        }
    }
}).mount('#app')