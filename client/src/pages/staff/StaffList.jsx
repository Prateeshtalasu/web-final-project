import "./staffList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
    const [data, setData] = useState([]);


    const handleDelete = (staff_id) => {
        setData(data.filter((item) => item.staff_id !== staff_id));
    };

    const getSpecialists = () => {
        Axios.get('http://localhost:3002/getstaff').then((res) => {
            console.log(res);
            setData(res.data)
        })
    }

    useEffect(() => {
        getSpecialists()
    }, [])


    const columns = [
        { field: "staff_id", headerName: "ID", width: 90 },
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
        { field: "qualification", headerName: "Qualifications", width: 200 },
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
                            onClick={() => handleDelete(params.row.staff_id)}
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
                        <h1 className="userTitle">Staff list</h1>
                    </div>
                </div>
                <DataGrid
                    getRowId={(row) => row.staff_id}
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