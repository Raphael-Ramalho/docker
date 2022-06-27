import { TextField, Box, Button } from "@mui/material"
import AppWrite from "../../appWrite/AppWrite"

export const Projects = () => {

  const handleClick = () => {
    let data = {
      projeto: 'pdfreader',
      cliente: 'ABB',
      responsavel: 'joao'
    }
    data = JSON.stringify(data)

    const appwrite = new AppWrite()
    appwrite.createProject(data)
  }

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "30%" }}>
      <TextField label='Nome do projeto' variant='standard' />
      <TextField label='Cliente' variant='standard' />
      <TextField label='Responsável' variant='standard' />
      <Button variant='contained' color='secondary' style={{marginTop:'30px'}} onClick={()=>handleClick()}>
        Criar projeto
      </Button>
    </Box>
  )
}
