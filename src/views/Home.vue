<template>
    <v-container fluid >
    <v-row justify-center>
       <v-col
        class="d-flex"
        cols="8"
        md="3"
      >
      <h3>請選擇每一小隊欲中選人數</h3>
      </v-col>
    </v-row>
    <v-row justify-center>
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
      </v-row>
     <v-row justify-center>
        <v-col
        class="d-flex"
        cols="8"
        md="3"
      >
      <v-btn @click="draw">抽籤</v-btn>
      </v-col>
      </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      items:[1,2,3,4,5,6]
    }
  }
}
</script>
