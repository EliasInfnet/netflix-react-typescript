import React from "react"
import { Container, Grid } from '@mui/material'
import login from '../../assets/icons/logo.svg'
import { Logo, Wrapper } from "./login.styled"
import Form from './components/form/form.component'
 
export function Login() {
  return (
    <>
      <Container>
        <Wrapper container justifyContent={'center'}>
          <Grid item xs={3} justifyContent={'center'}>
            <Grid container justifyContent={'center'}>
              <Logo src={login} alt="Netflix logo" />
              <Form/>
            </Grid>
          </Grid>

        </Wrapper>
      </Container>
    </>
  )
}