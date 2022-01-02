import React, {useState} from "react"
import InputText from "../../../../components/inputs/input-text/input-text.components"
import Button from "../../../../components/buttons/button/button.component"

export default function Form() {

  const [data, setData] = useState({email: '', password:''})
  
  const handleChange = (event: any) => setData( prevState => ({
    ...prevState,
    [event.target.name]: event.target.value
  }))

  console.log(data)

  return (
    <>
      <InputText type={'text'} name={'email'} placeholder={"E-mail"} onChange={handleChange}/>
      <InputText type={'password'} name={'password'} placeholder={"Senha"} onChange={handleChange}/>
      <Button primary>Entrar</Button>
    </>
  )
}