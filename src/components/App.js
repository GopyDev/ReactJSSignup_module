import React from 'react'
import SignupForm from '../containers/SignupForm'
import Progress from '../containers/Progress'
import Footer from '../components/Footer'
import Header from '../components/Header'
import * as signupStyles from '../styles'

const SignupApp = () => (
  <div style={signupStyles.app}>
    <Header />
    <Progress />
    <SignupForm />
    <Footer />
  </div>
)

export default SignupApp