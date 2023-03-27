import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { RootState } from '@/store'
import BtnBack from '@/components/btnBack'
import styles from './index.module.less'
const Login = () => {
  const { currentUser } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const [formData, setFormData] = useState({ username: '', password: '' })

  useEffect(() => {
    if (currentUser) {
      navigate(`/home/${currentUser}`)
    }
  }, [currentUser])

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      dispatch({ type: 'user/login', payload: formData })
    } else {
      dispatch({ type: 'user/signup', payload: formData })
    }
  }
  return (
    <form className={styles.formWrapper} onSubmit={handlerSubmit}>
      <label>
        Username
        <input
          value={formData.username}
          name='username'
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <button type='submit'>{isLogin ? 'Login' : 'Signup'}</button>
      <BtnBack />
    </form>
  )
}

export default Login
