import { Grid, Paper, Typography } from "@mui/material"
import AppWrite from "../../appWrite/AppWrite"
import { useEffect, useState } from "react"

export const ProjectList = () => {
  const [allProjects, setAllProjects] = useState()

  useEffect(() => {
    const appwrite = new AppWrite()
    appwrite.listProjects().then(function (res) {
      setAllProjects(res)
    })
  }, [])

  const handleClick = (el) => {
    const appwrite = new AppWrite()
    const pdfview = appwrite.getPdfView(el.projeto)
    window.open(pdfview.href, "_blank").focus()
  }

  return (
    <>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap:'wrap'
        }}
      >
        {allProjects &&
          allProjects.documents.map((el, index) => {
            return (
              <Paper
                key={index}
                elevation={2}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                  marginBottom:'30px', 
                  padding: "30px",
                  borderRadius: "16px",
                  border: "border: 1px solid #DBDBDB",
                  alignItems: "start"
                }}
                onClick={() => handleClick(el)}
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
            )
          })}
      </Grid>
    </>
  )
}
