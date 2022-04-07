<template>
  <div class="wrapper">
    <div>
      <button @click="toDetail">
        跳转到详情页
      </button>
    </div>
    <h1>欢迎支持:</h1>
    <img
      src="../../assets/image/afb.jpg"
      alt="empty image"
    >
    <img
      src="../../assets/image/weixin.png"
      alt="empty image"
    >
    <div class="container">
      <!-- <virtual-list>
        <template #="{source}">
          <div class="item-inner">
            <div class="head">
              <span># {{ source.index }}</span>
              <span>{{ source.name }}</span>
            </div>
            <div class="desc">
              {{ source.desc }}
            </div>
          </div>
        </template>
      </virtual-list> -->

      <vue-quill-text-editor
        ref="quillRef"
        :placeholder="place"
      />

      <!-- <VirtualList
        ref="virtualList"
        class="h-screen overflow-y-auto w-full scroll-touch no-scrollbar"
        :data-key="'_id'"
        :data-sources="postItems"
        :direction="'vertical'"
        :estimate-size="556"
        :item-class="'singlePostCard mx-5 mb-4'"
        :keeps="5"
        @scroll="scrollNearBy">
          <template #="{source}">
          ...
          </template>
        </VirtualList> -->
    </div>
  </div>
</template>
<script src="./script.js"></script>

<style lang="less">
.container {
  border: 1px solid #eee;
  padding: 20px;
  margin-top: 20px;
}
.list-dynamic {
  width: 100%;
  height: 500px;
  overflow-y: auto;

  .list-item-dynamic {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
    background: rgba(83, 132, 255, 0.06) none repeat scroll 0% 0%;
    border-bottom: 2px solid rgb(255, 255, 255);
  }
}
.item-inner {
  .head {
    font-weight: 500;
  }
  span:first-child {
    margin-right: 1em;
  }
  .desc {
    padding-top: 0.5em;
    text-align: justify;
  }
}
.list-horizontal {
  width: 100%;
  overflow-x: auto;
  display: flex;

  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .list-item-horizontal {
    border-right: 2px solid rgb(255, 255, 255);
    background: rgba(83, 132, 255, 0.06) none repeat scroll 0% 0%;
  }
}
.item-inner-horizontal {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 0;
  .index {
    width: 100%;
    text-align: center;
  }
  .size {
    text-align: right;
    color: darkgray;
    font-size: 16px;
  }
}
</style>