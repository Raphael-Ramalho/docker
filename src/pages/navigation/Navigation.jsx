import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { CreateLogin } from "../login/CreateLogin"
import { Projects } from "../projects/Projects"
import { Login } from "../login/Login"
import { ProjectList } from "../projectList/ProjectList"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

export const Navigation = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#d580bc" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#000000"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='Create Login'
            {...a11yProps(0)}
            style={{ color: "white" }}
          />
          <Tab label='Login' {...a11yProps(1)} style={{ color: "white" }} />
          <Tab
            label='Create Project'
            {...a11yProps(2)}
            style={{ color: "white" }}
          />
          <Tab
            label='Project list'
            {...a11yProps(3)}
            style={{ color: "white" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CreateLogin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Projects />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProjectList />
      </TabPanel>
    </Box>
  )
}
