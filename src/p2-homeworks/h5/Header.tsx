import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from "./Routes";
import s from './Header.module.css';

function Header () {
	return (
		<nav className={ s.header }>
			<NavLink to={ PATH.PRE_JUNIOR } className={ s.link } activeClassName={ s.activeLink }>Pre-Junior</NavLink>
			<NavLink to={ PATH.JUNIOR } className={ s.link } activeClassName={ s.activeLink }>Junior</NavLink>
			<NavLink to={ PATH.JUNIOR_PLUS } className={ s.link } activeClassName={ s.activeLink }>Junior+</NavLink>
			<span className={s.menu}>Menu</span>
		</nav>
	)
}


export default Header
