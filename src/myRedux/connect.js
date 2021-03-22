import React from 'react'
import { ReduxContext } from './provider'

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class Connect extends React.Component {
    constructor(props) {
      super(props);

      // this.state = props.store.getState(); // really dont see a point to have this, check twice
    }

    componentDidMount() {
      this.props.store.subscribe(state => {
        this.setState(state);
      });
    }

    render() {
      const { store } = this.props;
      console.log('store: ', store)
      console.log('state in connect', store.getState())

      return (
        <Component
          {...this.props}
          {...mapStateToProps(store.getState(), this.state)}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }

  return props => (
    <ReduxContext.Consumer>
      {store => <Connect {...props} store={store} />}
    </ReduxContext.Consumer>
  )
}