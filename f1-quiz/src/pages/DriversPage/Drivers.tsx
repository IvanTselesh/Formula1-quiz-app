import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {ChangeEventHandler, useEffect, useState} from "react";
import {fetchDriverPost} from "../../api/posts";

import {DriverPost} from "../../components/DriverPost/DriverPost";

export const DriversPage = () => {
  return (
    <Container>
      <Header />
      <DriverPost />
    </Container>
  )
};