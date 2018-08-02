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
            <h2 className="title">Size</h2>
            <Button className="small">small Button</Button>
            <Button>medium Button</Button>
            <Button className="large">large Button</Button>
            <Button className="big">Big Button</Button>

            <h2 className="title">type</h2>
            <Button type="primary">primary Button</Button>
            <Button type="secondary">secondary Button</Button>
            <Button type="normal">normal Button</Button>

            <h2 className="title">Disabled</h2>
            <Button disabled className="unabled" data-arr="none">disabled 不可用按钮</Button>

            <h2 className="title">htmlType & Href</h2>
            <Button target="_blank">默认button按钮</Button>
            <Button htmlType="submit">submit按钮</Button>
            <Button htmlType="reset">reset按钮</Button>
            <Button href="#" target="_blank">href按钮</Button>
            <Button href="#" target="_blank" htmlType="text">href链接按钮</Button>
            <Button htmlType="text">text按钮</Button>

            <h2 className="title">Click & Loading</h2>
            <Button onClick={this.handleClick} disabled={this.state.disabled}>click me</Button>
            <Button onClick={this.handleDisabledClick} disabled>Disabled click me</Button>
            <Button onClick={this.handleLoaderClick} loading={this.state.loading} color="blue">Loading click me</Button>
            <Button basic loading>默认按钮</Button>

            <h2 className="title">Icon & IconPosition</h2>
            <Button icon="alarm">默认按钮</Button>
            <Button icon="alarm" iconPosition="right">默认按钮</Button>
            <Button href="#" icon="alarm" type="text">默认按钮</Button>

            <h2 className="title">Actived</h2>
            <Button actived>默认按钮</Button>



            {/* <h2 className="title">text || Children</h2>
            <Button text="text方式" />
            <Buttame="title">Color</h2>
            <Button color="blue" text="blue Button" />
            <Button coloron>children方式</Button>

            <h2 classN="green">green按钮</Button>
            <Button color="yellow">yellow按钮</Button>
            <Button color="red">red按钮</Button>
            <Button color="orange" text="orange按钮" />
            <Button text="默认按钮" />

            <h2 className="title">Bisic Color</h2>
            <Button basic color="blue" text="blue Button" />
            <Button basic color="green">green按钮</Button>
            <Button basic color="yellow">yellow按钮</Button>
            <Button basic color="red">red按钮</Button>
            <Button basic color="orange" text="orange按钮" />
            <Button text="默认按钮" /> */}

          </div>
        );
    }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
