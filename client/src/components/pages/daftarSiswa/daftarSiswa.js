import React,{ useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import Modal from '../../component/Modal'
import axios from 'axios';
import { API } from '../../helper/API';
import { Table } from 'reactstrap';
import './daftarSiswa.css';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  addButton:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    float: 'right'
  }
}));


const DaftarSiswa = () => {
  const [siswa, setSiswa] = useState('');
  const [kelas, setKelas] = useState();
  const [data, setData] = useState([]);
  const history = useHistory()
  const classes = useStyles();
  

  
  useEffect(() => {
    getDataSiswa()
  },[])

  const getDataSiswa = () => {
    axios.get(API)
    .then(res => {
      console.log(res.data);
      setData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const saveData = () => {
    axios.post(API + "/addSiswa",{
      Nama: siswa,
      Kelas: kelas
    })
    .then(() => {
      getDataSiswa()
      setSiswa('')
      setKelas()
    })

  }

  const onEditBtn = (id) => {
    return history.push(`/edit/${id}`)
  }

  const onDeleteBtn = (id) => {
    return axios.delete(API + '/deleteSiswa/' + id)
      .then(() => {
        getDataSiswa()
      })
  }

  const renderData = () => {
    return data.map((student,index) => {
      return (
        <tr key={student.id + 23}>
        <th scope="row">{index + 1}</th>
        <td
          role="button"
          onClick={() => history.push(`/Daftar/${student.id}`)}
        >
          {student.Nama}
        </td>
        <td>{student.Kelas}</td>
        <td>
          <Button
            startIcon={<EditSharpIcon/>}
            variant ="contained"
            size = "small"
            onClick = {() => onEditBtn(student.id)}
          >
          Edit
          </Button> 
           <Button
           variant="contained"
           color="secondary"
           className={classes.button}
           startIcon={<DeleteIcon />}
           size = "small"
           onClick = {() => {if (window.confirm('Are you sure delete the item'))onDeleteBtn(student.id)}}
          >
            Delete
          </Button>

        </td>
      </tr>
      )
    })
  }
  console.log(siswa);
  
  return(
  <div className="TableContainer" >
     <Table striped bordered >
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Kelas</th>
          <th className="Action">Action</th>
        </tr>
      </thead>
      <tbody>
       {renderData()}
      </tbody>
    </Table>
    <div style={{float:'right'}}>
      <Modal
        nama={siswa}
        kelas={kelas}
        labelII="Kelas"
        onChangeName={e => setSiswa(e.target.value)}
        onChangeKelas={e => setKelas(e.target.value)}
        clickSave = {saveData}
      />
    </div>
  </div>
  )
}

export default DaftarSiswa