import React,{ useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { API } from '../../../helper/API';
import axios from 'axios';
import { useParams,useHistory } from 'react-router-dom';
import './style.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Add = () => {
  const [siswa, setSiswa] = useState('');
  const [pelajaran, setPelajaran] = useState([]);
  const [idSubject, setIdSubject] = useState()
  const classes = useStyles();
  const params = useParams();
  const history = useHistory()

  useEffect(() => {
    getDataSiswa(params.id)
    getSubject()
  },[params.id])


  const getDataSiswa = id => {
    axios.get(API + '/findOne/' + id)
      .then(res => {
        setSiswa(res.data.Nama)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getSubject = () => {
    axios.get(API + '/allSubjects')
    .then(res => {
      console.log(res.data);
      setPelajaran(res.data);
      setIdSubject(res.data[0].id)
    })
    .catch(err => {
      console.log(err);
    })
  }

  console.log(pelajaran);
  

  const renderDropDown = () => {
    return pelajaran.map((subject, index) => {
      return(
        <option 
          key={index + 23}
          value={subject.id}
        >
        {subject.Pelajaran}
        </option>
      )
    })
  }
  
  const saveButton = () => {
    let namaId = params.id;
    let subjectId = idSubject;

    console.log(subjectId);
    

    axios.post(API + '/addDaftar',{
      student: namaId,
      subject: subjectId
    })
    .then(() =>{
      history.push('/Daftar/' + params.id)
    })
  }
  


  return(
    <div className="Edit">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="Title">
          <h2>Pilih Pelajaran</h2>
        </div>
        <div className="TextField">
          <TextField
            style={{backgroundColor: "white"}} 
            required 
            id="standard-required" 
            label="Nama" 
            value = {siswa}
           
          />
        </div>
       
        <div className="container">
          <div className="row">
          <div className="col-md-4"></div>
              <div className="col-md-4">
                 <select
                    value={idSubject}
                    onChange={e => setIdSubject(e.target.value)}
                 >
                  {renderDropDown()}
                </select>
              </div>
          <div className="col-md-4"></div>
          </div>
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
           onClick={saveButton}
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
            onClick = {() => history.push('/Daftar/' + params.id)}
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
export default Add