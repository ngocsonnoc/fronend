import axios from 'axios'

export const getAllData = async()=>{
var result =[] 
result = await axios.get('http://localhost:3456/api/').then((res)=>[...res.data])
return result
}