import React, { Component } from 'react';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
// import i18n from './i18n';


// import './style/button.scss';

const { PropTypes } = React;
// const i18nDefault = 'zh-cn';

export default class Button extends Component {
  static propTypes = {
    prefixcls: PropTypes.string,
    prefixicon: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'medium', 'large']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset', 'text']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    basic: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['right', 'left']),
    children: PropTypes.node,
    type: PropTypes.oneOf(['primary', 'secondary', 'normal']),
  };

  static defaultProps = {
    prefixcls: 'eui-button',
    prefixicon: 'eui-icon',
    htmlType: 'button',
    loading: false,
    disabled: false,
    iconPosition: 'left',
    basic: false,
    size: 'default',
    className: '',
    onClick: () => {},
    href: null,
    icon: '',
    children: null,
    type: 'normal',
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
      disabled,
      htmlType,
      loading,
      basic,
      icon,
      iconPosition,
      type,
      ...others
    } = this.props;

    const ElementType = (!!this.props.href && !isNil(this.props.href)) ? 'a' : 'button';
    const AttrType = (!!this.props.href && !isNil(this.props.href)) ? undefined : (htmlType == 'text') ? 'button' : htmlType;
    const iconName = loading ? 'loading' : icon;


    const classes = classnames(
      prefixcls,
      className,
      [`${prefixcls}-${type}`],
      {
        small: size === 'small',
        large: size === 'large',
        [`${prefixcls}-${iconName}`]: (!!loading || !!icon),
        basic,
        disabled,
      },
    );

    const iconclass = classnames(
      prefixicon,
      {
        [`${prefixicon}-${iconName}`]: (!!loading || !!icon),
        [`${prefixicon}-${iconPosition}`]: iconPosition,
      },
    );

    const strContent = children;


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
