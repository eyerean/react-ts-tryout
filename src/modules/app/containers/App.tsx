import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import logo from 'src/assets/logo.svg';
import actions from '../redux/actions/actions';
import selectors from '../redux/selectors';
import { IState } from '../types/app';
import { IPerson } from '../types/person';
import './App.css';
// import { History, Location } from 'history';
// import { match } from 'react-router';

interface IProps {
  person: IPerson | any,
  // history: History,
  // location: Location,
  // match: match,
  // staticContext: undefined
}

interface IActionProps {
  fetchPerson: (id: string) => { type: string; payload: { id: string; }; },
}

class App extends React.Component<IProps & IActionProps> {
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


const mapStateToProps = (state: IState): IProps => ({
  person: selectors.getPerson(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => ({
  fetchPerson: (id: string) => dispatch(actions.fetchPerson(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
