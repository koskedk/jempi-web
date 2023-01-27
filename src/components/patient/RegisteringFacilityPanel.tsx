import { Paper, Typography } from '@mui/material'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import { FC } from 'react'
import { useAppConfig } from '../../hooks/useAppConfig'
import { GoldenRecord, PatientRecord } from '../../types/PatientRecord'
import { isInputValid } from '../../utils/helpers'
import DataGridCutomInput from './DataGridCutomInput'

const RegisteringFacilityPanel: FC<{
  data: PatientRecord | GoldenRecord
  isDataEditable: boolean
  onChange: (newRow: PatientRecord | GoldenRecord) => any
}> = ({ data, isDataEditable, onChange }) => {
  const { getFieldsByGroup } = useAppConfig()
  const columns: GridColumns = getFieldsByGroup('registering_facility').map(
    ({ fieldName, fieldLabel, readOnly, rules, formatValue }) => {
      return {
        field: fieldName,
        headerName: fieldLabel,
        flex: 1,
        valueFormatter: ({ value }) => formatValue(value),
        sortable: false,
        disableColumnMenu: true,
        editable: readOnly ? false : isDataEditable,
        // a Callback used to validate the user's input
        preProcessEditCellProps: ({ props }) => {
          return {
            ...props,
            error: isInputValid(props.value, rules)
          }
        },
        renderEditCell: props => <DataGridCutomInput {...props} />
      }
    }
  )

  return (
    <Paper sx={{ p: 1 }}>
      <Typography variant="h6">Registering Facility</Typography>
      <DataGrid
        getRowId={({ uid }) => uid}
        columns={columns}
        rows={[data]}
        autoHeight={true}
        hideFooter={true}
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={newRow => onChange(newRow)}
        disableSelectionOnClick
      />
    </Paper>
  )
}

export default RegisteringFacilityPanel
