import React from 'react';
import ReactDOM from 'react-dom';
import { Select, Menu, Input, Dropdown, Button, Icon } from 'antd';
import Trigger from 'rc-trigger';
import './index.css';
const Option = Select.Option;
const OptGroup = Select.OptGroup;

function handleChange(value) {
  console.log(`selected ${value}`);
  if(value === 'input') {
    console.log(11);
    return false;
  }
}
class MySelect extends React.Component {
  static propTypes = {
   };
  constructor(props){
       super(props);
       this.state = {

       };
   };

   render() {
     const popup=
      <div className="select-dropdown">
      <Input  />
      <div key="1">1</div>
      <div key="2">2</div>
      <div key="3">3</div>
      </div>
     return (
       <div>
       <Trigger className="component-width"
         popup={ popup }
         action={['click']}
         popupAlign={{
           points: ['tl', 'bl'],
           offset: [0, 6]
         }}
         destroyPopupOnHide={false}
       >
        <Input />
       </Trigger>
       </div>
     )
   }
}
ReactDOM.render(<MySelect />, document.getElementById('root'));
