import React from 'react';
import './App.css';

function Led(props) {
    return (
      <div> {props.name} : {props.on ? 'On' : 'Off' } </div>
    );
}

class LedMatrix extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    led_on: Array(9).fill(false),
	    led_name: props.names
	}
    }
    renderLed(index) {
	return (
	        <Led
                  name={this.state.led_name[index]}
                  on={this.state.led_on[index]}
	        />
	);
    }
    render() {
	return (
	        <>
	          <div>
		    {this.renderLed(0)}
                    {this.renderLed(1)}
                    {this.renderLed(2)}
                 </div>
                 <div>
                    {this.renderLed(3)}
                    {this.renderLed(4)}
                    {this.renderLed(5)}
                 </div>
	       </>
	);
    }
}

class ControlPanel extends React.Component {
    constructor(props) {
	super(props);
	this.led_names = [
	    '1st Floor',
	    '2nd Floor',
	    'Water Heater',
	    'Oil Burner',
	    'Unused',
	    'Unused'
	]
    }
    render() {
	return (
                <>
                  <h1> Rocohome Control Panel </h1>
		  <LedMatrix
                    names={this.led_names}
                  />
                </>
	)
    }
}


function App() {
  return (
    <ControlPanel />
  );
}

export default App;
