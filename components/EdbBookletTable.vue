<template>
    <div class="gallery_container">
        <div class="gallery">
            <video ref="myVideo" id="myVideo"
                style="border-radius: 5px; width: 100%; height: 100%; object-fit: cover; padding:" autoplay muted loop
                playsinline webkit-playsinline>
                <source :src="'/event/edb/edb.mp4'" type="video/mp4">
            </video>
        </div>
        <div class="gallery_text_container">
            <div class="gallery_text">
                根據行政長官2022年施政報告，從2024/25學年起，資助中學將推行10至14小時的人工智能課程。我們團隊成員榮幸獲教育局邀請，聯同開發初中人工智能課程，並舉辦一系列教師培訓工作坊，實踐Train-the-Trainer概念。
            </div>
        </div>
    </div>
    <table>
        <tr style="background-color: transparent; font-size: x-large">
            <th></th>
            <th class="column_1" style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <div class="column_header column_1_header">
                    第一冊
                </div>
            </th>
            <th class="column_2" style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <div class="column_header column_2_header">
                    第二冊
                </div>
            </th>
            <th class="column_3" style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <div class="column_header column_3_header">
                    第三冊
                </div>
            </th>
        </tr>
        <tr>
            <td>人工智能介紹</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能基礎知識</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能倫理準則</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
        </tr>
        <tr>
            <td>電腦視覺</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
        </tr>
        <tr>
            <td>電腦語音及語言</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能與模擬</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能與機器人推理</td>
            <td class="column_1">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能倫理問題</td>
            <td class="column_1">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能與未來工作</td>
            <td class="column_1">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
        </tr>
        <tr>
            <td>人工智能的社會影響</td>
            <td class="column_1">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                </div>
            </td>
        </tr>
        <tr>
            <td>小組項目設計，開發與討論</td>
            <td class="column_1">
                <div class="image-container">
                    <div class="fit-image" />
                    <div class="fit-image" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_2">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <div class="fit-image" style="margin-left: 5px" />
                    <div class="fit-image" />
                </div>
            </td>
            <td class="column_3">
                <div class="image-container">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    <div class="fit-image" style="margin-left: 5px" />
                    <div class="fit-image" />
                </div>
            </td>
        </tr>
    </table>
    <div class="function_container">
        <a class="download_button" ref="download" :style="{ backgroundColor: download_button_background }"
            @mouseover="this.download_button_background = '#e1e1e1'"
            @mouseout="this.download_button_background = '#F2F3F5'"
            href="https://www.edb.gov.hk/tc/curriculum-development/kla/technology-edu/resources/innovationandtechnologyeducation/resources.html#:~:text=Details-,%E8%A9%B3%E7%B4%B0%E8%B3%87%E6%96%99,-%E6%95%99%E5%B8%AB%E5%9F%B9%E8%A8%93%E8%AA%B2%E7%A8%8B"
            target="_blank">
            <div>
                <div class="download_button_text">
                    初中人工智能課程單元
                </div>
                <div style="font-weight: bold;">學與教資源</div>
            </div>
            <div
                style="background-color: #0C7D65; display: flex; align-items: center; padding: 5px; margin-left: 20px; width: 50px; height: 50px; justify-content: center; border-radius: 25px;">
                <svg style="fill: white;" xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960"
                    width="50">
                    <path
                        d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
            </div>
        </a>

        <div class="key_container">
            <div style="display: flex;">
                <div class="key">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/textbook.svg" />
                    課本
                </div>
                <div class="key">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/worksheet.svg"
                        style="margin-left: 5px" />
                    工作紙
                </div>
                <div class="key">
                    <img alt="Image" class="fit-image" @click="onIconClick()" src="/image/ppt.svg" />
                    簡報表
                </div>
            </div>
        </div>

        <!-- <div style="width: 60%; padding: 10px 10px 10px 0;">
            <div class="key_container download_button">
                <div style="display: flex; flex-direction: column; width: 70%;">
                    <div style="font-weight: 600; color: #0C7D65; font-size: 30px;">
                        初中人工智能課程單元
                    </div>
                    <div>學與教資源</div>
                </div>
                <div style="width: 30%; text-align: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50">
                        <path
                            d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div style="width: 40%; padding: 10px 0 10px 0;">
            <div class="key_container">
                <div class="key">
                    <img alt="Image" class="fit-image" @click="onIconClick()"  src="/image/textbook.svg" />
                    Textbook
                </div>
                <div class="key">
                    <img alt="Image" class="fit-image" @click="onIconClick()"  src="/image/worksheet.svg" style="margin-left: 5px" />
                    WorkSheet
                </div>
                <div class="key">
                    <img alt="Image" class="fit-image" @click="onIconClick()"  src="/image/ppt.svg" />
                    Lecture PPT
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            download_button_background: '#F2F3F5'
        }
    },
    methods: {
        isElementVisible(element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;

            // Check if any part of the element is within the viewport
            const isVerticalVisible = rect.top <= windowHeight && rect.bottom >= 0;
            const isHorizontalVisible = rect.left <= windowWidth && rect.right >= 0;

            return isVerticalVisible && isHorizontalVisible;
        },
        onIconClick() {
            // console.log('123');
            this.$refs.download.scrollIntoView({ behavior: 'smooth' });

            const check_div_task = setInterval(() => {
                if (this.isElementVisible(this.$refs.download)) {
                    clearInterval(check_div_task);

                    let i = 0;
                    const blink_task = setInterval(() => {
                        if (i % 2 == 0) {
                            this.download_button_background = '#e1e1e1'
                        } else {
                            this.download_button_background = '#F2F3F5'
                        }
                        i++;
                        if (i === 6) {
                            clearInterval(blink_task);
                        }
                    }, 250);
                }
            }, 250);
        },
    }
}
</script>

<style scoped>
.gallery_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: red; */
    padding: 0 0px 30px 0px;
    margin-left: 25px;
}

.gallery {
    width: 60%;
    padding: 10px 10px 10px 0;
}

.gallery_text_container {
    width: 40%;
    /* margin: 0 30px; */
    display: flex;
    text-align: justify;
    align-items: center;
}

.gallery_text {
    height: fit-content;
    /* background-color: #F2F3F5; */
    padding: 10px 20px 10px 20px;
    /* line-height: 50px; */
    /* border-radius: 10px; */
    line-height: 35px;
    /* letter-spacing: 1.5px; */
}

table {
    /* display: flex;
    justify-content: center; */
    border-spacing: 0px;
    padding: 0 60px 0 60px;
}

tr {
    height: 45px;
    text-align: center;
}

tr:nth-child(odd) {
    background-color: #F2F3F5;
}


.image-container {
    display: flex;
    height: 100%;
    justify-content: center;
}

.fit-image {
    width: 45px;
    height: 45px;
    padding: 0px 8px 0px 8px;
    cursor: pointer;
}

.column_header {
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: white;
    box-shadow: 1.5px 1.5px 3px gray;
    font-size: 25px;
    font-weight: 500;
}

.column_1_header {
    background-image: linear-gradient(to right, rgb(255, 106, 0), rgb(255, 208, 0));
}

.column_2_header {
    background-image: linear-gradient(to right, green, rgb(179, 255, 0));
}

.column_3_header {
    background-image: linear-gradient(to right, rgb(0, 123, 255), rgb(0, 206, 255));
}

.column_1 {
    background-color: rgba(255, 129, 64, 0.3);
    background-clip: content-box, padding-box;
    padding: 0px 0px 0px 5px;
}

.column_2 {
    background-color: rgba(130, 255, 101, 0.3);
    background-clip: content-box, padding-box;
    padding: 0px 0px 0px 5px;
}

.column_3 {
    background: rgba(0, 206, 255, 0.3);
    background-clip: content-box, padding-box;
    padding: 0px 0px 0px 5px;
}

.function_container {
    padding: 10px 60px 0 60px;
    display: flex;
    flex-direction: row;
}

.download_button {
    width: 60%;
    height: 90px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.5s;
    text-decoration: none;
    color: #666666;
    scroll-margin: 250px;
}

.download_button:hover {
    background-color: #e1e1e1;
}

.download_button_text {
    font-weight: 600;
    color: #0C7D65;
    font-size: 30px;
}

.key_container {
    width: 40%;
    height: 90px;
    padding: 10px 0 10px 0;
    display: flex;
    background-color: #F2F3F5;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.key {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 0 20px;
    margin-top: -7px
}

@media screen and (max-width: 1199.9px) {

    .gallery_container {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        /* background-color: red; */
        padding: 0px;
    }

    .gallery {
        width: 100%;
        /* background-color: red; */
        /* padding: 10px 10px 10px 0; */
    }

    .gallery_text_container {
        width: 100%;
        /* background-color: red; */
        margin-left: 0px;
        padding: 10px 0 10px 0;
        /* line-height: 40px; */
    }

    .gallery_text {
        height: fit-content;
        padding: 10px 20px 10px 20px;
        line-height: 30px;
        border-radius: 10px;
    }

    table {
        /* display: flex;
    justify-content: center; */
        border-spacing: 0px;
        padding: 0px;
    }

    td {
        width: 20%;
    }

    .column_header {
        display: flex;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        height: 60px;
        color: white;
        box-shadow: 1.5px 1.5px 3px gray;
        font-size: 20px;
        font-weight: 500;
    }


    .image-container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
    }

    .key_container {
        display: flex;
        background-color: #EDF1F2;
        border-radius: 10px;
        flex-direction: column;
        padding: 10px;
    }

    .function_container {
        padding: 10px 0 0 0;
        display: flex;
        flex-direction: column;
    }

    .download_button {
        width: 100%;
        height: 90px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background 0.5s;
        text-decoration: none;
        color: #666666;
        scroll-margin: 250px;
    }

    .download_button_text {
        font-weight: 900;
        color: #0C7D65;
        font-size: 21px;
    }

    .key_container {
        width: 100%;
        height: 90px;
        margin-top: 10px;
        padding: 10px 0 10px 0;
        display: flex;
        background-color: #F2F3F5;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

}
</style>