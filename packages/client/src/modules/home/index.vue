<template>
  <div class="wrapper">
    <div>
      <button @click="toDetail">
        跳转到详情页
      </button>
    </div>
    <div>
      <button @click="sendMessage">
        测试发送请求
      </button>
    </div>
    <h1>欢迎支持:</h1>
    <img src="../../assets/image/afb.jpg" alt="empty image">
    <img src="../../assets/image/weixin.png" alt="empty image">
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import HttpHelper from '../../common/utils/axios_helper';
import Urls from '../../common/urls/index';

const router = useRouter();
const toDetail = async () => {
  router.push('/detail');
};
// 测试发送请求
const sendMessage = async () => {
  const res = await HttpHelper.post(Urls.getDetail, { name: 'test' });
  console.log(res);
  alert(JSON.stringify(res));
};
</script>

<style lang="less">
</style>