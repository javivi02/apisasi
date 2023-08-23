import pkg from 'bcryptjs'
const { compare, hash } = pkg

const encrypt = async (pass) => {
  return await hash(pass, 8)
}

const verified = async (pass, passHash) => {
  return await compare(pass, passHash)
}

export { encrypt, verified }