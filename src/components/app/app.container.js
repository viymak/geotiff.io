import AppComponent from './app.component';
import UrlService from '../../services/UrlService';
import { withRouter } from 'react-router-dom';
import { setDefaultLayout, setHideMenuLayout } from '../../actions/layout-actions';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

const setLayout = () => {
  const hideMenu = ["", "true", "True", "y", "Y", "yes", "Yes"]
    .indexOf(UrlService.get("hide_menu")) > -1 || false;
  if (hideMenu) {
    return setHideMenuLayout();
  } else {
    return setDefaultLayout();
  }
}

const mapStateToProps = state => ({ layout: state.layout });

const mapDispatchToProps = dispatch => {
  return {
    setLayout: () => dispatch(setLayout())
  }
}

const AppContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.setLayout()
    }
  })
)(AppComponent);

export default withRouter(AppContainer);
