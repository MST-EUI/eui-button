import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/';
import './demo.scss';

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            loading: false
        }
    }
    handleClick = () => {
        console.log('abc');
        this.setState({
            disabled: true
        })

        setTimeout(()=>{
            this.setState({
                disabled: false
            })
        },1000)
    }

    handleDisabledClick = () => {
        console.log('disabled')
    }

    handleLoaderClick = () => {
        this.setState({
            loading: true
        })
        console.log('loading');
        // setTimeout(()=>{
        //     this.setState({
        //         loading: false
        //     })
        // },2000)
    }

    render() {
        return (
          <div className="demo">
            <h2 className="title">Content || Children</h2>
            <Button content="content方式" />
            <Button>children方式</Button>

            <h2 className="title">Size</h2>
            <Button className="small" content="small" />
            <Button>default</Button>
            <Button className="large" content="large">large children</Button>
            {/*<Button style={{'backgroundColor':'#eee'}}>style button</Button>*/}

            <h2 className="title">Color</h2>
            <Button color="blue" content="blue Button" />
            <Button color="green">green按钮</Button>
            <Button color="yellow">yellow按钮</Button>
            <Button color="red">red按钮</Button>
            <Button color="orange" content="orange按钮" />
            <Button content="默认按钮" />

            <h2 className="title">Bisic Color</h2>
            <Button basic color="blue" content="blue Button" />
            <Button basic color="green">green按钮</Button>
            <Button basic color="yellow">yellow按钮</Button>
            <Button basic color="red">red按钮</Button>
            <Button basic color="orange" content="orange按钮" />
            <Button content="默认按钮" />

            <h2 className="title">Disabled</h2>
            <Button disabled content="disabled 不可用按钮" className="unabled" data-arr="none" />

            <h2 className="title">Type & Href</h2>
            <Button content="默认button按钮" target="_blank" />
            <Button content="submit按钮" type="primary" >primary 按钮</Button>
            <Button content="reset按钮" type="secondary" >secondary 按钮</Button>
            <Button content="href按钮" href="#" target="_blank" />
            <Button content="href链接按钮" href="#" target="_blank" htmlType="text" />
            <Button content="text按钮" type="normal" >normal 按钮</Button>

            <h2 className="title">Click & Loading</h2>
            <Button onClick={this.handleClick} disabled={this.state.disabled}>click me</Button>
            <Button onClick={this.handleDisabledClick} disabled>Disabled click me</Button>
            <Button onClick={this.handleLoaderClick} loading={this.state.loading} color="blue" content="Loading click me" />
            <Button basic content="默认按钮" loading />

            <h2 className="title">Icon & IconPosition</h2>
            <Button content="默认按钮" icon="alarm" />
            <Button content="默认按钮" icon="alarm" iconPosition="right" />
            <Button content="默认按钮" href="#" icon="alarm" type="text" />
          </div>
        );
    }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
