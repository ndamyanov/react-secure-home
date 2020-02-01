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
            }, () => this.setState({isLoading: false}));
          });
        }

        componentWillUnmount() {
          // debugger;
          this.props.firebase.tempHistory().off();
        }

       render() {
         const spinner = <div class="spinner">
         <div class="rect1"></div>
         <div class="rect2"></div>
         <div class="rect3"></div>
         <div class="rect4"></div>
         <div class="rect5"></div>
       </div>

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
            this.state.isLoading 
              ? spinner
              : <div className="logs">{logs}</div>
          );
   } 
}

export default withFirebase(Temperature);