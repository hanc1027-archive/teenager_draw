<template>
  <v-container>
    <v-row class="title">
      <h3>點選抽籤鈕，將抽出三位幸運得主</h3>
    </v-row>
    <v-row justify-center>
      <v-spacer></v-spacer>
      <v-btn @click="draw" class="ma-4">抽籤</v-btn>
      <v-btn
        @click="
          () => {
            draw_result = [];
            isLoading = false;
            showWinImg = false;
          }
        "
        class="ma-4"
        >清除</v-btn
      >
      <v-spacer></v-spacer> </v-row
    ><br />

    <v-row class="content subtitle">
      <v-spacer></v-spacer>
      恭喜以下人員中選
      <v-spacer></v-spacer>
    </v-row>
    <br />

    <center>
      <!-- <img
        width="300"
        src="../assets/loading.gif"
        alt="loading"
        srcset=""
        v-show="isLoading"
      /> -->
      <v-row v-if="isLoading" align="center" justify="center">
        <v-col class="content" cols="12">
          學號：{{ randoming_item.no }} <br />
          姓名：{{ randoming_item.name }}<br /><br />
        </v-col>
      </v-row>
    </center>
    <v-row v-if="!isLoading" align="center" justify="center">
      <v-col
        class="content detail"
        cols="12"
        v-for="(item, index) in draw_result"
        :key="index"
      >
        學號：{{ item.no }} <br />
        姓名：{{ item.name }}<br /><br />
      </v-col>
    </v-row>
    <v-row v-if="showWinImg" align="center" justify="center">
      <img
        src="../assets/img/02.png"
        width="150"
        alt=""
        srcset=""
      />
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { members_list_no_sort, core_members } from "../assets/members_list";

export default {
  name: "Home",
  data() {
    return {
      members_list_no_sort: members_list_no_sort,
      core_members: core_members,
      draw_result: [],
      isLoading: false,
      randoming_item: {
        no: "",
        name: "",
      },
      timeSetting: null,
      winning_img_list: [
        "01.png",
        "02.png",
        "03.png",
        "04.png",
        "05.png",
        "06.gif",
        "07.png",
      ],
      winning_img_path: "",
      showWinImg: false,
    };
  },
  methods: {
    randoming() {
      this.timeSetting = setInterval(() => {
        this.members_list_no_sort.sort(() => Math.random() - 0.5);
        this.randoming_item = this.members_list_no_sort[0];
      }, 50);
    },
    get_win_img_random() {
      let random_index = Math.floor(Math.random() * this.winning_img_list.length);
      this.winning_img_path = "../assets/img/"+this.winning_img_list[random_index];
    },
    draw() {
      this.isLoading = true;
      this.showWinImg = false;
      this.draw_result = [];
      this.core_members.sort(() => Math.random() - 0.5);

      for (let index = 0; index < 3; index++) {
        this.draw_result.push(this.core_members[index]);
      }

      setTimeout(() => {
        this.isLoading = false;
        this.get_win_img_random();
        this.showWinImg = true;
        console.log("winning_img_path:",this.winning_img_path)
      }, 1500);
    },
  },
  watch: {
    isLoading(newValue) {
      if (newValue) this.randoming();
      else clearInterval(this.timeSetting);
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px;
}
.subtitle {
  color: red;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.detail {
  float: left;
}
</style>