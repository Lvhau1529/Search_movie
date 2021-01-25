import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
	const location = useLocation();
	const pathName = location.pathname;
	console.log(location);
	return (
		<>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={pathName}
				>
					<Menu.Item key="/home">
						<NavLink to="/home">Home</NavLink>
					</Menu.Item>
					<Menu.Item key="/up-coming">
						<NavLink to="/up-coming">Upcoming</NavLink>
					</Menu.Item>
					<Menu.Item key="/search">
						<NavLink to="/search">Search</NavLink>
					</Menu.Item>
				</Menu>
			</Header>
		</>
	);
};

export default React.memo(HeaderComponent);
