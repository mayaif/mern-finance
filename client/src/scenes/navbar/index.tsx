import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import DashboardIcon from '@mui/icons-material/Dashboard';

type Props = {}

const Navbar = (props: Props) => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState("dashboard") //state determining on what page we're on
  return (
    <FlexBetween 
      mb='0.25rem' 
      p='0.5rem 0rem' 
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap='0.75rem'>
        <DashboardIcon sx={{fontSize: '28px'}} />
        <Typography variant='h4' fontSize='16px'>FinanceView</Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap='2rem'>
        <Box sx={{'&:hover': {color: palette.primary[100]}}}>
          <Link
            to='/'
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit'
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{'&:hover': {color: palette.primary[100]}}}>
          <Link
            to='/predictions'
            onClick={() => setSelected('predictions')}
            style={{
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit'
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>

    </FlexBetween>
  )
}

export default Navbar