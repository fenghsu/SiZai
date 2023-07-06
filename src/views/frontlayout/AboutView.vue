<template>
  <div class="wrapper my-5">
    <div class="row">
      <div class="col-sm-3">
        <div class="questionGroup p-3 text-center lh-lg fs-5">
          <ul>
            <li @click="scrollTo">預定流程</li>
            <li>料理與保存</li>
            <li>冷凍商品</li>
            <li>彌月禮盒</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-7 border-start" >
        <div class="accordionSec offset-md-1" v-for="item in faq" v-bind:key="item.title">
          <div class="accordionTitle pt-3 text-center fs-5 text-primary">{{ item.title }}</div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div class="questionIcon">Q</div>
                  {{ item.subTitle[0] }}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div class="answerIcon">A</div>
                  {{ item.content[0] }}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <div class="questionIcon">Q</div>
                  {{ item.subTitle[1] }}
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div class="answerIcon">A</div>
                  {{ item.content[1] }}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <div class="questionIcon">Q</div>
                  {{ item.subTitle[2] }}
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div class="answerIcon">A</div>
                  {{ item.content[2] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<style>
.accordion-body {
  background-color: #f3f2ed;
  background-image: linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 100px),
    linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 100px);
  background-size: 10px 10px;
}
.questionIcon,
.answerIcon {
  margin-right: 1rem;
  color: white;
  display: inline;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
}
.questionIcon {
  display: flex;
  background-color: #e5c36b;
}
.answerIcon {
  display: inline-flex;
  background-color: #587267;
}
ul,
li {
  list-style: none;
}
.questionGroup {
  position: sticky;
  top: 0;
}
</style>

<script>
const { VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      width: 0,
      faq: ''
    }
  },
  methods: {
    scrollTo() {
      window.scrollTo({
        top: this.width,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    //this.width=this.$refs.infoBox.offsetTop;
    this.$http
      .get(`${VITE_APP_PATH}`)
      .then((res) => {
        //console.log(res.data.faq)
        this.faq = res.data.faq
        console.log(res.data.faq[0].subTitle[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>