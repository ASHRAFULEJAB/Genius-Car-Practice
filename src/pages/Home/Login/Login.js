import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../context/UserContext/AuthProvider'

const Login = () => {
  const { login } = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    login(email, password)
      .then((result) => {
        const user = result.user
          console.log(user)
          alert('login sucessfull')
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
          onSubmit={handleLogin}
          className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
        >
          <h1 className='text-5xl text-center font-bold'>Login now!</h1>
          <div className='card-body'>
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
              <label className='label'>
                <Link href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <input type='submit' className='btn btn-primary' value='login' />
            </div>
          </div>
          <p className='m-6'>
            Donot have Any Account{' '}
            <Link className='font-bold text-orange-500' to='/sign-up'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
