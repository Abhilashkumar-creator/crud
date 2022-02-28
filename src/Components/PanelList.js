import List from '@mui/material/List';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export function PanelList() {    
    return ( 
      <div className='panel-list'>       
      <List style={{backgroundColor: "rgb(93, 130, 209)"}}>

        <ListItem className='panel-list-icons'>
        <SentimentVerySatisfiedIcon />
          <span style={{fontWeight: '700', letterSpacing: '.05rem', marginBottom: '20px'}}>
             Welcome ADMIN
          </span>
        </ListItem>
     
        <Divider variant="fullWidth" />

      <ListItem className='panel-list-icons'>
        <DashboardIcon />
          {/* <span><Link to="/dashboard">Dashboard</Link></span> */}
          <Link to="/Home">
            <span>Home</span>
          </Link>
      </ListItem>

      <ListItem className='panel-list-icons'>
        <DashboardIcon />
          {/* <span><Link to="/dashboard">Dashboard</Link></span> */}
          <Link to="/dashboard">
            <span>Dashboard</span>
          </Link>
      </ListItem>
  
        </List>
      </div>
    );
  }