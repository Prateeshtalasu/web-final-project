import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPatients()
  }, [])

  const handleDelete = (patient_id) => {
    setData(data.filter((item) => item.patient_id !== patient_id));
  };

  const getPatients = () => {
    Axios.get('http://localhost:3002/getpatients').then((res) => {
      console.log(res);
      setData(res.data)
    })
  }


  const columns = [
    { field: "patient_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "address", headerName: "Address", width: 200 },
    { field: "doctor", headerName: "Doctor", width: 120 },
    { field: "diesease_name", headerName: "Disease", width: 160 },
    {
      field: "patient_status",
      headerName: "Status",
      width: 160
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.patient_id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.patient_id)}
            />
          </>
        );
      },
    },
  ];

  if (data.length === 0) {
    return (

      <div className="newUser">
        <h1 className="newUserTitle">Loading...</h1>
      </div>
    )
  } else {
    return (
      <div className="userList">
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Patients list</h1>
            <Link to="/newUser">
              <button className="userAddButton">Add Patient</button>
            </Link>
          </div>
        </div>
        <DataGrid
          getRowId={(row) => row.patient_id}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    );
  }
}