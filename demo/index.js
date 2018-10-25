/*
* annotation like `placeholder begin *** and
* placeholder end ***` is required for generate eui manual, please keep it
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Code,
  Demo,
} from '@mistong/eui';

/* placeholder begin eui style */
import '@mistong/eui/dist/index.css';
/* placeholder end eui style */

/* placeholder begin src */
import Button from '../src/';
/* placeholder end src */

import './index.scss';

/* placeholder begin class */
class DemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      loading: false,
    };
  }

  handleClick = () => {
    this.setState({
      disabled: true,
    });

    setTimeout(() => {
      this.setState({
        disabled: false,
      });
    }, 5000);
  }

  handleDisabledClick = () => {
    // console.log('disabled');
  }

  handleLoaderClick = () => {
    this.setState({
      loading: true,
    });
  }

  render() {
    const sizeCode = `import { Button } from '@mistong/eui';

<Button className="small">small Button</Button>
<Button>medium Button</Button>
<Button className="large">large Button</Button>
<Button className="big">Big Button</Button>`;

    const typeCode = `import { Button } from '@mistong/eui';

<Button type="primary">primary Button</Button>
<Button type="secondary">secondary Button</Button>
<Button type="normal">normal Button</Button>`;

    const disabledCode = `import { Button } from '@mistong/eui';

<Button disabled>disabled 不可用按钮</Button>`;

    const htmlTypeCode = `import { Button } from '@mistong/eui';

<Button>默认button按钮</Button>
<Button htmlType="submit">submit按钮</Button>
<Button htmlType="reset">reset按钮</Button>
<Button href="#" target="_blank">href按钮</Button>`;

    const clickCode = `import { Button } from '@mistong/eui';

<Button onClick={this.handleClick} disabled={this.state.disabled}>click me</Button>
<Button onClick={this.handleLoaderClick} loading={this.state.loading}  type="primary">Loading click me</Button>`;

    return (
      <Demo className="eui-button-demo">
        <h2>Button 按钮组件</h2>
        <p>按钮, 提供基础样式及基础状态。</p>
        <h3 className="title">代码演示</h3>
        <Code sourceCode={sizeCode} buttonText="size">
          <Button className="small">small Button</Button>
          <Button>medium Button</Button>
          <Button className="large">large Button</Button>
          <Button className="big">Big Button</Button>
        </Code>

        <Code sourceCode={typeCode} buttonText="type">
          <Button type="primary">primary Button</Button>
          <Button type="secondary">secondary Button</Button>
          <Button type="normal">normal Button</Button>
        </Code>

        <Code sourceCode={disabledCode} buttonText="disabled">
          <Button disabled>disabled 不可用按钮</Button>
        </Code>

        <Code sourceCode={htmlTypeCode} buttonText="htmlType & Href">
          <Button>默认button按钮</Button>
          <Button htmlType="submit">submit按钮</Button>
          <Button htmlType="reset">reset按钮</Button>
          <Button href="#" target="_blank">href按钮</Button>
        </Code>

        <Code sourceCode={clickCode} buttonText="Click & Loading">
          <Button onClick={this.handleClick} disabled={this.state.disabled}>click me</Button>
          <Button onClick={this.handleLoaderClick} loading={this.state.loading} type="primary">Loading primary click me</Button>
        </Code>

        <h3>API</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size</td>
              <td>按钮大小 </td>
              <td>string</td>
              <td>(<Code mode="inline">small</Code> <Code mode="inline">medium</Code> <Code mode="inline">large</Code> <Code mode="inline">big</Code>)</td>
              <td><Code mode="inline">medium</Code></td>
            </tr>
            <tr>
              <td>type</td>
              <td>类型</td>
              <td>string</td>
              <td>(<Code mode="inline">primary</Code> <Code mode="inline">secondary</Code> <Code mode="inline">normal</Code>)</td>
              <td><Code mode="inline">normal</Code></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>true,false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>className</td>
              <td>添加自定义class</td>
              <td>string</td>
              <td>-</td>
              <td>null</td>
            </tr>
            <tr>
              <td>htmlType</td>
              <td>设置按钮类型</td>
              <td>string</td>
              <td>(<Code mode="inline">button</Code> <Code mode="inline">submit</Code> <Code mode="inline">reset</Code>)</td>
              <td><Code mode="inline">button</Code></td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否载入状态</td>
              <td>boolean</td>
              <td>true,false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>prefixCls</td>
              <td>样式名前缀</td>
              <td>string</td>
              <td>-</td>
              <td>eui-button</td>
            </tr>
            <tr>
              <td>href</td>
              <td>按钮生成a链接</td>
              <td>string</td>
              <td>-</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
      </Demo>
    );
  }
}
/* placeholder end class */

/* placeholder begin ReactDOM */
ReactDOM.render(
  <DemoComponent />,
  document.getElementById('app'),
);
/* placeholder end ReactDOM */
