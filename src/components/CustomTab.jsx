import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Tab, Tabs } from '@mui/material';
import Buttons from '../components/Buttons';
import SkillProgress from './SkillProgress';

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
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" component="h6" my={3}>
          Hi, I am Full-Stack Developer
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur.
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </Typography>
        <Box component="div" mt={10}>
          <Buttons
            label="Download CV"
            href="https://global.caremebd.com/"
            mr="20px"
            styled="contained"
          />
          <Buttons label="Contact Me" href="#contact" styled="outlined" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" component="h6" my={3}>
          Education
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur.
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6" component="h6" my={3}>
          I have a lot of skills
        </Typography>
        <Typography variant="p" component="p" mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          maiores ea soluta consequuntur, pariatur itaque praesentium ipsum
          ipsam id impedit.
        </Typography>
        <Box component="div" mt={5}>
          {skills.map((skill, i) => {
            return (
              <SkillProgress key={i} title={skill.title} value={skill.value} />
            );
          })}
        </Box>
      </TabPanel>
    </Box>
  );
}

const skills = [
  {
    title: 'React.js',
    value: '98',
  },
  {
    title: 'Next.js',
    value: '95',
  },
  {
    title: 'Node.js',
    value: '90',
  },
  {
    title: 'Express',
    value: '85',
  },
];
