import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';
// import json2xls from 'json2xls';
// import ExportFile from './ExportFile';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [updateStudent, setUpdateStudent] = useState({
    studentName: "",
    subject: "",
    marks: 0
  })
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api');
          setStudents(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
  }, [])

  const handleDelete = (id) => {
    console.log("id", id)
    // const updatedStudents = students.filter((student) => student.id !== id);
    // setStudents(updatedStudents);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  const handleSaveChanges = async (e, student) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        }
        await axios.patch(`http://localhost:8000/api/${student._id}`, {
          studentName: updateStudent.studentName,
          subject: updateStudent.subject,
          marks: updateStudent.marks
        }, config);
        setShowModal(false);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
  };

  return (
    <>
    {/* <ExportFile data={students} fileName="students.xlsx" /> */}
    <ListGroup>
      {students?.map((student) => (
        <ListGroup.Item key={student?._id}>
          <div className="d-flex justify-content-between align-items-center">
            <span>{student.studentName}</span>
            <div>
              <Button variant="outline-secondary" className="me-2" onClick={() => handleEdit(student)}>
                Edit
              </Button>
              <Button variant="outline-danger" onClick={() => handleDelete(student.id)}>
                Delete
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>

    <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
        <Modal.Title>Edit Student</Modal.Title>
    </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e) => handleSaveChanges(e, selectedStudent)}>
            <Form.Group className="mb-3" controlId="formStudentName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" defaultValue={selectedStudent?.studentName} onChange={(e) => setUpdateStudent({...updateStudent, studentName: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStudentName">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter name" defaultValue={selectedStudent?.subject} onChange={(e) => setUpdateStudent({...updateStudent, subject: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStudentGrade">
            <Form.Label>Grade</Form.Label>
            <Form.Control type="text" placeholder="Enter grade" defaultValue={selectedStudent?.marks} onChange={(e) => setUpdateStudent({...updateStudent, marks: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
        </Form>
        </Modal.Body>
    </Modal>
</>
  );
};

export default Dashboard;