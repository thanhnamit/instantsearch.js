import React, {PropTypes, Component} from 'react';
import classNames from './classNames.js';

const cx = classNames('Panel');

class Panel extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static childContextTypes = {
    isEmpty: PropTypes.func,
  };

  getChildContext() {
    return {isEmpty: this.isEmpty};
  }

  constructor(props) {
    super(props);
    this.state = {isEmpty: false};
    this.isEmpty = isEmpty => {
      this.setState({isEmpty});
    };
  }
  render() {
    return <div {...cx('root', this.state.isEmpty && 'empty')}>
      <h5 {...cx('title')}>{this.props.title}</h5>
      {this.props.children}
    </div>;
  }
}

export default Panel;
