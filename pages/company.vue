<template>

    <Head>
        <Title>{{ $t('navbar.company') }}</Title>
        <Meta name="description" content="$t('company.description')" />
    </Head>
    <div class="pageContent-container">
        <div class="banner">
            <div class="layer">
                <div class="description">
                    <div class="title font-big">{{ $t('company.title') }}</div>
                    <div class="text font-mini">{{ $t('company.description') }}</div>
                </div>
            </div>
        </div>

        <div class="font-big" style="width: 100%; padding: 20px; font-weight: 1000">
            {{ $t('company.contents[0].title') }}
        </div>
        <div class="font-mini" style="padding: 0 20px; text-align: justify;">
            {{ $t('company.contents[0].content') }}
        </div>
        <div class="icon-container">
            <div class="iconBox">
                <img :src="'/image/company1.png'" />
                <div class="font-mini" style="text-align: center;">
                    {{ $t('company.contents[0].words[0]') }}
                </div>
            </div>
            <div class="iconBox">
                <img :src="'/image/company2.png'" />
                <div class="font-mini" style="text-align: center;">
                    {{ $t('company.contents[0].words[1]') }}
                </div>
            </div>
            <div class="iconBox">
                <img :src="'/image/company3.png'" />
                <div class="font-mini" style="text-align: center;">
                    {{ $t('company.contents[0].words[2]') }}
                </div>
            </div>
            <div class="iconBox">
                <img :src="'/image/company4.png'" />
                <div class="font-mini" style="text-align: center;">
                    {{ $t('company.contents[0].words[3]') }}
                </div>
            </div>
        </div>
        <div class="font-middle" style="width: 100%; padding: 20px; font-weight: 1000">
            {{ $t('company.contents[1].title') }}
        </div>
        <div class="font-mini" style="padding: 0 20px; text-align: justify;">
            {{ $t('company.contents[1].content') }}
        </div>
        <div style="width: 100%; padding: 50px 0">
            <img :src="'/image/timeline3.png'" style="width: 100%" />
        </div>
    </div>
</template>

<style scoped>
.banner {
    background-image: url('~/assets/banner1.jpg');
    background-size: cover;
    background-position: center;
}

.layer {
    padding: 40px;
    width: 100%;
    height: 150%;
    background: rgba(255, 255, 255, 0.5);
}

.description {
    padding: 20px;
    border-radius: 10px;
    width: 70%;
    color: #6d0e77;
    background: rgba(255, 255, 255, 0.7);
    text-align: justify;
}

.title {
    font-weight: 600;
    padding: 0 0 10px;
}

.icon-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px 0;
}


.iconBox {
    width: 180px;
    height: 180px;
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
    border-radius: 10px;
}

.iconBox img {
    padding: 20px;
    height: 90%;
}

@media screen and (max-width: 768px) {
    .layer {
        padding: 20px;
    }

    .description {
        padding: 20px;
        width: 100%;
    }

    .icon-container {
        width: 100%;
        padding: 20px 0;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }

    .iconBox img {
        padding: 20px;
        height: 70%;
    }
}
</style>
