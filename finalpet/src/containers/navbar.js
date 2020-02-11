import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Icon} from 'antd';
import EventsForm from "../components/EventsForm";


const { SubMenu } = Menu;



class Navbar extends React.Component {

    state = {
        current: '',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home">
                        <a href="/home" target="_blank" rel="noopener noreferrer">
                            <Icon type="home" />
                            Inicio
                        </a>
                    </Menu.Item>
                    <Menu.Item key="pet" enabled>
                        <a href="App.js" target="_blank" rel="noopener noreferrer">
                            <Icon type="github" />
                            Mascotas
                        </a>
                    </Menu.Item>

                    <Menu.Item key="event" enabled>
                        <a href="/Eventos" target="_blank" rel="noopener noreferrer">
                            <Icon type="star" />
                            Eventos
                        </a>
                    </Menu.Item>

                    <Menu.Item key="foundation" enabled>
                        <a href="App.js" target="_blank" rel="noopener noreferrer">
                            <Icon type="build" />
                            Fundaciones
                        </a>

                    </Menu.Item>

                    <Menu.Item key="donation" enabled>
                        <a href="/Usuarios" target="_blank" rel="noopener noreferrer">
                            <Icon type="gift" />
                            Conoce amigos
                        </a>

                    </Menu.Item>

                    <Menu.Item key="login">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            <Icon type="user" />
                            Inicia Sesion
                        </a>
                    </Menu.Item>

                    <Menu.Item key="register">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            <Icon type="user" />
                            Registrarse
                        </a>
                    </Menu.Item>
                </Menu>


            </div>

        );

    }
}

ReactDOM.render(<Navbar />, document.getElementById('root'));
export default Navbar;