import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import logo from 'src/assets/logo.svg';
import actions from '../redux/actions/actions';
import selectors from '../redux/selectors';
import { State } from '../types/app';
import { Person } from '../types/person';
import './App.css';
// import { History, Location } from 'history';
// import { match } from 'react-router';

interface Props {
  person: Person | any,
  // history: History,
  // location: Location,
  // match: match,
  // staticContext: undefined
}

interface ActionProps {
  fetchPerson: (id: string) => { type: string; payload: { id: string; }; },
}

class App extends React.Component<Props & ActionProps> {
  public componentDidMount(){
    this.props.fetchPerson('2');
  }

  public render() {
    const { person } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {person && <p className="App-intro"> 
          {person.name}
        </p>}
      </div>
    );
  }
}


const mapStateToProps = (state: State): Props => ({
  person: selectors.getPerson(state),
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  fetchPerson: (id: string) => dispatch(actions.fetchPerson(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
