import "./opt.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
    const [data, setData] = useState([]);


    const handleDelete = (thea_id) => {
        setData(data.filter((item) => item.thea_id !== thea_id));
    };

    const getLabs = () => {
        Axios.get('http://localhost:3002/getopt').then((res) => {
            console.log(res);
            setData(res.data)
        })
    }

    useEffect(() => {
        getLabs()
    }, [])


    const columns = [
        { field: "thea_id", headerName: "Theatre ID", width: 150 },
        { field: "location", headerName: "Location", width: 200 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "equipment", headerName: "Equipment", width: 200 },
        { field: "type", headerName: "Type", width: 200 },
        { field: "infrastructure", headerName: "Infrastucture", width: 200 },
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
                            onClick={() => handleDelete(params.row.thea_id)}
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
                        <h1 className="userTitle">Operation Theatres</h1>
                    </div>
                </div>
                <DataGrid
                    getRowId={(row) => row.thea_id}
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