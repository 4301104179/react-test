import React, { useState } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap'
import Signin from './Signin'
import Signup from './Signup'
import { connect } from 'react-redux'
import { toggleSignin, toggleSignup } from './redux/action'

const App = ({
    modal_Signin,
    modal_Signup,
    toggleSignin,
    toggleSignup,
    userList
}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userList.slice(indexOfFirstPost, indexOfLastPost)
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(userList.length / postsPerPage); i++) {
      pageNumbers.push(i)
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center">
                <span className="m-2">
                    <Button onClick={toggleSignin}> Đăng nhập </Button>
                    <Modal isOpen={modal_Signin} toggle={toggleSignin}>
                        <ModalHeader toggle={toggleSignin}> Đăng nhập </ModalHeader>
                        <ModalBody>
                            <Signin />
                        </ModalBody>
                    </Modal>
                </span>

                <span className="m-2">
                    <Button onClick={toggleSignup}> Đăng Ký </Button>
                    <Modal isOpen={modal_Signup} toggle={toggleSignup}>
                        <ModalHeader toggle={toggleSignup}> Đăng Ký </ModalHeader>
                        <ModalBody>
                            <Signup />
                        </ModalBody>
                    </Modal>
                </span>
            </div>

            <div className="w-50">
                <Table>
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Email</th>
                            <th> Password </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((user, idx) => (
                            <tr>
                                <th scope="row">{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Pagination aria-label="Page navigation example">
                    {pageNumbers.map(number => (
                        <PaginationItem key={number}>
                            <PaginationLink onClick={() => paginate(number)} href="#">
                                 {number}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                </Pagination>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = ({ user }) => ({
    modal_Signin: user.modal_signin,
    modal_Signup: user.modal_signup,
    userList: user.user_list
})

const mapDispatchToProps = dispatch => ({
    toggleSignin: () => dispatch(toggleSignin()),
    toggleSignup: () => dispatch(toggleSignup())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
