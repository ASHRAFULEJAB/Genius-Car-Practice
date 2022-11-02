import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/UserContext/AuthProvider'

const SignUp = () => {
  const { signUp } = useContext(AuthContext)
  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    signUp(email, password)
      .then((result) => {
        const user = result.user
          console.log(user)
          form.reset()
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <div className='hero  my-10'>
      <div className='hero-content  grid md:grid-cols-2 flex-col lg:flex-row py-10'>
        <div className='text-center lg:text-left'>
          <img src={image} alt='' className='w-3/4' />
        </div>
        <form
          onSubmit={handleSignUp}
          className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
        >
          <h1 className='text-5xl text-center font-bold'>SignUp now!</h1>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                name='email'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <input
                type='submit'
                className='btn btn-primary'
                value='Sign Up'
              />
            </div>
          </div>
          <p className='m-6'>
            Already have An Account{' '}
            <Link className='font-bold text-orange-500' to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
