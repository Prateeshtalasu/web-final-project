import "./newUser.css";
import { useState, useEffect } from "react";
import Select from "react-select"
import Axios from "axios"

export default function NewUser() {
  const [name, setName] = useState('')
  const [addr, setAddr] = useState('')
  const [dise, setDise] = useState('')
  const [stat, setStat] = useState('')
  const [doct, setDoct] = useState('')

  const addPatient = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3002/newpatient', {
      name: name,
      addr: addr,
      dise: dise,
      stat: stat,
      doct: doct
    }).then(() => {
      console.log("success")
    })

    window.location.href = '/users';
  }

  const [doctorList, setDocList] = useState([
    { label: 'pop', value: 1 },
    { label: 'pop2', value: 2 },
    { label: 'pop3', value: 3 },
  ]);

  const getDoctors = () => {
    Axios.get('http://localhost:3002/getdoctors').then((res) => {
      console.log(res);

      var docList = res.data.map(doc => {
        return { label: doc.name, value: doc.doc_id }
      })

      console.log(docList);
      setDocList(docList);
    })
  }

  useEffect(() => {
    getDoctors();
  }, [])


  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="John doe"
            onChange={(event) => {
              setName(event.target.value);
            }} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="789 Balloon street, unit 567"
            onChange={(event) => {
              setAddr(event.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Doctor</label>
          <Select
            // value={doct}
            options={doctorList}
            onChange={(selectedOp) => {
              setDoct(selectedOp.value);
            }}></Select>
        </div>
        <div className="newUserItem">
          <label>Disease</label>
          <input type="text" placeholder="Malaria" onChange={(event) => {
            setDise(event.target.value);
          }} />
        </div>
        <div className="newUserItem">
          <label>Patient status</label>
          <input type="text" placeholder="in control" onChange={(event) => {
            setStat(event.target.value);
          }} />
        </div>
        <br />
        <button className="newUserButton" onClick={(e) => addPatient(e)}>Create</button>
      </form>
    </div>
  );
}
