import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureHistoryLogs: [],
    };
  }
        componentDidMount() {
          this.props.firebase.tempHistory().on('value', snapshot => {
            const tempsObject = snapshot.val();
            const tempsList = Object.values(tempsObject).map(val => ({
              ...tempsObject[val],
              value: val,
            }));
            this.setState({
              temperatureHistoryLogs: tempsList,
            });
          });
        }

        componentWillUnmount() {
          debugger;
          this.props.firebase.tempHistory().off();
        }

       render() {
         let logs = this.state.temperatureHistoryLogs.map(temp => {
           //let delimeter = "/";
           //let test = JSON.stringify(temp);
           //let index = temp.value.toString().indexOf(delimeter);
          return <div>{temp.value}.</div>
         })
              return(
                 logs
              );
   } 
}

export default withFirebase(Temperature);