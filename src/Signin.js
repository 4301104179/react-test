import React from 'react'
import {
    Button,
    Input,
    Label,
    Form,
    FormGroup
} from 'reactstrap';
import { connect } from 'react-redux'
import { toggleSignin } from './redux/action';



class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { userList, toggleSignin } = this.props
        const { email, password } = this.state
        const foundemail = userList.find(user =>
            user.email === email && user.password === password
        )
        if (!foundemail || foundemail.password !== password) {
            alert('sai toàn khoản hoặc mật khẩu vui lòng đăng nhập lại')
            return
        }
        this.setState({ email: '', password: '' })
        toggleSignin()
        alert('Đăng nhập thành công')
    }

    handleChange = event => {
        const { email, password } = this.state
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="Email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={e => this.handleChange(e)}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="Password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                        placeholder="Password"
                    />
                </FormGroup>

                <FormGroup className="mt-2">
                    <Button type="submit" > Sign In </Button>
                </FormGroup>

            </Form>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    userList: user.user_list
})

const mapDispatchToProps = dispatch => ({
    toggleSignin: () => dispatch(toggleSignin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)