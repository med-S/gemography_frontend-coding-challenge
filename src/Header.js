import React from 'react';
import "./Header.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from "./logoBlue.png";

function Header() {
    return (
        <div className="header">

                <div className="header__logo" >
                    <a href="https://medsalhaoui.com/" target="_blanck">
                        <img src={logo} alt=""/>
                    </a>
                </div>

                <div className="header__center">
                    <p>Most starred Github repositories</p>
                </div>

                <div className="header__socialnav">
                    <a href="https://github.com/med-S" target="_blank" rel="noreferrer">
                        <GitHubIcon style={{color: '#1aa07f'}}/>
                    </a>
                </div>

        </div>
    )
}

export default Header
