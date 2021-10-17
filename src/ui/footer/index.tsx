import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './style';
import { Divider, Link, Grid, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';

export default function Component(): ReactElement {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Divider />
      <Grid className={classes.grid} container>
        <Grid className={classes.listItem} item xs={12} sm={6} md={3}>
          <Copyright className={classes.icon} />
          <Typography component="span" variant="h6">
            Copyright 2021
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Blogger private Limited
            <br />
            Chennai, India
            <br />
          </Typography>
        </Grid>
        <Grid className={classes.listItem} item xs={12} sm={6} md={3}>
          <Typography component="p" variant="h6">
            Quick Links
          </Typography>
          <InternalLink link="/contact" name="Contact Us" />
          <br />
          <InternalLink link="/policies/privacy" name="Privacy Policy" />
          <br />
          <InternalLink link="/policies/terms-and-conditions" name="Terms And Conditions" />
          <br />
          <InternalLink link="/policies/cookie" name="Cookie Policy" />
          <br />
        </Grid>
        <Grid className={classes.listItem} item xs={12} sm={6} md={3}>
          <Typography component="p" variant="h6">
            About Us
          </Typography>
          <ExternalLink href="https://www.facebook.com/comradpaalan" name="Facebook" />
          <br />
          <ExternalLink href="https://www.linkedin.com/in/paala-mugan-a6baa315b" name="LinkedIn" />
        </Grid>
        <Grid className={classes.listItem} item xs={12} sm={6} md={3}>
          <Typography component="p" variant="h6">
            Free Resources
          </Typography>
          <ExternalLink href="#" name="Publication" />
          <br />
          <ExternalLink href="#" name="Medium" />
          <br />
          <ExternalLink href="#" name="Video Lessons" />
          <br />
          <ExternalLink href="#" name="Projects" />
        </Grid>
      </Grid>
    </footer>
  );
}

const ExternalLink = ({ href, name }: { href: string; name: string }) => (
  <Link href={href} target="_blank" variant="subtitle1" color="textSecondary">
    {name}
  </Link>
);

const InternalLink = ({ link, name }: { link: string; name: string }) => (
  <Link component={RouterLink} to={link} color="textSecondary" variant="subtitle1">
    {name}
  </Link>
);
