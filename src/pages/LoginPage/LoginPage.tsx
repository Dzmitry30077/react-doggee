import React from 'react'

import { Input } from '../../common/fields'
import { Button } from '../../common/buttons'

import styles from './LoginPage.module.css'

const validateUsername = (value: string) => {
  if (!value) {
    return 'faild required'
  }
  return null
}
const validatePassword = (value: string) => {
  if (!value) {
    return 'faild required'
  }
  return null
}

const loginFormValidateScheme = {
  username: validateUsername,
  password: validatePassword,
}

const validateLoginForm = (name: 'username | password', value: string) => {
  return loginFormValidateScheme[name](value)
}

interface IFormErrors {
  username: string | null
  password: string | null
}

const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
  })
  const [formErrors, setFormErrors] = React.useState<IFormErrors>({
    username: null,
    password: null,
  })

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.container_header}>DOGGEE</div>
        <div>
          <div className={styles.form_container}>
            <div className={styles.input_container}>
              <Input
                isError={!!formErrors['username']}
                value={formValues.username}
                name='username'
                placeholder='username'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const username = e.target.value;
                  setFormValues({ ...formValues, username });
                  const error = validateLoginForm('username', username);
                  if (error) return setFormErrors({ ...formValues, username: error})
                }
                }
                {...(!!formErrors.username && {
                  isError: !!formErrors.username,
                  helperText: formErrors.username
                })}
              />
            </div>
            <div className={styles.input_container}>
              <Input
                isError={!!formErrors['password']}
                value={formValues.password}
                name='password'
                placeholder='password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
                {...(!!formErrors.password && {
                  isError: !!formErrors.password,
                  helperText: formErrors.password
                })}
              />
            </div>
            <div>
              <Button>Sign abba</Button>
            </div>
          </div>
        </div>
        <div className={styles.sing_up_container}>
          Create new account
        </div>
      </div>
    </div>
  )
}

export default LoginPage
