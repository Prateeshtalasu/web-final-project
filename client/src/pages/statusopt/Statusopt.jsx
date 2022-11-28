import "./statusopt.css";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function UserList() {
    const [data, setData] = useState('Loading...');

    const getStatusOpt = () => {
        Axios.get('http://localhost:3002/statusopt').then((res) => {
            console.log(res);
            setData(res.data[0].opthea_info)
        })
    }

    useEffect(() => {
        getStatusOpt()
    }, [])

    return (
        <div className="newUser">
            <h1 className="newUserTitle">Operation theatre status</h1>
            <h3 className="subtitle">{data}</h3>
        </div>
    )
}