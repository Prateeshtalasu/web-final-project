import "./specialistList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
    const [data, setData] = useState([]);


    const handleDelete = (spec_id) => {
        setData(data.filter((item) => item.spec_id !== spec_id));
    };

    const getSpecialists = () => {
        Axios.get('http://localhost:3002/getspecialists').then((res) => {
            console.log(res);
            setData(res.data)
        })
    }

    useEffect(() => {
        getSpecialists()
    }, [])


    const columns = [
        { field: "spec_id", headerName: "ID", width: 90 },
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
                        {"Dr. " + params.row.name}
                    </div>
                );
            },
        },
        { field: "address", headerName: "Address", width: 200 },
        { field: "salary", headerName: "Salary", width: 200 },
        { field: "details", headerName: "Details", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button className="userListEdit">Edit</button>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.spec_id)}
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
                        <h1 className="userTitle">Specialist list</h1>
                    </div>
                </div>
                <DataGrid
                    getRowId={(row) => row.spec_id}
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