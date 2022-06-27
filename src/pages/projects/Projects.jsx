import { TextField, Paper, Button } from "@mui/material"
import AppWrite from "../../appWrite/AppWrite"
import { useState } from "react"

export const Projects = () => {
  const [projeto, setProjeto] = useState()
  const [cliente, setCliente] = useState()
  const [responsavel, setResponsavel] = useState()
  const [file, setFile] = useState()

  const handleProject = (e) => {
    setProjeto(e.target.value)
  }

  const handleCliente = (e) => {
    setCliente(e.target.value)
  }

  const handleResponsavel = (e) => {
    setResponsavel(e.target.value)
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = () => {
    const appwrite = new AppWrite()
    if (projeto && cliente && responsavel) {
      let data = {
        projeto: projeto,
        cliente: cliente,
        responsavel: responsavel
      }
      data = JSON.stringify(data)
      appwrite.createProject(projeto, data)
    }

    if (projeto && file) {
      appwrite.savePdf(projeto, file)
    }
  }

  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        padding: "30px",
        borderRadius: "16px",
        border: "border: 1px solid #DBDBDB"
      }}
    >
      <TextField
        label='Nome do projeto'
        variant='standard'
        onChange={(e) => handleProject(e)}
      />
      <TextField
        label='Cliente'
        variant='standard'
        onChange={(e) => handleCliente(e)}
      />
      <TextField
        label='Responsável'
        variant='standard'
        onChange={(e) => handleResponsavel(e)}
      />

      <input
        type='file'
        style={{ marginTop: "30px" }}
        onChange={(e) => handleFile(e)}
      />

      <Button
        variant='contained'
        color='secondary'
        style={{ marginTop: "30px" }}
        onClick={() => handleSubmit()}
      >
        Criar projeto
      </Button>
    </Paper>
  )
}
