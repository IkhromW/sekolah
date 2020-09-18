import React,{ useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import ModalSubject from '../../component/ModalSubject';
import axios from 'axios';
import { API } from '../../helper/API';
import { Table } from 'reactstrap';
import './style.scss';


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


const Pelajaran = () => {
  const [subject, SetSubject] = useState('');
  const [data, setData] = useState([]);
  const history = useHistory()
  const classes = useStyles();
  

  
  useEffect(() => {
    getSubject()
  },[])

  const getSubject = () => {
    axios.get(API + '/allSubjects')
    .then(res => {
      console.log(res.data);
      setData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const saveData = () => {
    axios.post(API + "/addSubject",{
      Subject : subject
    })
    .then(() => {
      getSubject();
      SetSubject('')
    })

  }

  const onEditBtn = (id) => {
    return history.push(`/editSubject/${id}`)
  }

  const onDeleteBtn = (id) => {
    return axios.delete(API + '/deleteSubject/' + id)
      .then(() => {
        getSubject()
      })
  }

  const renderData = () => {
    return data.map((subject,index) => {
      return (
        <tr key={subject.id + 23}>
        <th scope="row">{index + 1}</th>
        <td>{subject.Pelajaran}</td>
        <td>
          <Button
            startIcon={<EditSharpIcon/>}
            variant ="contained"
            size = "small"
            onClick = {() => onEditBtn(subject.id)}
          >
          Edit
          </Button>
           <Button
           variant="contained"
           color="secondary"
           className={classes.button}
           startIcon={<DeleteIcon />}
           size = "small"
           onClick = {() => {if (window.confirm('Are you sure delete the item'))onDeleteBtn(subject.id)}}
          >
            Delete
          </Button>

        </td>
      </tr>
      )
    })
  }
  console.log(subject);
  
  return(
  <div className="TableContainer" >
     <Table striped bordered >
      <thead>
        <tr>
          <th>No</th>
          <th>Mata Pelajaran</th>
          <th className="Action">Action</th>
        </tr>
      </thead>
      <tbody>
       {renderData()}
      </tbody>
    </Table>
    <div style={{float:'right'}}>
      <ModalSubject
        label="Pelajaran"
        value={subject}
        onChange={e => SetSubject(e.target.value)}   
        clickSave = {saveData}
      />
    </div>
  </div>
  )
}

export default Pelajaran