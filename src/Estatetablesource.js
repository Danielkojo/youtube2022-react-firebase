export const userColumns = [

  {
    field: "BuildingType",
    headerName: "Building Type",
    width: 150,
  },

  {
    field: "Price",
    headerName: "Size",
    width: 100,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
    return (  
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
