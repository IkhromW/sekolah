import React, { useState,useEffect } from 'react';
import './style.scss';
import axios from 'axios';
import { API } from '../../helper/API';
import { Table } from 'reactstrap';
import { useHistory, useParams } from  'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button as ButtonStrap } from 'reactstrap' 

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



const Daftar = () => {

  const [siswa, setSiswa] = useState('');
  const [data, setData] = useState([]);
  const [id, setId] = useState()
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();

  useEffect(() => {
    getAllData(params.id);
    getSiswa(params.id)
  },[params.id]);

  const getSiswa = async(id) => {
    try {
      let res = await axios.get(`${API}/findOne/${id}`);
      setSiswa(res.data.Nama);
      setId(res.data.id)
    } catch (error) {
      console.log(error);
    }
  }

  const getAllData = async(id) => {
    try {
        let res = await axios.get(API + `/daftarbyIdSiswa/${id}`)
        setData(res.data)
    } catch (error) {
        console.log(error); 
    }
  }
  const onDeleteBtn = async(id) => {
    try {
     await axios.delete(API + `/deleteSelectedSubjects/${id}`)
     await getAllData(params.id)
       
    } catch (error) {
      console.log(error);
    }
  }
  const onEditBtn = (id) => {
    return history.push('/editPelajaran/' + id)
  }

  const renderData = () => {
    return data.map((kelas,index) => {
      return (
        <tr key={kelas.id + 23}>
        <th scope="row">{index + 1}</th>
        <td>{kelas.subject.Pelajaran}</td>
        <td>
          <Button
            startIcon={<EditSharpIcon/>}
            variant ="contained"
            size = "small"
            onClick = {() => onEditBtn(kelas.id)}
          > 
          Edit
          </Button>
           <Button
           variant="contained"
           color="secondary"
           className={classes.button}
           startIcon={<DeleteIcon />}
           size = "small"
           onClick = {() => {if (window.confirm('Are you sure delete the item'))onDeleteBtn(kelas.id)}}
          >
            Delete
          </Button>

        </td>
      </tr>
      )
    })
  }
  
  
  return(
    <div>
      <div className="Nama">
        <span>
         <h2>{siswa}</h2> 
        </span>
      </div>
      <div className="TableContainerDaftar" >
     <Table striped bordered >
      <thead>
        <tr>
          <th>No</th>
          <th>Selected Subjects</th>
          <th className="Action">Action</th>
        </tr>
      </thead>
      <tbody>
       {renderData()}
      </tbody>
    </Table>
    <div style={{float: 'right'}}>
    <ButtonStrap 
        color="primary" 
        onClick={() => history.push('/addPelajaran/' + id)} 
        size="sm"
        style={{width: '55px'}}
        >
        <FontAwesomeIcon
          icon={faPlusSquare}
        />
        
      </ButtonStrap>
    </div>
    
  </div>
    </div>
  )
}
export default Daftar;