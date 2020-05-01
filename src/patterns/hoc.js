function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    // It returns a component
    return class extends React.Component {
      render() {
        return (
          // that renders your component
          <WrappedComponent
            {/* with its props  */}
            {...this.props}
            {/* and additional props calculated from Redux store */}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }

      componentDidMount() {
        // it remembers to subscribe to the store so it doesn't miss updates
        store.subscribe(this.handleChange.bind(this))
      }

      componentWillUnmount() {
        // and unsubscribe later
        store.unsubscribe(this.handleChange.bind(this))
      }

      handleChange() {
        // and whenever the store state changes, it re-renders.
        this.forceUpdate()
      }
    }
  }
}
