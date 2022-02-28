import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

export function GenerateReports() {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '20px'
    }
    return (
    <div>
    <div style={styles}>
       <h1 style={{lineHeight: "1.2", fontWeight: '400'}}>Dashboard</h1>
       </div>
    <DashboardCards/>
    </div>
    )
  }
  function DashboardCards() {
      return (
          <div className='dashboard-cards-flex'>
          <div className='dashboard-card annual'>
            <div className='dashboard-card-content'>
              <p style={{color: '#1cc88a', fontSize: '.7rem', fontWeight: '700'}}>
              <ListItem className='panel-list-icons'>
        <DashboardIcon />
          <Link to="/all-students">
            <span>All Students</span>
          </Link>
      </ListItem>
              </p>
              
            </div>
          </div>

           <div className='dashboard-card annual pending-requests'>
            <div className='dashboard-card-content'>
              <p style={{color: '#f6c23e', fontSize: '.7rem', fontWeight: '700'}}>
              <ListItem className='panel-list-icons'>
        <DashboardIcon />
          <Link to="/add-students">
            <span>Add Students</span>
          </Link>
      </ListItem>
              </p>
              
            </div>

            
          </div>
        </div>
      )
  }