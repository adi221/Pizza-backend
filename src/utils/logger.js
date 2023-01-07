const info = (...params) => {
  console.log(params.join(' '))
}

const error = (...params) => {
  console.error(params.join(' '))
}

export default {
  info,
  error,
}