import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Tareas = () => {
  const [tarea, setTarea] = useState(""); 
  const [tareas,setTareas] = useState([]);
   
  return (
       <div>
       <div className='container my-5 py-5 d-flex justify-content-center '>
          <Form>
            <Form.Group> 
              <Form.Label>Ingrese aqui su tarea</Form.Label>
              <Form.Control type='text'onChange={(e)=>{console.log(e.currentTarget.value);
              setTarea(e.currentTarget.value)}}/>
            </Form.Group>
            <Button type='button' variant='primary' className='my-3' onClick={()=>{
              setTareas([... tareas,tarea]);
            }}>
              Guardar tarea</Button>
          </Form>
          
        </div>
        <div className='container'>
          <h3>Lista de tareas a realizar</h3>
          <ol>
            {tareas.map ((elemento)=>{
              return (
                <>
                <li>Tareas:{elemento}</li>
                </>
              )
            
              
            })}
            
          </ol>

        </div>
        </div>
        
    );
};

export default Tareas;