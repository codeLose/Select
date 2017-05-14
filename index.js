import React from 'react';
import ReactDOM from 'react-dom';
import { Select, Menu, Input, Dropdown } from 'antd';
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
     autoPlay: React.PropTypes.bool.isRequired,
     maxLoops: React.PropTypes.number.isRequired,
     posterFrameSrc: React.PropTypes.string.isRequired,
     videoSrc: React.PropTypes.string.isRequired,
   };
  constructor(props){
       super(props);
       this.state = {
           loopsRemaining: this.props.maxLoops,
       };
   };

   render() {
     return (<Input />)
   }
}
ReactDOM.render(<MySelect />, document.getElementById('root'));
