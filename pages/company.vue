<template>
    <Head>
        <Title>{{$t('navbar.company')}}</Title>
        <Meta name="description" content="$t('company.description')"/>
    </Head>
    <div class="pageContent-container">
        <div class="banner">
            <label class="layer">
                <div class="description">
                    <div class="title font-big">{{$t('company.title')}}</div>
                    <div class="text font-small">{{$t('company.description')}}</div>
                </div>
            </label>
        </div>
        <div class="font-middle" style="width: 100%; padding: 20px; font-weight: 1000">
            {{$t('company.contents[0].title')}}
        </div>
        <div class="font-small" style="padding: 0 20px;">
            {{$t('company.contents[0].content')}}
        </div>
        <div class="icon-container" style="">
            <div class="iconBox">
                <img :src="'/image/company1.png'" />
                {{$t('company.contents[0].words[0]')}}
            </div>
            <div class="iconBox">
                <img :src="'/image/company2.png'" />
                {{$t('company.contents[0].words[1]')}}
            </div>
            <div class="iconBox">
                <img :src="'/image/company3.png'" />
                {{$t('company.contents[0].words[2]')}}
            </div>
            <div class="iconBox">
                <img :src="'/image/company4.png'" />
                {{$t('company.contents[0].words[3]')}}
            </div>
        </div>
        <div style="font-size: 25px; width: 100%; padding: 20px; font-weight: 1000">
            {{$t('company.contents[1].title')}}
        </div>
        <div style="padding: 0 20px; font-size: 20px">
            {{$t('company.contents[1].content')}}
        </div>
        <div style="width: 100%; padding: 50px 0">
            <img :src="'/image/timeline3.png'" style="width: 100%" />
        </div>
    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    top: 0;
    overflow: hidden; 
    position: relative;
    background-image: url('~/assets/banner1.jpg');

}

.banner .layer{
    position: absolute; 
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background: rgba(255, 255, 255, 0.5);
}

.banner .layer .description{
    color: #6d0e77; 
    position: relative; 
    width: 65%;
    height: 80%;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
}

.banner .layer .description .title{
    color: #6d0e77; 
    position: relative; 
    z-index: 1;
    top: 0;
    left: 0;
    font-weight: 600;
    padding: 0 0 10px 0;
}

.banner .layer .description .text{
    
}

.icon-container{
    display: flex; justify-content: space-around; width: 100%; padding: 20px 0;
}

.iconBox{
    position: relative;
    width: 175px; 
    height: 175px; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;
    color: #6d0e77;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(0);
    transition: all 0.5 ease-in;
    font-weight: 600;
}

.iconBox img{
    padding: 20px;
    height: 120px;
}

@media screen and (max-width: 1199.9px) {
    .banner{
        width: 100%;
        max-width: 100%;
        background-position-x: 50%;
    }

    .banner .layer .description{
        width: 100%;
        padding: 15px;
    }

    .icon-container{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }

    .iconBox{
        position: relative;
        width: 140px; 
        height: 140px; 
        margin: 0;
    }

}

/* .iconBox div{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 0, 0.5);
    transition: all .5s ease-in-out;
}
.iconBox:hover{
    transform: translateY(-50%);
}
.iconBox:hover div{
    transform: translateY(100%);
} */
</style>
