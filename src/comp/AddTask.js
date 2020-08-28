import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import { Modal, Button, Form as BForm, ModalFooter } from "react-bootstrap"
import { Formik, useField, Form } from 'formik'
import * as Yup from "yup"


const FormTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <BForm.Group>
            <BForm.Label htmlFor={props.id}>{label}</BForm.Label>
            <BForm.Control className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error" style={{ color: "red" }}>{label} is {meta.error}</div>
            ) : null}
        </BForm.Group>
    )
}

const FormTextAreaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <BForm.Group>
            <BForm.Label htmlFor={props.id}>{label}</BForm.Label>
            <BForm.Control as={props.type} className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error" style={{ color: "red" }}>{label} is {meta.error}</div>
            ) : null}
        </BForm.Group>
    )
}

const FormSelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <BForm.Group>
            <BForm.Label htmlFor={props.id}>{label}</BForm.Label>
            <BForm.Control as={props.type} className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error" style={{ color: "red" }}>{label} is {meta.error}</div>
            ) : null}
        </BForm.Group>
    )
}

export const AddTask = () => {

    // const [taskItem, setTaskItem] = useState(
    //     {
    //         taskName: "",
    //         taskDesc: "",
    //         taskLvl: ""
    //     }
    // )

    const { addTask } = useContext(GlobalContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setTaskItem({ ...taskItem, [name]: value })
    // }



    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { taskName, taskDesc, taskLvl } = taskItem

    //     if (taskName || taskDesc || taskLvl === "") {
    //         //alert popup
    //         console.log("Enter some information")
    //     } else {
    //         const newTask = {
    //             id: Math.floor(Math.random() * 10000),
    //             taskName,
    //             taskDesc,
    //             taskLvl
    //         }
    //         addTask(newTask)
    //     }

    // }



    return (
        <div>
            <Button className="addTaskButton" variant="primary" onClick={handleShow}>
                Add A Task
      </Button>

            <Formik
                initialValues={{
                    taskName: "",
                    taskDesc: "",
                    taskLvl: ""
                }}
                validationSchema={Yup.object({
                    taskName: Yup.string().required("Required"),
                    taskDesc: Yup.string().required("Required"),
                    taskLvl: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        const { taskName, taskDesc, taskLvl } = values
                        const newTask = {
                            id: Math.floor(Math.random() * 10000),
                            taskName,
                            taskDesc,
                            taskLvl,
                        }
                        addTask(newTask)
                        //console.log(JSON.stringify(values, null, 2))
                        resetForm()
                        setSubmitting(false)
                    }, 1000)
                }}
            >
                {props => (

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    ><Form>
                            <Modal.Header closeButton>
                                <Modal.Title>Add A Task</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>

                                <FormTextInput
                                    label="Title"
                                    name="taskName"
                                    type="text"
                                    placeholder="Enter a Title" />
                                <FormTextAreaInput
                                    label="Descripton"
                                    name="taskDesc"
                                    type="textarea"
                                    placeholder="Enter a Descripton" />
                                <FormSelectInput
                                    label="Priority"
                                    name="taskLvl"
                                    type="select"
                                >
                                    <option value="Select Priority">-- Select Priority --</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </FormSelectInput>



                            </Modal.Body>
                            <ModalFooter>
                                <Button type="submit">{props.isSubmitting ? "Loading..." : "Submit"}</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>

                )}

            </Formik>
        </div>
    )
}



