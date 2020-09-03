import React, { useState, useEffect, useCallback } from "react";
import { Wrapper } from "../components/wrapper";
import Grid from "../components/grid";
import { Card } from "../components/card";
import axios from "axios";

const Home = () => {
  return (
    <Wrapper>
      <Grid></Grid>
    </Wrapper>
  );
};

export default Home;
