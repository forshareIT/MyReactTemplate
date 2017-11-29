import React, { Component } from 'react';
import {DatePicker} from 'antd';
class Text extends Component{
    render(){
        return (
            <div>
                <p>This is a react Component</p>
                <DatePicker/>
            </div>
        );
    }
}
export default Text;