import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{`Copyright © sweatworks-challenge ${new Date().getFullYear()}.`}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0),
	},
}));

export default function Footer({ description }) {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth='lg'>
				<Typography
					variant='subtitle1'
					align='center'
					color='textSecondary'
					component='p'
				>
					{description}
				</Typography>
				<Copyright />
			</Container>
		</footer>
	);
}

Footer.propTypes = {
	description: PropTypes.string,
};
