<!-- Please remove this file from your project -->
<template>
  <div ref="menubar" class="menubar unselectable menubar2" :class="{expand: isExpand, menubar1: false, menubar2: !isTop}">
    <div class="layer" style="height: 100%">
      <NuxtLink to="/" style="text-decoration: none">
        <div class="logo-container" style="position: relative; width: 180px; height: 60px; display:flex; justify-content:center; align-items: center; cursor: pointer;">
          <img :src="'/image/logo.png'" style="position: relative; height: 70%;">
          <label class="title">愛動智</label>
        </div>
    </NuxtLink>
      <div class="userMenuBtn" style=""> 
        <img :src="'/image/materials/icon_menu.png'" @click="isExpand = !isExpand" width="36" height="36" class="btn">
      </div>
    </div>

    <ul ref="userMenu" class="userMenu">
      <li ref="submenu1">
        <a class="subMenuBtn">
          {{$t('navbar.aboutus')}}
        </a>
        <ul class="subMenu">
          <li>
            <NuxtLink to="/company">
              {{$t('navbar.company')}}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/staff">
              {{$t('navbar.staff')}}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              {{$t('navbar.contactus')}}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li ref="submenu1">
        <NuxtLink :to="{ name: 'news' }" class="subMenuBtn" >
            {{$t('navbar.news')}}
        </NuxtLink>
      </li>
      <li ref="submenu1">
        <NuxtLink :to="{ name: 'courses' }" class="subMenuBtn" >
            {{$t('navbar.courses')}}
        </NuxtLink>
      </li>
      <li ref="submenu1">
        <NuxtLink :to="{ name: 'icar' }" class="subMenuBtn" >
            {{$t('navbar.icar')}}
        </NuxtLink>
      </li>
      <li ref="submenu1">
        <NuxtLink :to="{ name: 'iport' }" class="subMenuBtn" >
            {{$t('navbar.iport')}}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ishare">
          {{$t('navbar.ishare')}}
        </NuxtLink>
      </li>
      <li ref="submenu1">
        <a class="subMenuBtn">
          {{$t('navbar.platform')}}
        </a>
        <ul class="subMenu">
          <li>
            <a href="https://iport.eduairhk.com" target="_blank">
              {{$t('navbar.iportPlatform')}}
            </a>
          </li>
          <li>
            <a href="https://ipython.eduairhk.com" target="_blank">
              {{$t('navbar.itrain')}} 
              <div class="border">
                敬請期待
              </div>
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <div class="langBar" :class="{hideWhenNeed: isExpand}" v-show="false">
      <div @click="setLocale('zh', true)" :class="{active: $i18n.locale == 'zh'}">繁</div>
      <div @click="setLocale('cn', true)" :class="{active: $i18n.locale == 'cn'}">简</div>
      <!-- <div @click="setLocale('en', true)" :class="{active: $i18n.locale == 'en'}">Eng</div> -->
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'CommonHeader',
  data() {
      return {
        isExpand: false,
        isTop: true,
        locale: useI18n()
      };
  },
  mounted(){
    let self = this;
    this.$router.afterEach((to, from, next) => {
        self.isExpand = false;
    })
    this.setLocale(localStorage.getItem('locale'))
  },
  methods:{
    isActive(route) {
        return this.$route.path.startsWith(route);
    },
    setLocale(locale, refresh = false){
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale);
      /* if (refresh) {
        location.reload();
      } */
    }
  },
}
</script>

<style scoped>

.border{
  border: 1px solid #6d0e77; 
  border-radius: 5px; 
  margin-left: 5px; 
  display: flex;
  justify-content: center;
  padding: 2px;
  text-indent: 0;
}

.subMenu li:hover .border{
  border: 1px solid white;
}

.menubar .layer .btn{
  display: block;
}

@media screen and (min-width: 1200px) {
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
    text-wrap: pretty;
    text-align: center;
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

@media screen and (max-width: 1199.9px) {
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

}

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

<style scoped>
.langBar{
  width: max-content; height: 100%; display: flex; gap: 10px;
  min-height: 20px;
  position: fixed;
  top: calc(100% - 40px); right: 5px;
}

.langBar div{
  width: 35px; display: flex; justify-content: center; font-size: 14px; 
  height: 35px;
  color: #6d0e77;
  cursor: pointer;
  background: rgba(230, 230, 230, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0.9;
}

.langBar div:hover, .langBar div.active{
  background: #6d0e77;
  color: white;
}

.rhs{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
}

.userMenuBtn{
  height: 60px; width: 60px; justify-content: center; align-items: center; cursor: pointer;
  display: flex;
}

@media screen and (max-width: 1199.9px) {
  .langBar.hideWhenNeed{
    display: none;
  }
}
</style>
