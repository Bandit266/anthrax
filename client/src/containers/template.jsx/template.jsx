import React, {Component} from 'react';
import {Layout} from 'react'

class Template extends React.Component {
	render() {
	  return (
		<Layout style={{ minHeight: '100vh' }}>
		  <Layout.Sider>Sider</Layout.Sider>
		  <Layout>
			<Layout.Header>Header</Layout.Header>
			<Layout.Content>
			  {this.props.children}
			</Layout.Content>
			<Layout.RSider>RSider</Layout.RSider>
			<Layout.Footer>Footer</Layout.Footer>
		  </Layout>
		</Layout>
	  );
	}
  }