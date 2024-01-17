export const userColumns = [

  {
    field: "Type",
    headerName: "Building Type",
    width: 150,
  },

  {
    field: "Size",
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
