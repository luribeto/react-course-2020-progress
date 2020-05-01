import React, { Component } from 'react'

const TRUNCATE_LENGTH = 35;

class TruncateCompound extends Component {
  truncateText = (txt) => {
    return `${txt.substring(0, TRUNCATE_LENGTH)}...`;
  }

  render() {
    const { children } = this.props

    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        let truncated = [];
        if (typeof child.props.children === 'string') {
          const truncatedTxt = this.truncateText(child.props.children)
          truncated.push(truncatedTxt)
        }

        return (
          <>
            {React.cloneElement(child, {
              ...{}
            },
              [...truncated]
            )}
          </>
        );
      }
    });
  }
}

export default TruncateCompound
