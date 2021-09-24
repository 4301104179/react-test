import React, {useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Table
} from 'reactstrap'
import Signin from './Signin'
import Signup from './Signup'

const App = () => {
    const [modal_Signin, setModal_Signin] = useState(false)
    const [modal_Signup, setModal_Signup] = useState(false)

    const toggleSignin = () => setModal_Signin(!modal_Signin)
    const toggleSignup = () => setModal_Signup(!modal_Signup)
    return (
        <React.Fragment> 
            <div className="d-flex justify-content-center">
                <span className="m-2">
                    <Button onClick={toggleSignin}> Đăng nhập </Button>
                    <Modal isOpen={modal_Signin} toggle={toggleSignin}>
                        <ModalHeader toggle={toggleSignin}> Đăng nhập </ModalHeader>
                        <ModalBody>
                            <Signin toggleSignin={toggleSignin} />
                        </ModalBody>
                    </Modal>
                </span>

                <span className="m-2">
                    <Button onClick={toggleSignup}> Đăng Ký </Button>
                    <Modal isOpen={modal_Signup} toggle={toggleSignup}>
                        <ModalHeader toggle={toggleSignup}> Đăng Ký </ModalHeader>
                        <ModalBody>
                            <Signup toggleSignup={toggleSignup} />
                        </ModalBody>
                    </Modal>
                </span>
            </div>
        </React.Fragment>
    )
}

export default App
