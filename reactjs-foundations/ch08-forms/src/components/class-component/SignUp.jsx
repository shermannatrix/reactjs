import { Component } from 'react';

class SignUp extends Component {
	/* constructor (props) {
		super(props);
		this.state = {
			emailAddress: ''
		}
	}

	handleChange(e) {
		this.setState({emailAddress: e.target.value});
	} */

	// We can also do it more succinctly by using arrow functions:
	state = {emailAddress: ''};

	render() {
		return (
			<>
				<form>
					<label>
						Enter your email address:
						<input
							value={this.state.emailAddress}
							onChange={(e) => {this.setState({emailAddress: e.target.value})}}
							type="text" />
					</label>
				</form>
				<p>
					Your email address: {this.state.emailAddress}
				</p>
			</>
		);
	}
}

export default SignUp;