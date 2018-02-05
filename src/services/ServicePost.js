import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://develop.growthchannel.io/api`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

export const Post = (formData) =>
{
  return HTTP.post('/common_login', {
    email: formData.email,
    password: formData.password
  })
}

