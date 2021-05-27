import React from 'react';
import { Route} from 'react-router-dom';
import CalendarView from './CalendarView';
import { Paper } from '@material-ui/core'

const ReservationDateApp = () => {
  const paperStyle={padding :20,height:'90vh',width:1200, margin:"20px auto", backgroundColor:'white'}
  return (


    <div className="App">
      
      <Paper elevation={10} style={paperStyle}>
      <header className="App-header" color="blue">
                Booked Days Displayed 
      </header>  
      <Route exact path='/calendar' component={CalendarView} />
      
      </Paper>
     
    </div>
  );
}

export default ReservationDateApp;
