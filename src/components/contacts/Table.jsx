import { Button, Chip, Grid } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

import './styles.css';

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`;

const Table = ({ handleDeleteContact, handleOpen, rows, setActiveData }) => {
  const columns = [
    {
      field: 'fullname',
      headerName: 'Nombre Completo',
      width: 200,
      valueGetter: (params) => ` ${params.row.lastname || ''} ${params.row.name || ''}`
    },
    { field: 'company_name', headerName: 'Compañía', width: 250 },
    { field: 'position', headerName: 'Cargo', width: 150 },
    { field: 'email', headerName: 'Correo', width: 300 },
    {
      field: 'interest',
      headerName: 'Interés',
      width: 200,
      sortable: false,
      renderCell: (obj) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <p>{obj.row.interest}%</p>
          <progress max='100' value={obj.row.interest} />
        </div>
      )
    },
    {
      field: 'chanel',
      headerName: 'Canal Favorito',
      align: 'center',
      headerAlign: 'center',
      width: 300,
      flex: 1,
      sortable: false,
      renderCell: (obj) => (
        <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', alignItems: 'center' }}>
          {obj.row.preference_phone === 2 && (
            <Grid item>
              <Chip color='primary' label='Teléfono' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_linkedin === 2 && (
            <Grid item>
              <Chip color='primary' label='LinkedIn' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_facebook === 2 && (
            <Grid item>
              <Chip color='primary' label='Facebook' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_twitter === 2 && (
            <Grid item>
              <Chip color='primary' label='Twitter' size='small' variant='outlined' />
            </Grid>
          )}
          {obj.row.preference_instagram === 2 && (
            <Grid item>
              <Chip color='primary' label='Instagram' size='small' variant='outlined' />
            </Grid>
          )}
        </Grid>
      )
    },
    {
      field: 'action',
      headerName: 'Acciones',
      align: 'center',
      headerAlign: 'center',
      width: 100,
      sortable: false,
      renderCell: (obj) => (
        <>
          <Button
            disableElevation
            color='primary'
            sx={{ minWidth: 0 }}
            type='submit'
            variant='text'
            onClick={() => {
              setActiveData(obj.row);
              handleOpen();
            }}
          >
            <EditIcon />
          </Button>
          <Button
            disableElevation
            color='error'
            sx={{ minWidth: 0 }}
            type='submit'
            variant='text'
            onClick={() => handleDeleteContact(obj.row.id)}
          >
            <DeleteIcon />
          </Button>
        </>
      )
    }
  ];

  return (
    <div style={{ height: 450, width: '100%' }}>
      <StyledDataGrid
        columns={columns}
        disableSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        pageSize={6}
        rows={rows}
        rowsPerPageOptions={[6]}
        sx={{ fontFamily: 'Roboto Mono, monospace' }}
      />
    </div>
  );
};
export default Table;