import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import isNil from 'lodash/isNil';

import './style/index.scss';

export default class Button extends Component {
  static propTypes = {
    prefixcls: PropTypes.string,
    prefixicon: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'normal']),
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset', 'text']),
    color: PropTypes.oneOf(['blue', 'green', 'yellow', 'red', 'orange']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    basic: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['right', 'left']),
    children: PropTypes.node,
  };

  static defaultProps = {
    prefixcls: 'eui-button',
    prefixicon: 'eui-button-icon',
    size: 'medium',
    htmlType: 'button',
    type: 'normal',
    className: null,
    text: null,
    color: null,
    onClick: null,
    loading: false,
    disabled: false,
    href: null,
    icon: null,
    iconPosition: 'left',
    basic: false,
    children: null,
  };

  handleClick = (e) => {
    const { onClick, disabled, loading } = this.props;

    if (!disabled && !loading && !!onClick) {
      onClick(e);
    }
  }

  render() {
    const {
      prefixcls,
      prefixicon,
      className,
      children,
      size,
      text,
      disabled,
      htmlType,
      type,
      color,
      loading,
      basic,
      icon,
      iconPosition,
      ...others
    } = this.props;

    const ElementType = (!!this.props.href && !isNil(this.props.href)) ? 'a' : 'button';
    const AttrType = (!!this.props.href && !isNil(this.props.href)) ? undefined : (htmlType == 'text') ? 'button' : htmlType; // eslint-disable-line
    const iconName = loading ? 'loading' : icon;


    const classes = classnames(
      prefixcls,
      className,
      {
        [`${size}`]: size === [`${size}`],
        [`${prefixcls}-${htmlType}`]: htmlType === 'text',
        [`${prefixcls}-${type}`]: type,
        [`${prefixcls}-${color}`]: color,
        [`${prefixcls}-${iconName}`]: (!!loading || !!icon),
        basic,
        [`${prefixcls}-disabled`]: disabled,
      },
    );

    const iconclass = classnames(
      prefixicon,
      {
        [`${prefixicon}-${iconName}`]: (!!loading || !!icon),
        [`${prefixicon}-${iconPosition}`]: iconPosition,
      },
    );

    const strContent = (!!text && isNil(children)) ? text : children;


    return (
      <ElementType
        className={classes}
        type={AttrType}
        {...others}
        onClick={this.handleClick}
      >
        {((loading || !!icon) && iconPosition === 'left') && <i className={iconclass} />}
        {strContent}
        {((loading || !!icon) && iconPosition === 'right') && <i className={iconclass} />}
      </ElementType>
    );
  }
}
