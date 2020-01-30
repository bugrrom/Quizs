import React from 'react';
import style from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Layout extends React.Component {
    state = {
        menu: false
    };
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    };

    render() {
        return (
            <div className={style.Layout}>
                <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler}
                        isAuthenticated={this.props.isAuthenticated}/>
                <MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }

}

Layout.propTypes = {
    isAuthenticated: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)