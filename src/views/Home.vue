<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-spacer></v-spacer>
      <v-col class="mt-4">
        <h3>點選抽籤鈕，將隨機於每小隊抽出兩位</h3>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <!-- <v-row justify-center>
     <v-col
        class="d-flex"
        cols="8"
        sm="5"
        md="3"
      >
        <v-select
          :items="items"
          label="每小隊人數"
          outlined
        ></v-select>
      </v-col>
      </v-row> -->
    <v-row justify-center>
      <v-spacer></v-spacer>
      <v-btn @click="draw" class="ma-4">抽籤</v-btn>
      <v-btn @click="draw_result = []" class="ma-4">清除</v-btn>
      <v-spacer></v-spacer> </v-row
    ><br />

    <v-row justify-center>
      <v-spacer></v-spacer>
      恭喜以下人員中選
      <v-spacer></v-spacer>
    </v-row>

    <center>
      <img
        width="300"
        src="../assets/loading.gif"
        alt="loading"
        srcset=""
        v-show="isLoading"
      />
    </center>
    <v-row justify-center class="ml-12" v-if="!isLoading">
      <v-col
        class="d-flex pa-0"
        cols="6"
        v-for="(item, index) in draw_result"
        :key="index"
      >
        <v-list-item>
          <br />【第{{ parseInt(index / 2) + 1 }}小隊】<br />

          學號：{{ item.no }} <br />
          姓名：{{ item.name }}<br /><br />
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import members from "../assets/members_list";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      members_list: members,
      draw_result: [],
      isLoading: false,
    };
  },
  methods: {
    draw() {
      this.isLoading = true;

      this.draw_result = [];
      this.members_list.forEach((element) => {
        let first_item = element[Math.floor(Math.random() * element.length)];

        let second_item = {};
        do {
          second_item = element[Math.floor(Math.random() * element.length)];
        } while (first_item == second_item);

        this.draw_result.push(first_item);
        this.draw_result.push(second_item);
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
