import { Button, Grid, Paper, Typography } from "@mui/material"
import AppWrite from "../../appWrite/AppWrite"
import { useEffect, useState } from "react"

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState()

  useEffect(() => {
    if (allProjects) {
      console.log("allProjects:", allProjects.documents)
    }
  }, [allProjects])

  const handleClick = () => {
    const appwrite = new AppWrite()
    appwrite.listProjects().then(function (res) {
      setAllProjects(res)
    })
  }

  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        style={{ marginTop: "30px" }}
        onClick={() => handleClick()}
      >
        List Projects
      </Button>
      <Grid style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
        {allProjects &&
          allProjects.documents.map((el) => {
            return (
              <Grid>
                <Paper
                  elevation={2}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    padding: "30px",
                    margin: "30px",
                    borderRadius: "16px",
                    border: "border: 1px solid #DBDBDB",
                    alignItems: "start"
                  }}
                >
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Projeto: </span>
                    {el.projeto}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Cliente: </span>
                    {el.cliente}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Responsável: </span>
                    {el.responsavel}
                  </Typography>
                </Paper>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}
