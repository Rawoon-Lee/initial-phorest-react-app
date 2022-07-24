import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyPhotos from './MyPhotos';
import MyCalendar from './MyCalendar';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function ActivityTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="게시글 목록" {...a11yProps(0)} />
          <Tab label="달력 보기" {...a11yProps(1)} />
          <Tab label="즐겨찾기 목록" {...a11yProps(2)} />
          <Tab label="내 프레임 목록" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        내가 지금까지 올린 게시글   
        <MyPhotos/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        내 활동 내역 달력으로 보기
        <MyCalendar/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        즐겨찾기 목록
        <MyPhotos/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        내가 만든 프레임 목록
        <MyPhotos/>
      </TabPanel>
    </Box>
  );
}
