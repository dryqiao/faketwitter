import { useNavigate } from 'react-router-dom'

const btnBack = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => {
        navigate('/')
      }}
    >
      Back To Home
    </button>
  )
}
export default btnBack
