const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'medical_system'
});

// adding new patient
app.post('/newpatient', (req, res) => {
    const { name, addr, dise, stat, doct } = req.body;
    const p_id = Date.now().toString().slice(-8);

    console.log(p_id)

    db.query(
        `INSERT INTO PATIENT (name, address, diesease_name, patient_status, patient_id) VALUES (?,?,?,?,?)`,
        [name, addr, dise, stat, p_id],
        (err, result) => {
            if (err) {
                console.log(err);
            }
        }
    );

    db.query(
        "INSERT INTO diagonise (d_id, pat_id) VALUES (?,?)",
        [doct, p_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("New diagonise added.");
            }
        }
    )
})

// viewing all patients 
app.get('/getpatients', (req, res) => {
    db.query(
        `SELECT P.patient_id, P.name, P.address, P.diesease_name, P.patient_status, D.name as doctor
        FROM PATIENT as P
        JOIN diagonise as d ON P.patient_id = d.pat_id
        JOIN DOCTOR as D ON D.doc_id = d.d_id`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// fetch patient by id
app.get('/getpatients', (req, res) => {
    db.query(
        `SELECT P.patient_id, P.name, P.address, P.diesease_name, P.patient_status, D.name as doctor
        FROM PATIENT as P
        JOIN diagonise as d ON P.patient_id = d.pat_id
        JOIN DOCTOR as D ON D.doc_id = d.d_id
        WHERE P.patient_id = ?`,
        [12],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// update patient details
// app.


// viewing all doctors
app.get('/getdoctors', (req, res) => {
    db.query(
        `SELECT * FROM DOCTOR`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all specialists
app.get('/getspecialists', (req, res) => {
    db.query(
        `SELECT * FROM SPECIALIST`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all staff
app.get('/getstaff', (req, res) => {
    db.query(
        `SELECT * FROM STAFF`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all reception team
app.get('/getreception', (req, res) => {
    db.query(
        `SELECT * FROM RECEPTION_TEAM`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all labs
app.get('/getlabs', (req, res) => {
    db.query(
        `SELECT * FROM CLINICAL_LAB`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all operarion theaters
app.get('/getopt', (req, res) => {
    db.query(
        `SELECT * FROM OPERATION_THEATER`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all opt status
app.get('/statusopt', (req, res) => {
    db.query(
        `SELECT * FROM OPT`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

// viewing all pharmacy
app.get('/pharmacy', (req, res) => {
    db.query(
        `SELECT * FROM PHARMACY`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

app.listen(3002, () => {
    console.log('listening on http');
});