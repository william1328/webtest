<template>
    <div>
        <p>
            {{msg}}
            </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'hello'
        }
    },
    created() {
        this.getInfo();
    },
    methods:{
        getInfo(){
            console.log('getinfo');
        }
    }
}
</script>
