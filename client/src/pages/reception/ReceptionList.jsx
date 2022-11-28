import "./receptionList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
    const [data, setData] = useState([]);


    const handleDelete = (name) => {
        setData(data.filter((item) => item.name !== name));
    };

    const getSpecialists = () => {
        Axios.get('http://localhost:3002/getreception').then((res) => {
            console.log(res);
            setData(res.data)
        })
    }

    useEffect(() => {
        getSpecialists()
    }, [])


    const columns = [
        { field: "name", headerName: "Name", width: 150 },
        { field: "location", headerName: "Location", width: 200 },
        { field: "ph_num", headerName: "Phone Number", width: 200 },
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
                        <h1 className="userTitle">Reception Team</h1>
                    </div>
                </div>
                <DataGrid
                    getRowId={(row) => row.name}
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