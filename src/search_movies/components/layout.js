import React from "react";
import "../styles/layout.css"
import { Layout } from "antd";
import HeaderComponent from "./header";
import FooterComponent from "./footer";

const { Content } = Layout;

const LayoutComponent = (props) => {
	return (
		<Layout className="layout">
			<HeaderComponent />
			<Content style={{ padding: "0 50px" }}>
				<div className="site-layout-content">{props.children}</div>
			</Content>
			<FooterComponent />
		</Layout>
	);
};

export default React.memo(LayoutComponent);
