<template>
    <div style="display: flex; flex-direction: column; border-radius: 40px; border: 3px solid orange; padding: 0 0; height: max-content; width: 100%; max-width: 600px; box-sizing: border-box"> 
        <label style="padding: 20px 40px; display: flex; gap: 20px"> 
            <a class="font-big" style="font-weight: 600; color: orange; ">{{number}}</a>
            {{title}}
        </label>
        <img :src="image" style="width: 100%; height: auto">
        <label style="height: 80px; display: flex; justify-content:center; align-items: center"> 
            <slot/>
        </label>
    </div>
</template>

<script>
export default {
  name: 'PictureFrame',
  props: ['title', 'image', 'number']
}
</script>
