import React from 'react';
import './Logo.css';
import logo from './brain.png';
import Tilt from 'react-tilt';


class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.Tilt = React.createRef();
  }

  render(){
    return (
      <Tilt className="Tilt" options={{ max : 100 }} style={{ height: 250, width: 250 }} >
       <div className='ma4 mt0 logo'>
        <img className="br2 shadow Tilt-inner" src={logo} alt="our logo"  width="125px" height="125px"/>
        </div>
      </Tilt>
    );
  }
}

export default Logo;
