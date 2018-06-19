import React, {Component} from 'react';
class List extends Component {
  constructor()
  {
    super();
    this.state = {
      data:[
        {
          id:1. ,
          name:'michael',
        },
        {
          id:2. ,
          name:'michael',
        },
        {
          id:3. ,
          name:'michael',
        },
        {
          id:4. ,
          name:'michael',
        },
        {
          id:5. ,
          name:'michael',
        },
        {
          id:6. ,
          name:'michael',
        },
        {
          id:7. ,
          name:'michael',
        },
        {
          id:8. ,
          name:'michael',
        },
        {
          id:9. ,
          name:'michael',
        },
        {
          id:10. ,
          name:'michael',
        }
      ]
    }
  }
render(){
   return(
     <div>
       {
           this.state.data.map((dynamicData, i) =>
           <div>
             <span>{dynamicData.id} {dynamicData.name}</span>

             </div>
           )
       }
       </div>
    )
  }
}

export default List;
