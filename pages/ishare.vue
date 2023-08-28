<template>
  <Title>其他資源</Title>
  <Meta name="description" content="多個網上免費的AI 學習資源，好玩之餘又不用註冊登記，助你輕鬆愉快體驗AI的奇妙。"/>
  <div class = "pageContent-container">
    <div class="text-container"  onclick="">
      <label class="subTitle"  ref="resource">iShare</label><br>
      <div class="pageDescription">苦苦搜尋網上免費的AI 學習資源，好玩之餘又不想註冊登記？iShare幫你輕鬆愉快體驗AI的奇妙。</div>
      <br><br>
      <div class="resourceContainer">
        <div class="resourceType">
          <label :class="{active: externalJson != null && externalJson['vision'] == focusClass}" @click="setFocusClass('vision')">視覺</label>
          <label :class="{active: externalJson != null && externalJson['hear'] == focusClass}" @click="setFocusClass('hear')">聽覺</label>
          <label :class="{active: externalJson != null && externalJson['speak'] == focusClass}" @click="setFocusClass('speak')">語音</label>
          <label :class="{active: externalJson != null && externalJson['read'] == focusClass}" @click="setFocusClass('read')">理解</label>
          <label :class="{active: externalJson != null && externalJson['create'] == focusClass}" @click="setFocusClass('create')">創作</label>
          <label :class="{active: externalJson != null && externalJson['advance'] == focusClass}" @click="setFocusClass('advance')">進階</label>
        </div>
        <div class="resourceSelector unselectable">
          <template v-if="externalJson != null">
            <ResourceItem v-for="item in focusClass"
              :key="item.name"
              :text='item.name'
              :url='item.url'
              @click="setFocus(item)"
              @touchleave="setFocus(item)"
              :class="{active: focus == item}"/>
          </template>
        </div>
        <div class="resourceDescriptor" >
          <template v-if="focus != null">
            <div class="title">{{focus.name}}</div>
            <div class="description" style="font-size: 16px; line-height: 24px">{{focus.description}}</div>
            <div class="media"><a :href="focus.url" target="_blank">前往網站</a></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultExternalJson from '@/assets/external.js'

export default {
  name: 'Resource',
  data () {
    return {
      focus: null,
      focusClass: null,
      externalJson: null
    }
  },
  mounted () {
    const self = this
    self.externalJson = defaultExternalJson
    self.focusClass = self.externalJson.vision
    self.focus = self.focusClass[0]

    /* axios.get('http://localhost:3000/web/external').then(result => {
        self.externalJson = result.data;
        self.focusClass = self.externalJson.vision;
        self.focus = self.focusClass[0]
    }).catch(error => {
        console.log(error)
    }) */
  },
  methods: {
    setFocus (item) {
      this.focus = item
    },
    setFocusClass (className) {
      this.focusClass = this.externalJson[className]
      this.focus = this.focusClass[0]
    }
  }
}
</script>

<style>
.resourceContainer{
    width: 100%;
    height: 360px;
    display: flex;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.resourceType{
    width: 17%;
    display: flex;
    flex-direction: column;
}

.resourceType label{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.16);
}

.resourceType label:hover{
    background: gainsboro;
    cursor: pointer;
}

.resourceType label.active{
    background: gainsboro;
    cursor: pointer;
}

.resourceSelector{
    display: flex;
    width: 500px;
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 20px;
    overflow-y: auto;
}

.resourceDescriptor{
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.resourceDescriptor .title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-size: 25px;
    padding-bottom: 10px;
    white-space: break-spaces;
}

.resourceDescriptor .media a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    background: rgb(112,48,160);
    color: white;
    text-decoration: none;
}

.resourceDescriptor .media a:hover{
    background: rgba(112,48,160, 0.8);
}

.resourceDescriptor .media{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
}

.resourceDescriptor .description{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 45%;
    line-height: 30px;
}

@media screen and (max-width: 767px) {
    .resourceContainer{
        flex-direction: column;
        height: min-content;
        align-items: center;
    }

    .resourceType{
        width: 100%;
        display: flex;
        flex-direction: row;
        height: min-content;
    }

    .resourceType label{
        width: calc(100% / 6);
        height: 50px;
        line-height: 50px;
    }

    .resourceSelector{
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 20px;
    }

    .resourceDescriptor{
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .resourceDescriptor div{
        margin-bottom: 20px;
    }

    .resourceDescriptor .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        height: 20%;
        font-size: 25px;
    }

    .resourceDescriptor .media{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35%;
    }

    .resourceDescriptor .description{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 45%;
        line-height: 30px;
    }
}

@media screen and (min-width: 768px) and (max-width: 1000px){
    .resourceDescriptor .title{
        font-size: 23px;
    }

    .resourceDescriptor .description{
        font-size: 18px;
    }
}

.resourceDescriptor .material-design-icon{
    display: inline-flex;
}

</style>
