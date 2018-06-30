<template>
<div class="search">
<div class="search-form" v-on:mouseout="searchOut($event)" v-on:mouseover="searchOver">
  <input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input" data-mounted="1" :style="searchStyleObj"></input>
  <a class="search-btn" href="javascript:void(null)"><i class="iconfont ic-search"></i></a>
</div>
 <ul class="search-content-wrap" v-show="dropdown" v-on:mouseout="searchOut($event)" v-on:mouseover="searchOver">
   <li><a href="/search?q=wince&amp;utm_source=desktop&amp;utm_medium=search-recent" target="_blank">
    <i class="iconfont ic-search-history"></i> 
    <span>wince</span> <i class="iconfont ic-unfollow"></i></a>
  </li>
   <li><a href="/search?q=Jquery%E6%BA%90%E7%A0%81&amp;utm_source=desktop&amp;utm_medium=search-recent" target="_blank"><i class="iconfont ic-search-history"></i> <span>Jquery源码</span> <i class="iconfont ic-unfollow"></i></a></li>
 </ul>
 </div>
</template>


<script>

  export default{
    data(){
      return{
        searchStyleObj:{
          width:160+'px'
        },
        dropdown:false
      }
    },
    methods:{
       searchOut:function(event){
        if (event) event.preventDefault();
         this.dropdown=false;
         this.searchStyleObj.width=160+'px';
       },
       searchOver:function(){
          this.dropdown=true;
          this.searchStyleObj.width=200+'px';
       }
    }
  }

</script>

<style scoped>
.search{
  position: relative;

}

.search-form{
  position:absolute;
  left:0px;
  top:0px;
}

.search-form input{
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  transition: width .5s;
  -moz-transition: width .5s;
  -webkit-transition: width .5s;
  -o-transition: width .5s;
  transition-delay: .1s;
  -moz-transition-delay: .1s;
  -webkit-transition-delay: .1s;
  -o-transition-delay: .1s;
  outline:none;
} 

ul.search-content-wrap{
  /*display: none;*/
  list-style:none;
  border: 1px solid #eee;
  background-color: #fff;
  -webkit-box-shadow: 0 0 8px rgba(0,0,0,.2);
  -moz-box-shadow: 0 0 8px rgba(0,0,0,.2);
  box-shadow: 0 0 8px rgba(0,0,0,.2);
}
.search-content-wrap{
  position:absolute;
  left:0px;
  top:40px;
  width: 210px;
  overflow:hidden;
  margin:0px 5px;
  padding:17px 5px 17px 10px;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  color:#333;

}

.search-content-wrap li {
  line-height: 28px;
  text-indent: 10px;
  text-align: left;
  padding-top:5px;
}

.search-content-wrap li:hover{
  background-color: rgba(200,200,200,0.5);
}
 

.search-content-wrap li a{
  text-decoration:none;
   color:#333;
} 



</style>