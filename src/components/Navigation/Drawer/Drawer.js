import React from 'react';
import style from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

class Drawer extends React.Component {
    clickHandler = () => {
        this.props.onClose()
    };

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.to} exact={link.exact} activeClassName={style.active}
                             onClick={this.clickHandler}>{link.label}</NavLink>
                </li>
            )
        })

    }

    render() {
        const cls = [style.Drawer];
        if (!this.props.isOpen) {
            cls.push(style.close)
        }

        const links = [
            {to: '/', label: 'Список', exact: true},


        ];

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Создать тест', exact: false});
            links.push({to: '/logout', label: 'Выйти', exact: false})
        } else {
            links.push({to: '/auth', label: 'Авторизация', exact: false},)
        }

        return (
            <React.Fragment>

                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>

        )
    }

}

Drawer.propTypes = {
    isOpen: PropTypes.bool,
    isAuthenticated: PropTypes.bool
};

export default Drawer