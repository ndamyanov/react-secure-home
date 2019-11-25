import React, { Component } from 'react';
//import  { FirebaseContext } from '../Firebase';
//import temperatures from '../Firebase/firebase';
import { connect } from "react-redux";

class Temperature extends Component {
     constructor(props) {
        super(props)
        }

//  componentDidMount = () => {
//    // console.log(this.props.firebase.temperatures());
//     this.props.firebase.temperatures().on('value', snapshot => {
//        console.log(snapshot.val())
//        debugger;
//     });
//  }
       render() {
      return(
              <div>tgefew{this.state.temperature}</div>
        // <FirebaseContext.Consumer>
        //     {firebase => {
        //             firebase.temperatures().on('value', snapshot => {
        //              const res = snapshot.val();
        //               //console.log(JSON.stringify(res));
        //               debugger;
        //               let mappedTemperatures = Object.values(res).map((val) => {
        //                 return Object.assign({ temp: val }, res[val]);
        //                  })
        //                 console.log(mappedTemperatures);
        //                  mappedTemperatures.map(temp => {
        //                          console.log(temp)
        //                          console.log(temp.temp)
        //                  return <div>The temperature from Firebase is.</div>;
        //                  })
        //                   //return <div>The temperature from Firebase is {this.state.temperature}.</div>;
        //             })
            
        //     }}
        // </FirebaseContext.Consumer>
      );
   } 
}


     const mapStateToProps = state => {
  return { temperature: state };
  };

export default connect(mapStateToProps)(Temperature);
