import React from 'react'
import {
    Button,
    Input,
    Label,
    Form,
    FormGroup
} from 'reactstrap';




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
        this.setState({ email: '', password: '' })
        alert('Đăng nhập thành công')
        this.props.toggleSignin()
    }

    handleChange = event => {
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
                        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
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


export default Signin