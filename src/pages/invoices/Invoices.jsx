import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from "./data";

const Invoices = () => {
  return (
    <Box>
      <Box sx={{ height: 625, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
