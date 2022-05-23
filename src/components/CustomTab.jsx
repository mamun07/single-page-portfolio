import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Tab, Tabs, LinearProgress } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }} component="div">
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
          <Tab label="Exprience" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h4" component="h4">
          Hi I am Full Stack MERN Developer
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit.
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eaque maiores ea soluta consequuntur
        </Typography>
        <Typography variant="p" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eaque maiores ea soluta consequuntur, pariatur itaque
          praesentium ipsum ipsam id impedit.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h4" component="h4">
          Education
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit.
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eaque maiores ea soluta consequuntur
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h4" component="h4">
          I have a lot of skills
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit.
        </Typography>
        <Box component="div">
          <Typography variant="p"> React.js</Typography>
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{ height: 10, mb: 2 }}
          />
          <Typography variant="p"> Node.js</Typography>
          <LinearProgress
            variant="determinate"
            value={80}
            sx={{ height: 10, mb: 2 }}
          />
          <Typography variant="p"> Express.js</Typography>
          <LinearProgress
            variant="determinate"
            value={95}
            sx={{ height: 10, mb: 2 }}
          />
          <Typography variant="p"> MongoDB</Typography>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{ height: 10, mb: 2 }}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h4" component="h4">
          Hi I am Full Stack MERN Developer
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit.
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eaque maiores ea soluta consequuntur
        </Typography>
        <Typography variant="p" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eaque maiores ea soluta consequuntur, pariatur itaque
          praesentium ipsum ipsam id impedit.
        </Typography>
      </TabPanel>
    </Box>
  );
}
