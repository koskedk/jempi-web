import { TextField } from '@mui/material'
import { Fragment } from 'react'
interface SearchTextInputProps {
  textFieldValue: string | Date
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
  name: string
  label: string
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  textFieldValue,
  onChange,
  name,
  label
}) => {
  return (
    <Fragment>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
        value={textFieldValue}
        onChange={onChange}
        name={name}
      />
    </Fragment>
  )
}

export default SearchTextInput
