<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex xs12 md4>
        <div class="text-xs-center">
          <v-avatar size="125px">
            <img
              class="img-circle elevation-7 mb-1"
              src="https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/24174192_2034215913261958_6414986678876780001_n.jpg?_nc_cat=104&oh=390674755170f923c9bdd8ec8f35a49f&oe=5C5D9F1B"
            >
          </v-avatar>
          <div class="headline">Edgar <span style="font-weight:bold">Mendoza</span></div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">All around nice guy</div>
          <v-layout justify-space-around>
            <a href="https://www.facebook.com/Thedgarhouse" class="body-2">
              <img src="@/assets/facebook_logo.png" style="width:64px;height:64px;"></a>
            <a href="https://twitter.com/EDGARHOUSE" class="body-2">
              <img src="@/assets/twitter_logo.png" style="width:64px;height:64px;"></a>
            <a class="twitter-timeline" href="https://twitter.com/EDGARHOUSE?ref_src=twsrc%5Etfw">Tweets by EDGARHOUSE</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
