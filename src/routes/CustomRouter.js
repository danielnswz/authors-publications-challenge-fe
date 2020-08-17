import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../routes/About';
import Home from '../routes/Home';
import PublicationDetail from '../routes/PublicationDetail';

const CustomRouter = () => {
	return (
		<Router>
			<Container fixed>
				<Header />
				<Switch>
					<Route path='/publication/:id'>
						<PublicationDetail />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Container>
		</Router>
	);
};

export default CustomRouter;
