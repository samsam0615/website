<template>
  <div class="header unselectable">
    <div>
      <NuxtLink to="/" style="text-decoration: none; display: flex;" @click="closeMobileMenu()">
        <img :src="'/image/logo_with_cuhk_2.svg'" style="height: 48px;">
        <div class="charity_number">
          慈善機構註冊編號：91／18516</div>
      </NuxtLink>
    </div>

    <div class="pc_menu">
      <div class="pc_menu_button pc_menu_dropdown_head">
        <div class="pc_menu_dropdown_head_button">
          <div>
            {{ $t('navbar.aboutus') }}
          </div>
        </div>
        <div class="pc_menu_dropdown_content">
          <NuxtLink class="pc_menu_button pc_menu_dropdown_button" to="/company">
            {{ $t('navbar.company') }}
          </NuxtLink>
          <NuxtLink class="pc_menu_button pc_menu_dropdown_button" to="/staff">
            {{ $t('navbar.staff') }}
          </NuxtLink>
          <NuxtLink class="pc_menu_button pc_menu_dropdown_button" to="/contact">
            {{ $t('navbar.contactus') }}
          </NuxtLink>
        </div>
      </div>

      <NuxtLink class="pc_menu_button" :to="{ name: 'news' }">
        {{ $t('navbar.news') }}
      </NuxtLink>
      <NuxtLink class="pc_menu_button" :to="{ name: 'course' }">
        {{ $t('navbar.course') }}
      </NuxtLink>
      <NuxtLink class="pc_menu_button" :to="{ name: 'icar' }">
        {{ $t('navbar.icar') }}
      </NuxtLink>
      <NuxtLink class="pc_menu_button" :to="{ name: 'iport' }">
        {{ $t('navbar.iport') }}
      </NuxtLink>
      <NuxtLink class="pc_menu_button" to="/ishare">
        {{ $t('navbar.ishare') }}
      </NuxtLink>

      <!-- <NuxtLink class="pc_menu_shopping_cart" :to="{ name: 'store' }">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
          <path
            d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
      </NuxtLink> -->

      <div class="pc_menu_button pc_menu_dropdown_head">
        <div>
          {{ $t('navbar.platform') }}
        </div>
        <div class="pc_menu_dropdown_content">
          <a class="pc_menu_button pc_menu_dropdown_button" href="https://iport.eduairhk.com" target="_blank">
            {{ $t('navbar.iportPlatform') }}
          </a>
          <a class="pc_menu_button pc_menu_dropdown_button" href="https://itrain.eduairhk.com" target="_blank">
            {{ $t('navbar.itrain') }}
            <div class="border">
              {{ $t('navbar.comingSoon') }}
            </div>
          </a>
        </div>
      </div>


      <div class="pc_menu_lang_head" v-show="false">
        <div>
          {{ language[0].lang }}
        </div>
        <div class="pc_menu_lang_dropdown_content">
          <a class="pc_menu_lang_button " @click="setLocale(language[1].key, true)">
            {{ language[1].lang }}
          </a>
          <a class="pc_menu_lang_button " @click="setLocale(language[2].key, true)">
            {{ language[2].lang }}
          </a>
        </div>
      </div>

    </div>


    <!-- mobile -->
    <div class="mobile_menu">
      <Transition v-show="show_mobile_menu_icon">
        <div class="mobile_menu_icon" @click="openMobileMenu()">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </Transition>

      <div class="mobile_menu_background" :style="{ height: mobile_us_menu_height }">
        <div class="mobile_menu_function_bar">
          <div class="mobile_close_icon" @click="closeMobileMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>

          <div class="mobile_lang" v-show="false">
            <div class="mobile_lang_button" @click="setLocale('zh', true)" :class="{ active: $i18n.locale == 'zh' }">
              繁
            </div>
            <div class="mobile_lang_button" @click="setLocale('cn', true)" :class="{ active: $i18n.locale == 'cn' }">
              简
            </div>
            <div class="mobile_lang_button" @click="setLocale('en', true)" :class="{ active: $i18n.locale == 'en' }">
              EN
            </div>
          </div>
        </div>

        <div class="mobile_menu_collapsibles" :style="{ 'background-color': abous_us_background_color }">
          <div style="display: flex; flex-direction: column;">
            <div class="mobile_menu_button" @click="expendMenu_aboutUs()"
              style="display: flex; justify-content: space-between;">
              {{ $t('navbar.aboutus') }}
              <div class="mobile_expend_icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </div>
            </div>
            <div class="mobile_menu_collapsibles_expend" :style="{ height: about_us_menu_height }">
              <NuxtLink class="mobile_menu_button" to="/company" @click="closeMobileMenu()">
                {{ $t('navbar.company') }}
              </NuxtLink>
              <NuxtLink class="mobile_menu_button" to="/staff" @click="closeMobileMenu()">
                {{ $t('navbar.staff') }}
              </NuxtLink>
              <NuxtLink class="mobile_menu_button " to="/contact" @click="closeMobileMenu()">
                {{ $t('navbar.contactus') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink class="mobile_menu_button" :to="{ name: 'news' }" @click="closeMobileMenu()">
          {{ $t('navbar.news') }}
        </NuxtLink>
        <NuxtLink class="mobile_menu_button" :to="{ name: 'course' }" @click="closeMobileMenu()">
          {{ $t('navbar.course') }}
        </NuxtLink>
        <NuxtLink class="mobile_menu_button" :to="{ name: 'icar' }" @click="closeMobileMenu()">
          {{ $t('navbar.icar') }}
        </NuxtLink>
        <NuxtLink class="mobile_menu_button" :to="{ name: 'iport' }" @click="closeMobileMenu()">
          {{ $t('navbar.iport') }}
        </NuxtLink>
        <NuxtLink class="mobile_menu_button" to="/ishare" @click="closeMobileMenu()">
          {{ $t('navbar.ishare') }}
        </NuxtLink>


        <div class="mobile_menu_collapsibles" :style="{ 'background-color': e_platform_background_color }">
          <div style="display: flex; flex-direction: column;">
            <div class="mobile_menu_button" @click="expendMenu_ePlatform()"
              style="display: flex; justify-content: space-between;">
              {{ $t('navbar.platform') }}
              <div class="mobile_expend_icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </div>
            </div>
            <div class="mobile_menu_collapsibles_expend" :style="{ height: e_platform_menu_height }">
              <a class="mobile_menu_button" href="https://iport.eduairhk.com" target="_blank"
                @click="closeMobileMenu()">
                {{ $t('navbar.iportPlatform') }}
              </a>
              <a class="mobile_menu_button" href="https://itrain.eduairhk.com" target="_blank"
                @click="closeMobileMenu()">
                {{ $t('navbar.itrain') }}
                <div class="border">
                  {{ $t('navbar.comingSoon') }}
                </div>
              </a>
            </div>
          </div>
        </div>




        <!-- <div class="mobile_menu_collapsibles" :style="{ 'background-color': e_platform_background_color }">
          <div class="mobile_menu_button" @click="expendMenu_ePlatform()"
            style="display: flex; justify-content: space-between;">
            {{ $t('navbar.aboutus') }}
            <div class="mobile_expend_icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </div>
          </div>
          <div class="mobile_menu_collapsibles_expend" ref="myElement" :style="{ height: e_platform_menu_height }">
            <NuxtLink class="mobile_menu_button" to="/company">
              {{ $t('navbar.company') }}
            </NuxtLink>
            <NuxtLink class="mobile_menu_button" to="/staff">
              {{ $t('navbar.staff') }}
            </NuxtLink>
            <NuxtLink class="mobile_menu_button " to="/contact">
              {{ $t('navbar.contactus') }}
            </NuxtLink>
          </div>
        </div> -->

      </div>


    </div>

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  data() {
    return {
      show_mobile_menu_icon: true,
      mobile_us_menu_height: '0%',
      about_us_menu_height: '0px',
      abous_us_background_color: 'transparent',
      e_platform_menu_height: '0px',
      e_platform_background_color: 'transparent',

      locale: useI18n(),
      language: [
        {
          lang: '繁', key: 'zh'
        },
        {
          lang: '简', key: 'cn'
        },
        {
          lang: 'EN', key: 'en'
        },
      ]
    }
  },
  mounted() {
    let self = this;
    this.$router.afterEach((to, from, next) => {
      self.isExpand = false;
    })
    const locale = localStorage.getItem('locale');
    if (locale) {
      this.setLocale(localStorage.getItem('locale'))
    }
  },
  methods: {
    openMobileMenu() {
      this.mobile_us_menu_height = '100%'
      this.show_mobile_menu_icon = false
    },
    closeMobileMenu() {
      this.mobile_us_menu_height = '0%'
      this.show_mobile_menu_icon = true
    }
    ,
    expendMenu_aboutUs() {
      if (this.about_us_menu_height === '0px') {
        this.about_us_menu_height = 48 * 3 + 'px'
        this.abous_us_background_color = 'rgba(109,14,119, 0.15)'
        this.e_platform_menu_height = '0px'
        this.e_platform_background_color = 'transparent'
      } else {
        this.about_us_menu_height = '0px'
        this.abous_us_background_color = 'transparent'
      }
    },
    expendMenu_ePlatform() {
      if (this.e_platform_menu_height === '0px') {
        this.about_us_menu_height = '0px'
        this.abous_us_background_color = 'transparent'
        this.e_platform_menu_height = 48 * 2 + 'px'
        this.e_platform_background_color = 'rgba(109,14,119, 0.15)'
      } else {
        this.e_platform_menu_height = '0px'
        this.e_platform_background_color = 'transparent'
      }
    },
    setLocale(locale, refresh = false) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale);
      /* if (refresh) {
        location.reload();
      } */

      switch (locale) {
        case 'zh':
          this.language = [
            {
              lang: '繁', key: 'zh'
            },
            {
              lang: '简', key: 'cn'
            },
            {
              lang: 'EN', key: 'en'
            },
          ]
          break
        case 'cn':
          this.language = [
            {
              lang: '简', key: 'cn'
            },
            {
              lang: '繁', key: 'zh'
            },
            {
              lang: 'EN', key: 'en'
            },
          ]
          break
        case 'en':
          this.language = [
            {
              lang: 'EN', key: 'en'
            },
            {
              lang: '繁', key: 'zh'
            },
            {
              lang: '简', key: 'cn'
            },
          ]
          break
      }
    }
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  box-shadow: 0px 1px 5px gray;
  z-index: 99;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.charity_number {
  color: black;
  display: flex;
  align-items: center;
  position: absolute;
  height: 48px;
  top: 0px;
  left: 220px;
  max-width: fit-content;
  font-size: small;
  color: gray
}

/* pc menu */
.pc_menu_button {
  min-width: 80px;
  height: 48px;
  padding: 0px 15px;
  background-color: transparent;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #6d0e77;
  cursor: pointer;
  font-size: 15px;
}

.pc_menu_dropdown_button {
  width: 100px;
  float: none;
  font-size: 13px;
  text-align: center;
  padding: 0px 0px;
  border-width: 0.5px;
  border-top-style: solid;
}

.pc_menu_button:hover {
  background-color: #6d0e77;
  color: white;
}

.pc_menu_dropdown_content {
  display: none;
  position: absolute;
  top: 48px;
  background-color: white;
  box-shadow: 0px 1px 5px gray;
  z-index: 99;
}

.pc_menu_dropdown_head {
  width: 100px;
}

.pc_menu_dropdown_head:hover .pc_menu_dropdown_content {
  display: block;
}

.border {
  border: 1px solid #6d0e77;
  border-radius: 5px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  padding: 2px;
  text-indent: 0;
  font-size: 10px;
}

.pc_menu_dropdown_button:hover .border {
  border: 1px solid white;
}


.pc_menu_shopping_cart {
  width: 48px;
  height: 48px;
  padding: 13px;
  background-color: transparent;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  fill: #6d0e77;
  cursor: pointer;
}

.pc_menu_shopping_cart:hover {
  background-color: #6d0e77;
  color: white;
}

.pc_menu_shopping_cart:hover svg {
  fill: white;
}

.pc_menu_lang_head {
  width: 48px;
  height: 48px;
  padding: 0px 15px;
  background-color: transparent;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #6d0e77;
  cursor: pointer;
  font-size: 15px;
}

.pc_menu_lang_head:hover {
  background-color: #6d0e77;
  color: white;
}

.pc_menu_lang_dropdown_content {
  display: none;
  position: absolute;
  top: 48px;
  background-color: white;
  box-shadow: 0px 1px 5px gray;
  z-index: 99;
}

.pc_menu_lang_head:hover .pc_menu_lang_dropdown_content {
  display: block;
}

.pc_menu_lang_button {
  width: 48px;
  height: 48px;
  padding: 0px 15px;
  background-color: transparent;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #6d0e77;
  cursor: pointer;
  font-size: 15px;
  border-width: 0.5px;
  border-top-style: solid;
}

.pc_menu_lang_button:hover {
  background-color: #6d0e77;
  color: white;
}

/* mobile menu */
.mobile_menu_icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mobile_close_icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #6d0e77;
  cursor: pointer;
}

.mobile_close_icon:hover {
  background-color: #6d0e77;
  fill: white;
}

.mobile_menu_background {
  /* display: block; */
  position: fixed;
  top: 48px;
  left: 0px;
  width: 100%;
  /* height: max-content; */
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.mobile_menu_function_bar {
  height: 48px;
  display: flex;
  justify-content: space-between;
}

.mobile_lang {
  width: fit-content;
  height: 48px;
  display: flex;

}

.mobile_lang_button {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6d0e77;
  cursor: pointer;
}

.mobile_menu_button {
  width: 100%;
  min-height: 48px;
  padding: 0px 0px 0px 15px;
  background-color: transparent;
  display: flex;
  float: left;
  justify-content: left;
  align-items: center;
  text-decoration: none;
  color: #6d0e77;
  cursor: pointer;
  font-size: 15px;
  border-bottom: 1px solid rgb(184, 184, 184);
}

.mobile_menu_button:hover {
  background-color: #6d0e77;
  color: white;
}

.mobile_lang_button:hover {
  background-color: #6d0e77;
  color: white;
}

.mobile_expend_icon {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: #6d0e77;
}

.mobile_menu_button:hover .mobile_expend_icon {
  fill: white;
}

.mobile_menu_button:hover .border {
  border: 1px solid white;
}

.mobile_menu_collapsibles {
  display: block;
  background-color: transparent;
  transition: background-color 0.3s ease-out;

}

.mobile_menu_collapsibles_expend {
  height: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: height 0.3s ease-out;
}

@media screen and (min-width: 1200px) {
  .pc_menu {
    display: block;
  }

  .mobile_menu {
    display: none;
  }
}

@media screen and (max-width: 1199.9px) {

  .charity_number {
    /* max-width: 150px; */
    display: none;
  }

  .pc_menu {
    display: none;
  }

  .mobile_menu {
    display: block;
  }
}
</style>
