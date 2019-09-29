<template>
    <div class="page-not-found-wrapper">
        额，找不到喔，是不是地址输错了捏？
    </div>
</template>
<script>
export default {
    created() {
        if (window.location.host.indexOf('localhost') === -1) {
            window.location.href = "/404";
        }
    }
};
</script>
<style lang="less" scoped>
    .page-not-found-wrapper{
        text-align: center;
        margin-top: 5rem;
    }
</style>