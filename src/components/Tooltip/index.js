import React from "react";
import "./style.css";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };

    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }

  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    return (
      <span className="tooltip" onMouseLeave={this.hideTooltip}>
        {true && (
          <div className={`tooltip-bubble tooltip-${this.props.position}`}>
            <div className="tooltip-message">{this.props.message}</div>
          </div>
        )}
        <span className="tooltip-trigger" onMouseOver={this.showTooltip}>
          {this.props.children}
        </span>
      </span>
    );
  }
}

export default Tooltip;
