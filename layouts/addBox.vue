<template>
    <div>
         <div class="clear"></div>
          <div class="banadd"><img :src="config.addpic"></div>
    </div>
</template>

<script>
import global_ from "~/components/Global.vue";

export default {
data() {
    return {
      config : global_.config,
}    
}
}
</script>
