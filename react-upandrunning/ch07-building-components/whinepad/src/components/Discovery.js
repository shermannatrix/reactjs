import Excel from './Excel';
import React, { useRef } from 'react';
import Logo from './Logo';
import Body from './Body';
import Button from './Button';
import './Discovery.css';
import Suggest from './Suggest';
import Rating from './Rating';
import FormInput from './FormInput';
import Form from './Form';
import Actions from './Actions';

const options = ['eenie', 'meenie', 'miney', 'mo'];

function Discovery() {
	const form = useRef();
	return (
		<div className="wrapper">
			<h2>Logo</h2>
			<div style={{background: '#f6f6f6', display: 'inline-block'}}>
				<Logo />
			</div>
			<h2>Body</h2>
			<Body>I am content inside the body</Body>
			<h2>Buttons</h2>
			<p>
				Button with onClick:{' '}
				<Button onClick={() => alert('ouch')}>Click me</Button>
			</p>
			<p>
				A link: <Button href="https://reactjs.org/">Follow me</Button>
			</p>
			<p>
				Custom class name:{' '}
				<Button className="Discovery-custom-button">I do nothing</Button>
			</p>
			<h2>Suggest</h2>
			<p>
				<Suggest options={options} />
			</p>
			<h2>Rating</h2>
			<p>
				No initial value: <Rating />
			</p>
			<p>
				Initial value 4: <Rating defaultValue={4} />
			</p>
			<p>
				This one goes to 11: <Rating max={11} />
			</p>
			<p>
				Read-only: <Rating readonly={true} defaultValue={3} />
			</p>
			<h2>Form inputs</h2>
			<table className="Discovery-pad">
				<tbody>
					<tr>
						<td>Vanilla input</td>
						<td><FormInput /></td>
					</tr>
					<tr>
						<td>Prefilled</td>
						<td><FormInput defaultValue="with a default" /></td>
					</tr>
					<tr>
						<td>Year</td>
						<td><FormInput type="year" /></td>
					</tr>
					<tr>
						<td>Rating</td>
						<td><FormInput type="rating" defaultValue={4} /></td>
					</tr>
					<tr>
						<td>Suggest</td>
						<td>
							<FormInput
								type="suggest"
								options={['red', 'green', 'blue']}
								defaultValue="green"
							/>
						</td>
					</tr>
					<tr>
						<td>Vanilla textarea</td>
						<td><FormInput type="textarea" /></td>
					</tr>
				</tbody>
			</table>
			<h2>Form Component</h2>
			<Form
				ref={form}
				fields={{
					rateme: { label: 'Rating', type: 'rating' },
					freetext: { label: 'Greetings' },
				}}
				initialData={{ rateme: 4, freetext: 'Hello' }}
			/>
			<Button
				onClick={() => {
					const data = {};
					Array.from(form.current).forEach(
						(input) => (data[input.id] = input.value)
					);
					alert(JSON.stringify(data));
				}}
			>
				Submit
			</Button>
			<h2>Actions Component</h2>
			<Actions onAction={(type) => alert(type)} />
			<h2>Excel</h2>
			<Excel
				headers={['Name', 'Year']}
				initialData={[
					['Charles', '1859'],
					['Antoine', '1943'],
				]} />
		</div>
	);
}

export default Discovery;