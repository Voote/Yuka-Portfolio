import React from 'react';
// import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { images } from './background-images';
import Navbar from '../../components/navbar';
import '../../assets/styles.scss';

const Arts = () => (
  <div className="background__placeholder background__placeholder--white">
    <Navbar />
    <div className="position__gallery">
      <Grid container>
        <Grid item xs={4}>
          <div className="element__art background__img" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--white" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--blue" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--black" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--bwhite" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--zero" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--blue" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img background__img--white" />
        </Grid>
        <Grid item xs={4}>
          <div className="element__art background__img" />
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Arts;
