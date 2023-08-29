<!-- Please remove this file from your project -->
<template>
  <div ref="menubar" class="menubar unselectable" :class="{expand: isExpand, menubar1: isTop, menubar2: !isTop}">
    <div class="layer" style="height: 100%">
      <NuxtLink to="/" style="text-decoration: none">
        <div class="logo-container" style="position: relative; width: 180px; height: 60px; display:flex; justify-content:center; align-items: center; cursor: pointer;">
          <img src="@/assets/image/logo.png" style="position: relative; height: 70%;">
          <label class="title">愛動智</label>
        </div>
      </NuxtLink>
      <div style="height: 60px; width: 60px; display: flex; justify-content: center; align-items: center; cursor: pointer"> 
        <img src="@/assets/image/materials/icon_menu.png" @click="isExpand = !isExpand" width="36" height="36" class="btn">
      </div>
      <!-- <MenuIcon :size="36" /> -->
    </div>
    <ul ref="userMenu" class="userMenu">
      <li ref="submenu1">
        <a class="subMenuBtn">
          關於我們
        </a>
        <ul class="subMenu">
          <li>
            <NuxtLink to="/company">
              公司簡介
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/staff">
              公司架構
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              聯絡我們
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li ref="submenu1">
        <NuxtLink :to="{ name: 'cuhk-icar' }" class="subMenuBtn" >
            CUHK iCar
        </NuxtLink>
      </li>
      <li ref="submenu1">
        <NuxtLink :to="{ name: 'cuhk-iport' }" class="subMenuBtn" >
          CUHK iPort
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ishare">
          iShare
        </NuxtLink>
      </li>
      <li ref="submenu1">
        <a class="subMenuBtn">
          學習平台
        </a>
        <ul class="subMenu">
          <li>
            <a href="https://iport.eduairhk.com" target="_blank">
              iPort ePlatform
            </a>
          </li>
          <li>
            <a href="https://ipython.eduairhk.com" target="_blank">
              iPython 
              <div class="border">
                敬請期待
              </div>
            </a>
          </li>
          <li>
            <a href="https://itrain.eduairhk.com" target="_blank">
              iTrain
              <div class="border">
                敬請期待
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
      return {
          isExpand: false,
          isTop: true,
      };
  },
  mounted(){
    let self = this;
    this.$router.afterEach((to, from, next) => {
        self.isExpand = false;
    })
    document.addEventListener('scroll', ()=> {
      const scrollY = window.scrollY;
       if (scrollY === 0) {
        this.isTop = true;
       } else{
        this.isTop = false;
       }
    })
  },
  methods:{
      isActive(route) {
          return this.$route.path.startsWith(route);
      },
  },
}
</script>

<style>

.border{
  border: 1px solid #6d0e77; 
  border-radius: 5px; 
  font-size: 12px; 
  margin-left: 5px; 
  display: flex;
  justify-content: center;
  padding: 2px;
  text-indent: 0;
}

.subMenu li:hover .border{
  border: 1px solid white;
}

@media screen and (min-width: 1025px) {
  .menubar{
    position: fixed;
    height: 60px;
    z-index: 999;
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 5px gray;
    top: 0;
    left: 0;
    white-space: nowrap;
    font-size: 18px;
  }

  .menubar .layer{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    max-height: 60px;
    width: 100%;
  }

  .menubar .layer .btn{
    display: none;
  }

  .userMenu{
    list-style: none;
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .userMenu li a{
    width: 130px;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6d0e77;
    text-decoration: none;
  }

  .subMenu{
    display: none;
    position: absolute;
    flex-direction: column;
    box-shadow: 0px 1px 5px gray;
    flex-wrap: nowrap;
    width: 130px;
    max-width: 130px;
    padding: 0;
  }

  .subMenu li{
    border-top: 1px solid gray;
    list-style: none;
    position: relative;
    display: block;
    height: 60px;
    width: 130px;
    font-size: 15px;
  }

  .subMenu a{
      display: flex;
      position: relative;
      height: 100%;
      left: 0;
  }

  .menubar ul li:hover .subMenu{
      display: flex;
      position: absolute;
  }



  .menubar ul li.current .subMenu{
      display: flex;
      position: absolute;
  }

  .menubar .layer span{
      display: none;
      visibility: hidden;
      margin-right: 10px;
  }

  .menubar .layer label{
      margin-left: 20px;
      color: rgb(117,15,109);
      font-weight: 600;
  }

  .menubar .logo-conatiner{
      position: relative;
      height: 100%;
      display:flex;
      justify-content:center;
      align-items: center;
  }


  .menubar .title{
    cursor: pointer;
    font-size: 20px;
    text-decoration: none !important;
  }

  .nuxt-link{
    text-decoration: none;
  }

  .nuxt-link-active{
    text-decoration:none;
    cursor: pointer;
  }

  .menubar2 {
      background-color: white;
  }

  .menubar2 .subMenu{
      background-color: white;
  }

  .menubar2 ul li:hover{
      background-color: #6d0e77;
  }

  .menubar2 ul li:hover >a{
      color: white;
  }
}

@media screen and (max-width: 1024px) {
  .menubar{
    position: fixed;
    height: 60px;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 5px gray;
    top: 0;
    left: 0;
    padding: 0 10px;
    white-space: nowrap;
    font-size: 18px;
        overflow: auto;

  }

  .menubar .layer{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    max-height: 60px;
    width: 100%;
  }

  .menubar .btn{
    display: block;
  }

  .menubar .userMenu{
    display: none;
    list-style: none;
    position: relative;
    top: 0;
  }

  .menubar.expand{
    display: flex;
    height: 100vh;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 30px;
  }

  .menubar.expand .userMenu li{
     text-indent: 50px;
  }

  .menubar.expand .subMenu li{
     text-indent: 100px;
  }

  .menubar.expand ul{
    list-style: none;
    padding: 0;
  }

  .menubar.expand .userMenu{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  

  .userMenu li a{
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #6d0e77;
    text-decoration: none;
    left: 0
  }

/*   .subMenu{
    display: none;
    position: absolute;
    flex-direction: column;
    box-shadow: 0px 1px 5px gray;
    flex-wrap: nowrap;
    width: 130px;
    max-width: 130px;
    padding: 0;
  }

  .subMenu li{
    border-top: 1px solid gray;
    list-style: none;
    position: relative;
    display: block;
    height: 60px;
    width: 130px;
    font-size: 15px;
  }

  .subMenu a{
      display: flex;
      position: relative;
      height: 100%;
      left: 0;
  }

  .menubar ul li:hover .subMenu{
      display: flex;
      position: absolute;
  }

  .menubar ul li.current .subMenu{
      display: flex;
      position: absolute;
  } */

  .menubar .layer span{
      display: none;
      visibility: hidden;
      margin-right: 10px;
  }

  .menubar .layer label{
      margin-left: 20px;
      color: rgb(117,15,109);
      font-weight: 600;
  }

  .menubar .logo-conatiner{
      position: relative;
      height: 100%;
      display:flex;
      justify-content:center;
      align-items: center;
  }


  .menubar .title{
    cursor: pointer;
    font-size: 20px;
    text-decoration: none !important;
  }

  .nuxt-link{
    text-decoration: none;
  }

  .nuxt-link-active{
    text-decoration:none;
    cursor: pointer;
  }

  .menubar2 {
      background-color: white;
  }

  .menubar2 .subMenu{
      background-color: white;
  }

  .menubar2 ul li:hover{
      background-color: #6d0e77;
  }

  .menubar2 ul li:hover >a{
      color: white;
  }


/*   .menubar .layer .btn{
    display: block;
  }
  .menubar ul li span{
      font-size: 20px;
  }
  .menubar .layer{
      width: 100%;
  }
  .menubar .layer span{
      display: block;
      visibility: visible;
  }
  .menubar .layer .title{
      margin-left: 20px;
      display: none;
  }
  .menubar .layer .title a{
      display: none;
  }
  .menubar li{
      width: 100vw;
  }
  .menubar li a{
      width: 100%;
  }
  .userMenu{
      width: 100%;
      display: none;
      visibility: hidden;
  }
  .menubar {
      width: 100%;
      left: 0;
      padding-left: 0;
  }
  .menubar.expand .userMenu{
    width: 100%;
    display: flex;
    flex-direction: column;
    visibility: visible;
  }
  .menubar.expand ul li .subMenu{
      display: flex;
      visibility: visible;
      position: relative;
      height: fit-content;
  }
  .menubar.expand ul li:hover .subMenu{
      display: flex;
      visibility: visible;
      position: relative;
      height: fit-content;
  }
  .menubar.expand ul li.current .subMenu{
      display: flex;
      visibility: visible;
      position: relative;
      height: fit-content;
  }
  .menubar.expand .subMenu{
      visibility: visible;
  }
  .menubar.expand{
      height: 100vh;
      z-index: 999;
      flex-direction: column;
      justify-content: flex-start;
  }
  .menubar.expand .userMenu li{
      display: flex;
      visibility: visible;
      flex-wrap: wrap;
  } */
}

/* @media screen and (min-width: 600px) {
    .menubar1 {
        background-color: rgba(255,255,255,0.7); 
    }
    .menubar1 .subMenu{
        background-color: rgba(255,255,255,0.7);
    }
    .menubar1 ul li:hover{
        background-color: rgb(147, 39, 159);
    }
    .menubar1 ul li:hover >a{
        color: white;
    }
    .menubar1 ul li .router-link-active{
        background-color: rgba(109,14,119,1);
        color: white;
    }
    .menubar1 .current .subMenuBtn{
        background-color: rgb(147, 39, 159);
        color: white;
    }
}

@media screen and (max-width: 1024px) {
    .menubar1 {
        background-color: rgba(255,255,255,0.7);
    }
    .menubar1 .subMenu{
        background-color: rgba(255,255,255,0.7);
    }
    .menubar1 ul li:hover{
        background-color: rgba(109,14,119,1);
    }
    .menubar1 ul li:hover>a{
        color: white;
    }
}
 */

  .menubar1 {
      background-color: rgba(255,255,255,0.7); 
  }
  .menubar1.expand {
      background-color: rgb(255,255,255); 
  }
  .menubar1 .subMenu{
      background-color: rgba(255,255,255,0.9);
  }
  .menubar1 ul li:hover{
      background-color: rgb(147, 39, 159);
  }
  .menubar1 ul li:hover >a{
      color: white;
  }
</style>
