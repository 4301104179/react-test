import React from 'react'
import {
    Button,
    Input,
    Label,
    Form,
    FormGroup
} from 'reactstrap';
import { connect } from 'react-redux'
import { signUp, toggleSignup } from './redux/action';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        const { email, password, confirmPassword } = this.state
        const { userList, toggleSignup, signUp } = this.props
        event.preventDefault();
        const foundemail = userList.find(user =>
            user.email === email && user.password === password
        )
        if (foundemail && email === foundemail.email) {
            alert('email đã tồn tại')
            return
        }
        if (confirmPassword !== password) {
            alert("Mật khẩu không trùng khớp")
            return
        }
        signUp({ email, password })
        alert('Đăng ký thành công')
        this.setState({ name: '', email: '', password: '', confirmPassword: '' })
        toggleSignup()
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="Name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={e => this.handleChange(e)}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Email">Email</Label>
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
                    <Label for="Password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="Password"
                        value={this.state.password}
                        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                        onChange={e => this.handleChange(e)}
                        placeholder="Password"
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Re-Password</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        id="ConfirmPassword"
                        value={this.state.confirmPassword}
                        onChange={e => this.handleChange(e)}
                        placeholder="Re-Password"
                        required
                    />
                </FormGroup>

                <FormGroup className="mt-2">
                    <Button type="submit" > Sign Up </Button>
                </FormGroup>

            </Form>
        )
    }


}

const mapStateToProps = ({ user }) => ({
    userList: user.user_list
})

const mapDispatchToProps = dispatch => ({
    toggleSignup: () => dispatch(toggleSignup()),
    signUp: emailandpassword => dispatch(signUp(emailandpassword))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)