import BossNameCard from 'components/BossNameCard.vue';
<template>

    <Head>
        <Title>{{ $t('navbar.staff') }}</Title>
        <Meta name="description" content="$t('staff.description')" />
    </Head>
    <div class="pageContent-container" style="width: 100%;">
        <div class="text-container" style="width: 100%; padding: 20px">
            <label class="pageTitle font-big">{{ $t('staff.title') }}</label>
            <div class="pageDescription font-small" style="text-align: justify;">{{ $t('staff.description') }}</div>
        </div>
        <!-- <div class="text-container"
            style="display: flex; flex-direction: row; padding: 0 0 10px 0; justify-content: space-between;">

            <StaffNameCard :image="'/image/staff/icon2_1200_circle.jpg'" :name="$t('staff.contents[1].title')"
                title="香港中文大學機械與自動化工程學系研究教授" :color="'orange'">
                &#x2022;&emsp;{{ $t('staff.contents[1].content[0]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[1].content[1]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[1].content[2]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[1].content[3]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[1].content[4]') }}<br>
                {{ $t('staff.contents[1].content[5]') }}<br>
            </StaffNameCard>
            <StaffNameCard :image="'/image/staff/icon1_1200_circle.jpg'" :name="$t('staff.contents[0].title')"
                title="香港中文大學禤永明系統工程與工程管理學教授" :color="'purple'">
                &#x2022;&emsp;{{ $t('staff.contents[0].content[0]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[0].content[1]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[0].content[2]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[0].content[3]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[0].content[4]') }}<br>
            </StaffNameCard>
        </div>
        <div class="text-container" style="width: 100%;">
            <label class="pageTitle font-big"
                style="align-self: flex-start; padding-left: 20px">{{ $t('staff.team') }}</label>
        </div>
        <div class="text-container"
            style="display: flex; flex-direction: row; padding: 0 0 10px 0; justify-content: space-between;">
            <StaffNameCard style="margin: 0 10% 0 10%;" :image="'/image/staff/Derek.jpg'"
                :name="$t('staff.contents[2].title')" :color="'purple'"
                :youtube="'https://www.youtube.com/@derekcheung7857'">
                &#x2022;&emsp;{{ $t('staff.contents[2].content[0]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[2].content[1]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[2].content[2]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[2].content[3]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[2].content[4]') }}<br>
            </StaffNameCard>
            <StaffNameCard style="margin: 0 10% 0 10%;" :image="'/image/staff/staff.jpg'"
                :title="$t('staff.contents[3].title')" :color="'orange'">
                &#x2022;&emsp;{{ $t('staff.contents[3].content[0]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[3].content[1]') }}<br>
                &#x2022;&emsp;{{ $t('staff.contents[3].content[2]') }}<br>
            </StaffNameCard>
        </div> -->


        <div class="text-container staff_container">
            <BossNameCard :image="'/image/staff/icon2_1200_circle.jpg'" :name="$t('staff.contents[1].title')"
                title="香港中文大學機械與自動化工程學系研究教授" :color="'orange'"
                :subtitle="['香港中文大學深圳研究院院長', '香港中文大學和聲書院署理院長', '中大賽馬會「智」為未來計劃首席負責人', '香港中文大學博智感知交互研究中心項目負責人', '香港中文大學工程學院前署理院長', '香港中文大學機械與自動化工程學系前系主任', '美國麻省理工學院博士', '研究領域：智能系統、控制系統、人體機能學、醫療用機器人等']">
            </BossNameCard>
            <BossNameCard :image="'/image/staff/icon1_1200_circle.jpg'" :name="$t('staff.contents[0].title')"
                title="香港中文大學禤永明系統工程與工程管理學教授" :color="'purple'"
                :subtitle="['香港中文大學何鴻燊海量數據決策分析研究中心總監', '香港中文大學博智感知交互研究中心主任', '中大賽馬會「智」為未來計劃計劃副負責人、課程發展組主領及評估及分析組副主領', '香港中文大學工程學院前副院長(研究)', '香港中文大學系統工程與工程管理學前系主任', '美國麻省理工學院博士', '研究領域：多語言語音、語言處理、人機互動模型、大數據分析等']">
            </BossNameCard>
        </div>

        <div class="text-container" style="width: 100%;">
            <label class="pageTitle font-big" style="align-self: flex-start; padding-left: 20px">{{ $t('staff.team')
                }}</label>
        </div>

        <div class="text-container staff_container">
            <StaffNameCard style="margin: 10px 5% 10px 5%;" :image="'/image/staff/Derek.jpg'"
                :name="$t('staff.contents[2].title')" :color="'purple'"
                :youtube="'https://www.youtube.com/@derekcheung7857'"
                :subtitle="[$t('staff.contents[2].content[0]'),
        $t('staff.contents[2].content[1]'), $t('staff.contents[2].content[2]'), $t('staff.contents[2].content[3]'), $t('staff.contents[2].content[4]')]">
            </StaffNameCard>
            <StaffNameCard style="margin: 0 5% 0 5%;" :image="'/image/staff/staff.jpg'"
                :name="$t('staff.contents[3].title')" :color="'orange'"
                :subtitle="[$t('staff.contents[3].content[0]'), $t('staff.contents[3].content[1]'), $t('staff.contents[3].content[2]')]">
            </StaffNameCard>
        </div>



        <div v-show="false" style="width: 100%;">
            <div class="text-container" style="width: 100%;">
                <label class="pageTitle font-big" style="align-self: flex-start; padding-left: 20px">導師團隊</label>
            </div>
            <div class="text-container" style="width: 100%; padding: 0px 10px;  ">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Griffin</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Lois</td>
                        <td>Griffin</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>Joe</td>
                        <td>Swanson</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Cleveland</td>
                        <td>Brown</td>
                        <td>$250</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.staff_container {
    display: flex;
    flex-direction: row;
    width: 100%;
    /* background-color: aqua; */
    padding-bottom: 30px;
}

@media screen and (max-width: 1199.9px) {
    .staff_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 30px;
    }
}

table {
    /* display: block; */

    border-collapse: collapse;
    /* width: 100%; */
    margin: 20px;
    /* padding: 20px 10px; */

}

th,
td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2
}

th {
    background-color: purple;
    color: white;

}
</style>
