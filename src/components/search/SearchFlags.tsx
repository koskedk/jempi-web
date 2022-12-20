import { Grid } from '@mui/material'
import { Fragment, useState } from 'react'
import ToggleThreeButton from './ToggleThreeButton'
import SearchTypes from './SearchTypes'

interface searchFlagsType {
  button1Label: string
  button2Label: string
  button3Label: string
  to: string
  label: string
}
const SearchFlags = (prop: searchFlagsType) => {
  const [selectedButton, setSelectedButton] = useState<number>(1)

  const ToggleButtonStyle = () => ({
    width: '129px',
    height: '42px',
    borderColor: '#1976D2',
    color: '#1976D2',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1976D2'
    }
  })

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: any) => {
    setSelectedButton(value)
  }

  return (
    <Fragment>
      <Grid container direction={'row'} justifyContent={'flex-end'}>
        <Grid item>
          <ToggleThreeButton
            selectedButton={selectedButton}
            handleChange={handleChange}
            exactValue={true}
            ToggleButtonStyle={ToggleButtonStyle}
            button1Label={prop.button1Label}
            button2Label={prop.button2Label}
            button3Label={prop.button3Label}
          />
        </Grid>
        <SearchTypes to={prop.to} label={prop.label} />
      </Grid>
    </Fragment>
  )
}

export default SearchFlags
