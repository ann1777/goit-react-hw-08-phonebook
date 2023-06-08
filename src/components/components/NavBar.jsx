import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../redux/auth/auth-selectors'
import { logOutUserThunk } from '../../redux/auth/auth-operations'

export const NavBar = () => {
	const dispatch = useDispatch()
	const { name } = useSelector(currentUser)
	return (
		<header className='text-2xl text-white font-bold py-2 px-8 border-b-2 border-white/10 bg-darkMain flex justify-between gap-6'>
			<div className='flex gap-4 '>
				<NavLink className='hover:text-[#3258f0]' to='/'>
					Home
				</NavLink>
				<NavLink className='hover:text-[#3258f0]' to='/tasks'>
					Tasks
				</NavLink>
			</div>

			{name ? (
				<div className='flex gap-4'>
					<h1>
						Welcome, <span className='text-[#3258f0]'>{name}</span>
					</h1>
					<button
						onClick={() => dispatch(logOutUserThunk())}
						className='border text-md px-2 hover:bg-[#e605ff] bg-[#b439c2] rounded-md'
					>
						Exit
					</button>
				</div>
			) : (
				<div>
					<NavLink className='hover:text-[#3258f0]' to='/login'>
						<span>login</span>
					</NavLink>{' '}
					|
					<NavLink className='hover:text-[#3258f0]' to='/registration'>
						<span> signUp</span>
					</NavLink>
				</div>
			)}
		</header>
	)
}
