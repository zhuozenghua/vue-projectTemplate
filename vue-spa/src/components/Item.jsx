export default {
  name: 'item',
  props: {
    msg: String
  },
  mounted(){
    console.log(this.mix);
  },
  render(h){
    var eles=[];
    for(var i=0;i<6;i++){
      eles.push(i);
    }
    return(
       <div class="hello">
       {
         eles.map(function(ele,index){
           return(
            <li id={ele+'item'}>this is {ele+1} item</li>
          )})
        }
       </div>
      )    
  }
}