import React from "react"
import Button from "../../components/buttons/button/button.component"
import { Container, Grid } from '@mui/material'

export function Login() {
  return (
    <>
      <Container>
        <Grid container justifyContent={'center'}>
          <Grid item xs={4}>
            <Button primary>Entrar</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}