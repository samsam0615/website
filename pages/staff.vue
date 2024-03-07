<template>
    <Head>
        <Title>{{$t('navbar.staff')}}</Title>
        <Meta name="description" content="$t('staff.description')"/>
    </Head>
    <div class="pageContent-container">
        <div class="text-container" style="width: 100%; padding: 20px">
            <label class="pageTitle font-big">{{$t('staff.title')}}</label>
            <div class="pageDescription font-small">{{$t('staff.description')}}</div>
        </div>
        <div class="text-container" style="display: flex; flex-direction: row; padding: 0 0 10px 0; justify-content: space-around; flex-wrap: wrap;  flex: 1">
            <StaffNameCard :image="'/image/staff/icon1_1200_circle.jpg'" :title="$t('staff.contents[0].title')" :color="'purple'">
                &#x2022;&emsp;{{$t('staff.contents[0].content[0]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[0].content[1]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[0].content[2]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[0].content[3]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[0].content[4]')}}<br>
            </StaffNameCard>
            <StaffNameCard :image="'/image/staff/icon2_1200_circle.jpg'" :title="$t('staff.contents[1].title')" :color="'orange'">
                &#x2022;&emsp;{{$t('staff.contents[1].content[0]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[1].content[1]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[1].content[2]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[1].content[3]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[1].content[4]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[1].content[5]')}}<br>
            </StaffNameCard>
        </div>
        <div class="text-container" style="width: 100%;">
            <label class="pageTitle font-big" style="align-self: flex-start; padding-left: 20px">{{$t('staff.team')}}</label>
        </div>
        <div class="text-container" style="display: flex; flex-direction: row; padding: 0 0 10px 0; justify-content: space-around; flex-wrap: wrap;  flex: 1">
            <StaffNameCard :image="'/image/staff/Derek.jpg'" :title="$t('staff.contents[2].title')" :color="'purple'" :youtube="'https://www.youtube.com/@derekcheung7857'">
                &#x2022;&emsp;{{$t('staff.contents[2].content[0]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[2].content[1]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[2].content[2]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[2].content[3]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[2].content[4]')}}<br>
            </StaffNameCard>
            <StaffNameCard :image="'/image/staff/staff.jpg'" :title="$t('staff.contents[3].title')" :color="'orange'">
                &#x2022;&emsp;{{$t('staff.contents[3].content[0]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[3].content[1]')}}<br>
                &#x2022;&emsp;{{$t('staff.contents[3].content[2]')}}<br>
            </StaffNameCard>
        </div>
    </div>
</template>

<style>

</style>
