import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import Ticket from './Ticket';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newticket' component={NewTicketControl} />
        </Switch>
    </div>
  );
}

export default App;
