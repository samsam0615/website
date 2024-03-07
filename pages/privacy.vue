<template>
    <Head>
        <Title>{{$t('privacy.head[0]')}} </Title>
    </Head>
    <div style="max-width: 1200px; align-self: center; margin-top: 60px">
        {{$t('privacy.date')}} <br>
        Effective Date: October 6, 2023<br>
        <h1>{{$t('privacy.head[0]')}}</h1>
        {{$t('privacy.content[0]')}}
        <h2>{{$t('privacy.head[1]')}}</h2>
        {{$t('privacy.content[1]')}}
        <h2>{{$t('privacy.head[2]')}}</h2>
            <ul>
                <li>{{$t('privacy.list1[0]')}}</li>
                <li>{{$t('privacy.list1[1]')}}</li>
                <li>{{$t('privacy.list1[2]')}}</li>
                <li>{{$t('privacy.list1[3]')}}</li>
                <li>{{$t('privacy.list1[4]')}}</li>
            </ul>
        <h2>{{$t('privacy.head[3]')}}</h2>
            <ul>
            <li>{{$t('privacy.list2[0]')}}</li>
            <li>{{$t('privacy.list2[1]')}}</li>
            </ul>
        <h2>{{$t('privacy.head[4]')}}</h2>
        {{$t('privacy.content[2]')}}
        <h2>{{$t('privacy.head[5]')}}</h2>
        {{$t('privacy.content[3]')}}<br><br>
        {{$t('privacy.title')}}
        <ul>
            <li>{{$t('privacy.list3[0]')}}</li>
            <li>{{$t('privacy.list3[1]')}}</li>
            <li>{{$t('privacy.list3[2]')}}</li>
            <li>{{$t('privacy.list3[3]')}}</li>
            <li>{{$t('privacy.list3[4]')}}</li>
            <li>{{$t('privacy.list3[5]')}}</li>
            <li>{{$t('privacy.list3[6]')}}</li>
        </ul>
        <h2>{{$t('privacy.head[6]')}}</h2>
        {{$t('privacy.content[4]')}}
        <h2>{{$t('privacy.head[7]')}}</h2>
        {{$t('privacy.content[5]')}}
        <h2>{{$t('privacy.head[8]')}}</h2>
        {{$t('privacy.content[6]')}}<br>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    padding: 20px 0 ;
}

h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    padding: 20px 0 0;
}

div {
    padding: 20px 20px 50px 20px;
    font-size: 20px;
    line-height: 35px;
}

ul{
    padding: 0 20px;
}

li {
    font-size: 20px;
    line-height: 35px;
    list-style-type: circle;
    text-indent: 0;
    padding: 3px 0;
    list-style-position: inside;
    margin: 0;
    margin-left: 0;
}

</style>