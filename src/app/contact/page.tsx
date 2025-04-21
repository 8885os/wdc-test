import React from 'react'

export default function page() {
	return (
		<div className='p-6'>
			<h1>Contact</h1>
			<p className='mb-10'>Get in touch with us</p>
			<form className='flex flex-col gap-3' action=''>
				<input type='text' placeholder='Name' required />
				<input type='email' placeholder='Email' required />
				<input type='text' placeholder='Subject' />
				<textarea placeholder='Message' required></textarea>
				<button type='submit'>Send</button>
			</form>
		</div>
	)
}
