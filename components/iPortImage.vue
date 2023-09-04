<template>
    <div class="mobile container">
        <nuxt-img :src="'iport2.svg'" :width="330" preload />
        <div style="position: absolute; opacity: 0.8; width: 158px; height: 122px; top: 23px;" class="anime"> 
            <div class="light"> </div>
            <div class="screen">
                <nuxt-img class="image" :src="'logo.png'"/>
            </div>
        </div>
    </div>

    <div class="pc container">
        <nuxt-img :src="'iport2.svg'" :width="700" preload />
        <div style="position: absolute; opacity: 0.8; width: 330px; height: 256px; top: 35px;" class="anime"> 
            <div class="light"> </div>
            <div class="screen">
                <nuxt-img class="image" :src="'logo.png'"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: max-content; display: flex; justify-content: flex-start; position: relative; 
    }

    .anime{
        background: black;
        width: 400px;
        height: 300px;
        animation: anime3 2s ease-in infinite;
        border: 1px solid black;
        left: 50%;
        transform: translateX(-50%);
    }

    .light{
        position: absolute;
        width: 1px;
        height: 1px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        animation: anime .1s ease-in forwards ;
        border-radius: 50%;
    }

    .screen{
        width: 100%;
        height: 100%;
        background: white;
        animation: anime2 .6s ease-in forwards ;
        transform: scaleX(0.9) scaleY(0.5);
        box-shadow: 0 0 20px 20px white;
        display: flex; 
        justify-content: center; 
        align-items: center
    }

    .image{
        width: 80%;
        opacity: 0;
        animation: anime4 2s ease-in-out forwards .6s;
    }

    @keyframes anime {
        0% {
            box-shadow: 0 0 5px 5px white;
        }
        20% {
            box-shadow: 0 0 30px 30px white;
        }
        60% {
            box-shadow: 0 0 70px 30px white;
        }
        65% {
            box-shadow: 0 0 70px 30px white;
        }
        70% {
            box-shadow: none;
        }
    }

    @keyframes anime2 {
        0% {
            transform: scaleX(0) scaleY(0)
        }
        30% {
            transform: scaleX(0) scaleY(0)
        }
        50% {
            transform: scaleX(0.8) scaleY(0.01);
            box-shadow: 0 0 10px 10px white;
        } 
        70% {
            transform: scaleX(0.8) scaleY(0.05);
            box-shadow: 0 0 20px 20px white;
        }   
        100% {
            transform: scaleX(1) scaleY(1);
            box-shadow: none;
        } 
    }

    @keyframes anime4 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        } 
    }

    .mobile{
        width: 330px;
        height: 214px;
    }

    .pc{
        width: 700px;
        height: 427px;
    }

    @media screen and (max-width: 1024px) {
        .pc{
            display: none;
        }
    }

    @media screen and (min-width: 1025px) {
        .mobile{
            display: none;
        }
    }
</style>