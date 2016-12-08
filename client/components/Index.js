import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const Index = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Index;