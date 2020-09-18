import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ModalExample = (props) => {
  
  const classes = useStyles()
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button 
        color="primary" 
        onClick={toggle} 
        size="sm"
        style={{width: '55px'}}
        >
        <FontAwesomeIcon
          icon={faPlusSquare}
        />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          required
          id="outlined-required"
          label="Nama"
          defaultValue={props.nama}
          value={props.valueI}
          variant="outlined"
          onChange={props.onChangeName}
          
        />
        <TextField
          required
          id="outlined-required"
          label={props.labelII}
          defaultValue={props.kelas}
          variant="outlined"
          onChange={props.onChangeKelas}

        />
        </div>
        </form>
        </ModalBody>
        <ModalFooter>
          <Button 
            color="success" 
            onClick={() => {
              props.clickSave();
              toggle()
            }}
          >
            <FontAwesomeIcon
              icon={faSave}
              style={{marginRight: '10px'}}
            />
            Save
          </Button>
          <Button 
            color="danger" 
            onClick={toggle}
          >
           <FontAwesomeIcon
              icon={faWindowClose}
              style={{marginRight: '10px'}}
            />
          Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;