import React from 'react';
import {render} from 'react-dom';
import Slider from 'rc-slider';

require('./style.less');


const handleStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    padding: '2px',
    border: '2px solid #abe2fb',
    borderRadius: '3px',
    background: '#fff',
    fontSize: '14px',
    textAlign: 'center',
    zIndex: 3,
};

const style = { width: 400, margin: 50 };

const CustomHandle = props => {
    const style = Object.assign({ left: props.offset + '%' }, handleStyle);
    return (
        <div style={style}>${props.value}</div>
    );
};

CustomHandle.propTypes = {
    value: React.PropTypes.any,
    offset: React.PropTypes.number
};


function log(value) {
    console.log(value);
}

class App extends React.Component {
  render () {
    return (
        <div>
            <p> Hello React!</p>
            <div style={style}>
                <Slider range allowCross={false} defaultValue={[0, 20]} handle={<CustomHandle />} onChange={log} />
            </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
