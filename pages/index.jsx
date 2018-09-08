import React from 'react';
import { Grid, GridItem } from './grids';

export default () => (
    <Grid rows="12" columns="12">
        <GridItem column="2" columnSpan="3">
            Hello World
        </GridItem>      
    </Grid>
);
