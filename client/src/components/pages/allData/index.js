import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../helper/API';
import { Table } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const AllData = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllData()
  },[])

  const renderPelajaran = (arr) => {

    let str = ''

    for(let i = 0; i < arr.length; i++){
      if(i === arr.length - 1){
        str += ' ' + arr[i]
      }
      else{
        str += arr[i] + ', '
      }
    }
    return str
  }

  const renderBody = () => {
    return data.map((item, index) => {
      return (
      <tr key={index + 45}>
      
          <th scope="row">{index + 1}</th>
          <td
            role="button"
            onClick={() => history.push(`/Daftar/${item.studentId}`)}
          >
          {item.student}</td>
          <td>{renderPelajaran(item.pelajaran)}</td>
      </tr>
       
      )
    })
  }


  const getAllData = async() => {
    try {
      let result = await axios.get(API + '/daftarGroupByName')
      console.log(result.data);
      setData(result.data)
      
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div className="TableContainerDaftar" >
      <Table striped bordered >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Murid</th>
            <th>Pelajaran Yang Diambil</th>
        </tr>
      </thead>
      <tbody>
       {renderBody()}
      </tbody>
    </Table>
      </div>
  )
}
export default AllData