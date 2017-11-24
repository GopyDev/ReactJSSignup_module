import { connect } from 'react-redux'
import ErrorComponent from '../components/ErrorComponent'

const mapStateToProps = state => ({
  errors: Object.values(state.input).map(input => input.message)
})

const Errors = connect(
  mapStateToProps
)(ErrorComponent)

export default Errors