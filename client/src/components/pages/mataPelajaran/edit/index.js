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

const EditSubject = () => {
  const [subject, setUpdateSubject] = useState('');
  const classes = useStyles();
  const params = useParams();
  const history = useHistory()

  useEffect(() => {
    getDataSubject(params.id)
  },[params.id])


  const getDataSubject = id => {
    axios.get(API + '/findOneSubject/' + id)
      .then(res => {
        setUpdateSubject(res.data.Pelajaran)
        
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const updateData = () => {
    let editedPelajaran = subject;
    
    axios.put(API + '/updateSubject/' + params.id,{
      Subject: editedPelajaran
    })
    .then(() => {
      alert('update success')
      history.push('/subject')
    })
    .catch(err => {
      console.log(err)
    })
  }
  console.log(params.id, subject);
  
  return(
    <div className="Edit">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="Title">
          <h2>Update Pelajaran</h2>
        </div>
        <div className="TextField">
          <TextField
            style={{backgroundColor: "white"}} 
            required 
            id="standard-required" 
            label="Subject" 
            value = {subject}
            onChange = {e => setUpdateSubject(e.target.value)}
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
            onClick = {() => history.push('/subject')}
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
export default EditSubject