import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme
} from '@mui/material'

interface optionsProp {
  value: number
  label: string
}
interface SearchSelectFieldProps {
  index: number
  onChange: ((event: any) => void) | undefined
  fieldName: string
  options: any[]
  title: string
  description?: string
  helperText?: string
  sx?: SxProps<Theme>
  name: string
  size?: 'small' | 'medium' | undefined
}

const SearchSelectField: React.FC<SearchSelectFieldProps> = ({
  onChange,
  fieldName,
  options,
  title,
  description,
  helperText,
  sx = { width: 200 },
  name,
  size='medium'
}) => {
  return (
    <FormControl fullWidth sx={sx} size={size}>
      <InputLabel>{title}</InputLabel>
      <Select value={fieldName} label="Field" onChange={onChange} name={name}>
        <MenuItem value="" disabled>
          <em>{description}</em>
        </MenuItem>

        {options.map((item, index) => {
          return (
            <MenuItem value={item.fieldName || item.value} key={index}>
              {item.fieldLabel || item.label}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>{helperText || ''}</FormHelperText>
    </FormControl>
  )
}

export default SearchSelectField