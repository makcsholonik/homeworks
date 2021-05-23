import React from 'react'
import { NavLink } from 'react-router-dom'

function Header () {
	return (
		<nav>
			<NavLink to="/pre-junior">Pre-Junior</NavLink>
			<NavLink to="/junior">Junior</NavLink>
			<NavLink to="/junior-plus">Junior+</NavLink>
		</nav>
	)
}


export default Header
