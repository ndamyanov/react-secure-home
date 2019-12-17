import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temps: [],
    };
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      const tempsObject = snapshot.val();
      debugger;
      const tempsList = Object.values(tempsObject).map(val => ({
        ...tempsObject[val],
        value: val,
      }));
      debugger;
      this.setState({
        temps: tempsList,
      });
    });
  }

  componentWillUnmount() {
    debugger;
    this.props.firebase.users().off();
  }

  render() {
    debugger;
    let tems = this.state.temps.map(temp => {
      return <div>The temperature from Firebase is {temp.value}.</div>
    })
    return(
        tems
    );
   } 
}

export default withFirebase(Temperature);