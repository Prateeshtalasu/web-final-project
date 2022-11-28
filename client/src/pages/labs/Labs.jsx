import "./labs.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
    const [data, setData] = useState([]);


    const handleDelete = (lab_id) => {
        setData(data.filter((item) => item.lab_id !== lab_id));
    };

    const getLabs = () => {
        Axios.get('http://localhost:3002/getlabs').then((res) => {
            console.log(res);
            setData(res.data)
        })
    }

    useEffect(() => {
        getLabs()
    }, [])


    const columns = [
        { field: "lab_id", headerName: "Lab ID", width: 150 },
        { field: "location", headerName: "Location", width: 200 },
        { field: "name", headerName: "Name", width: 200 },
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
                            onClick={() => handleDelete(params.row.name)}
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
                        <h1 className="userTitle">Clinical Labs</h1>
                    </div>
                </div>
                <DataGrid
                    getRowId={(row) => row.lab_id}
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