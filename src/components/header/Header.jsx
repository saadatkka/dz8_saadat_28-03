import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#">контакты</a>
                    </li>
                    <li>
                        <a href="#">главное</a>
                    </li>
                    <li>
                        <a href="#">адрес</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;