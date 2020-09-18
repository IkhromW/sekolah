import React,{ useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { API } from '../../helper/API';
import axios from 'axios';
import { useParams,useHistory } from 'react-router-dom';
import './edit.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Edit = () => {
  const [siswa, updatedSiswa] = useState('');
  const [kelas, updatedKelas] = useState();
  const classes = useStyles();
  const params = useParams();
  const history = useHistory()

  useEffect(() => {
    getDataSiswa(params.id)
  },[params.id])


  const getDataSiswa = id => {
    axios.get(API + '/findOne/' + id)
      .then(res => {
        updatedSiswa(res.data.Nama)
        updatedKelas(res.data.Kelas)
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const updateData = () => {
    let editedNama = siswa;
    let editedKelas = kelas;
    axios.put(API + '/updateSiswa/' + params.id,{
      Nama : editedNama,
      Kelas : editedKelas
    })
    .then(() => {
      alert('update success')
      history.push('/')
    })
  }

  return(
    <div className="Edit">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="Title">
          <h2>Update Siswa</h2>
        </div>
        <div className="TextField">
          <TextField
            style={{backgroundColor: "white"}} 
            required 
            id="standard-required" 
            label="Nama" 
            value = {siswa}
            onChange = {e => updatedSiswa(e.target.value)}
          />
        </div>
        <div>
          <TextField 
            InputLabelProps={{ shrink: true }}
            style={{backgroundColor: "white"}} 
            required 
            id="standard-required" 
            label="Kelas" 
            type="number"
            value={kelas}  
            onChange = {e => updatedKelas(e.target.value)}
          />
        </div>
      </form>
      <Button 
            color="success" 
            style={
              {
                marginRight: "10px", 
                marginTop: '20px',
                width: "120px"
              }
            }
            onClick = {updateData}
          >
            <FontAwesomeIcon
              icon={faSave}
              style={{marginRight: '10px'}}
            />
            Save
          </Button>
          <Button 
            color="danger" 
            style={{marginTop: '20px', width: "120px"}}
            onClick = {() => history.push('/')}
          >
           <FontAwesomeIcon
              icon={faWindowClose}
              style={{marginRight: '10px'}}
              
            />
          Cancel
          </Button>
    </div>
  )
}
export default Edit