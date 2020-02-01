import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureHistoryLogs: [],
      isLoading: true
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
         let logs = this.state.temperatureHistoryLogs.map((temp, i) => {
          const values = temp.value.split('/-');
          const [day, humidity, tempLiving, tempBedroom, tempOut] = values;
          const [weekDay, time] = day.split(' ');
          
          return  (
            <div className="temperature-wrapper" key={`temp${i}`}>
              <div className="temperature-content">
                <h4>Temperature for {weekDay}, {time} :</h4>
                <p>Humidity: {humidity}</p>
                <p>Temperature in the living room is: {tempLiving}</p>
                <p>Temperature in the bedroom is: {tempBedroom}</p>
                <p>Temperature outside is: {tempOut}</p>
              </div>
            </div>
          )
           //let delimeter = "/";
           //let test = JSON.stringify(temp);
           //let index = temp.value.toString().indexOf(delimeter);
          // return <div>{temp.value}.</div>
         })
              return(
                <div className="logs">
                  {logs}
                </div>
              );
   } 
}

export default withFirebase(Temperature);