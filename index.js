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
         arr: []
       };
   };

  onClick({ key, value }) {
    console.log(key, value);
    const arr = this.state.arr;
    if (key !== '0' && arr.indexOf(key) === -1) {
      arr.push(key);
    }
    console.log(arr);
    console.log(arr);
  };

   render() {
     let children = [];
     for (let i = 10; i < 36; i++) {
       children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
     }
     const select = (
       <Select
         mode="tags"
         multiple
         style={{ width: '100%' }}
         onChange={handleChange}
         tokenSeparators={[',']}
       >
       {children}
      </Select>
     );
     const menu = (
      <Menu onClick={this.onClick.bind(this)}>
        <Menu.Item key="0" > {select}</Menu.Item>
        <Menu.Item key="1" className="ant-select-dropdown-menu-item-selected">第一个菜单项</Menu.Item>
        <Menu.Item key="2">第二个菜单项</Menu.Item>
        <Menu.Item key="3">第三个菜单项</Menu.Item>
      </Menu>
      );
     const popup=
     <Dropdown overlay={menu} visible>
     <a style={{display: 'none'}}>1</a>
     </Dropdown>


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
       <div style={{width: '500px', height: '32px'}} className="ant-select ant-select-enabled">
        <div className="ant-select-selection ant-select-selection--multiple">
          <ul><li className="ant-select-selection__choice">
            <div className="ant-select-selection__choice__content">b11</div>
            <span className="ant-select-selection__choice__remove"></span>
          </li></ul>
        </div>
       </div>
       </Trigger>

       <Select
         mode="tags"
         multiple
         style={{ width: '100%' }}
         onChange={handleChange}
         tokenSeparators={[',']}
       >
       {children}
      </Select>
       </div>
     )
   }
}
ReactDOM.render(<MySelect />, document.getElementById('root'));
