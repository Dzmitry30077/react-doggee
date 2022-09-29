import React from 'react'

import { Input } from '../../common/fields'
import { Button } from '../../common/buttons'

import './LoginPage.css'

const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
  })

  return (
    <div className='loginpage'>
      <div className='loginpage_form_container'>
        <div>header</div>
        <div>
          <div className='loginpage_input_container'>
            <Input
              isError={true}
              helperText='eww'
              value={formValues.username}
              name='username'
              placeholder='username'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, username: e.target.value })
              }
            />
            <div>validation</div>
          </div>
          <div className='loginpage_input_container'>
            <Input
              isError={true}
              helperText='eww'
              value={formValues.password}
              name='password'
              placeholder='password'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
          </div>
          <div>
            <Button>Sign abba</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
