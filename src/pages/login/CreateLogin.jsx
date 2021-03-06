import AppWrite from "../../appWrite/AppWrite"
import { useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography
} from "@mui/material"

export const CreateLogin = () => {
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()

  const handleName = (e) => {
    setUserName(e.target.value)
  }

  const handleEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleSubmit = () => {
    const appwrite = new AppWrite()
    appwrite.createAccount(userName, userEmail, userPassword)
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh"
      }}
    >
      <Paper
        variant='outlined'
        sx={{
          width: "554px",
          margin: "0 auto",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "16px",
          border: "border: 1px solid #DBDBDB"
        }}
      >
        <Typography
          component='h1'
          variant='h5'
          sx={{ marginTop: "24px", color: "#1F1F1F" }}
        >
          Bem vindo!
        </Typography>
        <Typography
          sx={{
            marginTop: "24px",
            width: " 325px",
            height: " 40px",
            display: " flex",
            alignItems: "center",
            textAlign: "center",
            color: "#707070"
          }}
        >
          Para criar o login, insira um nome, e-mail e senha!
        </Typography>

        <Box
          component='form'
          noValidate
          sx={{ "& .MuiTextField-root": { marginTop: "24px", width: 1 } }}
          autoComplete='off'
        >
          <div>
            <TextField
              required
              id='outlined-required'
              label='name'
              size='small'
              onChange={handleName}
            />
            <TextField
              required
              id='outlined-required'
              label='Email'
              size='small'
              onChange={handleEmail}
            />
            <TextField
              id='outlined-password-input'
              label='Senha*'
              size='small'
              onChange={handlePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      edge='end'
                    ></IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <FormControlLabel
              sx={{ marginTop: "24px" }}
              control={
                <Checkbox name='remember' value='remember' color='primary' />
              }
              label='Manter conectado'
            />
            <Box component='div' sx={{ marginTop: "24px", fontSize: "16px" }}>
              <Link href='/reset' variant='body2' color='primary'>
                Esqueceu sua senha ?
              </Link>
            </Box>
          </Box>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            onClick={() => handleSubmit()}
            sx={{
              mt: 3,
              mb: 2,
              bordeRadius: "4px",
              padding: "10px, 0px, 10px, 10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Criar login
          </Button>
          <Box component='div' sx={{ textAlign: "center", marginTop: "32px" }}>
            <span>N??o tem uma conta? </span>
            <Link href='/newUser' variant='body2' color='primary'>
              Entre aqui!
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
