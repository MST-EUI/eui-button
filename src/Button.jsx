import React, {Component} from 'react';
import classnames from 'classnames';
import isNil from 'lodash/isNil';
//import i18n from './i18n';


import './style/button.scss';

const { PropTypes } = React;
//const i18nDefault = 'zh-cn';

export default class Button extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset','text']),
    color: PropTypes.oneOf(['blue','green','yellow','red','orange']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    basic: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['right', 'left'])
  };

  static defaultProps = {
    prefixcls: 'eui-button',
    prefixicon: 'eui-icon',
    type: 'button',
    loading: false,
    disabled: false,
    iconPosition: 'left',
    basic: false
  };

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    const { onClick, disabled, loading } = this.props;

    if(!disabled && !loading && !!onClick){
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
      content,
      disabled,
      type,
      color,
      loading,
      basic,
      icon,
      iconPosition,
      ...others
    } = this.props;

    const ElementType = (!!this.props.href && !isNil(this.props.href)) ? 'a' : 'button';
    const AttrType = (!!this.props.href && !isNil(this.props.href)) ? undefined : (type == 'text') ? 'button' : type;
    const iconName = loading ? 'loading' : icon;


    const classes = classnames(
      prefixcls,
      className,
      {
        'small': size == 'small',
        'large': size == 'large',
        [`${prefixcls}-${type}`]: type == 'text',
        [`${prefixcls}-${color}`]: color,
        [`${prefixcls}-${iconName}`]: (!!loading || !!icon),
        'basic': basic,
        'disabled': disabled
      }
    )

    const iconclass = classnames(
      prefixicon,
      {
        [`${prefixicon}-${iconName}`]: (!!loading || !!icon),
        [`${prefixicon}-${iconPosition}`]: iconPosition
      }
    )

    const strContent = (!!content && isNil(children)) ? content : children;


    return (
      <ElementType
        className={classes}
        type={AttrType}
        {...others}
        onClick={this.handleClick}
      >
        {((loading || !!icon) && iconPosition == 'left') && <i className={iconclass} />}
        {strContent}
        {((loading || !!icon) && iconPosition == 'right') && <i className={iconclass} />}
      </ElementType>
    );
  }
}
