import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import daftarSiswa from './components/pages/daftarSiswa/daftarSiswa';
import Edit from './components/pages/edit/edit';
import SideBar from './components/SideBar/LeftSideBar';
import Subject from './components/pages/mataPelajaran';
import editSubject from './components/pages/mataPelajaran/edit';
import Daftar from './components/pages/daftar';
import AddPelajaran from './components/pages/daftar/add';
import EditPelajaran from './components/pages/daftar/edit';
import AllData from './components/pages/allData';

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Route path='/murid' component={ daftarSiswa } exact/>
      <Route path='/edit/:id' component={ Edit } />
      <Route path='/subject' component={ Subject } />
      <Route path='/editSubject/:id' component={ editSubject } />
      <Route path='/Daftar/:id' component={ Daftar } />
      <Route path='/addPelajaran/:id' component={ AddPelajaran } />
      <Route path='/editPelajaran/:id' component={ EditPelajaran } />
      <Route path='/AllData' component={ AllData }/>
    </BrowserRouter>
  );
}

export default App;
