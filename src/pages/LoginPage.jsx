import { useDispatch } from 'react-redux'
import { logInUserThunk } from '../redux/auth/auth-operations'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		const credentials = {
			email,
			password,
		}

		dispatch(logInUserThunk(credentials)).then(() => navigate('/tasks'))

		form.reset()
	}

	return (
		<div className='flex justify-center items-center h-screen bg-darkMain'>
			<form
				className='flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg'
				onSubmit={handleSubmit}
			>
				<h1 className='text-center text-2xl'>Login Form</h1>
				<input
					className='border px-2 text-black'
					name='email'
					placeholder='Email...'
					type='text'
				/>
				<input
					className='border px-2 text-black'
					name='password'
					placeholder='Password...'
					type='password'
				/>
				<button className='border bg-blue-600 rounded-md'>Login</button>
			</form>
		</div>
	)
}
