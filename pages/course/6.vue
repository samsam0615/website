<template>
    <Title>入門編程班 (Microbit X 積木編程)</Title>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; justify-content: center;">
        <img :src="'/course/info/6.jpg'" style="width: 100%">
        <div class="text" style="padding: 60px"> 
            <NuxtLink to="/contact" style="text-decoration: none">
            <div style="margin-top: 30px; padding: 20px; font-size: 20px; background: orange; color: white; border-radius: 10px; cursor: pointer; display: flex; justify-content: center; min-width: max-content"> 
                {{$t('course.button')}}
            </div>
            </NuxtLink>
        </div>
    </div>
</template>
