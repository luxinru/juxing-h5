<template>
  <div class="page_root">
    <section class="tip1">
      联系
      <br />
      我们
    </section>

    <section class="tip2">联系我们，获取最新的产品和解决方案。</section>

    <section class="container">
      <div class="left">
        <span class="title1"> 联系我们 </span>
        <span class="title2"> 联系我们，获取最新的产品和解决方案。 </span>

        <div class="item">
          <img src="@/assets/images/youxiang.png" alt="" />
          <span>juxing@163.com</span>
        </div>

        <div class="item">
          <img src="@/assets/images/zuobiao.png" alt="" />
          <span>上海市</span>
        </div>
      </div>

      <div class="right">
        <span class="title"> 给我们留言 </span>

        <div class="box">
          <div class="input_box">
            <span class="label"> 邮箱 </span>
            <el-input class="input" />
          </div>
          <div class="input_box">
            <span class="label"> 电话 </span>
            <el-input class="input" />
          </div>
          <div class="input_box" style="grid-column: span 2">
            <span class="label"> 主题 </span>
            <el-input class="input" />
          </div>
          <div class="input_box" style="grid-column: span 2">
            <span class="label"> 信息 </span>
            <el-input class="input" type="textarea" resize="none" :rows="3" />
          </div>
        </div>

        <div class="btn">提交</div>
      </div>
    </section>

    <section class="block1"></section>
    <section class="block2"></section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style lang="scss" scoped>
.page_root {
  background-color: rgba(241, 242, 243, 1);

  .tip1 {
    font-size: 88px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #2c2b29;
    line-height: 96px;
    margin-top: 121px;
  }

  .tip2 {
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    margin-top: 52px;
  }

  .container {
    position: relative;
    width: 1400px;
    // height: 636px;
    height: max-content;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
    border-radius: 8px;
    margin-top: 16px;
    display: flex;
    overflow: hidden;

    .left {
      width: 487px;
      height: auto;
      background: #171d97;
      display: flex;
      flex-direction: column;
      padding: 70px 39px;

      .title1 {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }

      .title2 {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #ffffff;
        margin-top: 37px;
      }

      .item {
        display: flex;
        align-items: center;
        margin-top: 41px;

        &:last-child {
          margin-top: 27px;
        }

        img {
          width: 25px;
          margin-right: 23px;
        }

        span {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 300;
          color: #ffffff;
        }
      }
    }

    .right {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 70px 51px 27px;

      .title {
        width: 100%;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #000000;
      }

      .box {
        width: 100%;
        margin-top: 6px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 81px;

        .input_box {
          margin-top: 31px;
          display: flex;
          flex-direction: column;

          .label {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: #000000;
          }

          .input {
            width: 100%;
            height: 55px;
            margin-top: 28px;
          }

          &:last-child {
            .input {
              height: max-content;
            }
          }
        }
      }

      .btn {
        width: 83px;
        height: 51px;
        background: #171d97;
        border-radius: 8px;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 19px;
        cursor: pointer;
      }
    }
  }

  .block1 {
    width: 100%;
    height: 462px;
    background-color: #fff;
    margin-top: -364px;
  }

  .block2 {
    width: 100%;
    height: 399px;
    background: #171d97;
  }
}
</style>
