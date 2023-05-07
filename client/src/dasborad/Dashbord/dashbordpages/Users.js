


import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {RiDeleteBin5Line} from "react-icons/ri"

const Users = () => {
const [users,setUsers]=useState([])

  useEffect(()=>{
    const fetchUser=async()=>{

        await fetch("http://localhost:4040/api/user").then((res)=>res.json()).then((data)=>setUsers(data))

    }
    fetchUser()

  },[])
console.log(users);
const handleDelete=async(id)=>{
  const response=await fetch("http://localhost:4040/api/user/"+id,{
    method:"DELETE"
  })
     
    const json = await response.json()
    if (response.ok) {
       console.log("delete is ok");
  
    }
}
  return (
    <Table border="1px" size="sm">
       <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>action</th>
        </tr>
      </thead>
      {
        users.map((usr,index)=>{

          return (
            <tr key={usr._id}>
            <th >{index+1}</th>
            <td>
              <span>
              {usr.firstname}
              </span>
              </td>
              
            <td><span>{usr.lastname}</span></td>
            <td><span>{usr.email}</span></td>
            <td><button className='delete' onClick={handleDelete(usr._id)} ><RiDeleteBin5Line/></button></td>
          </tr>
          )
        })
      }
     
    
    </Table>

  )
}

export default Users



//style table user
export const Table=styled.table`
width:100%;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
text-align:center;
th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}
th, td {
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}

 tr:hover {
  background-color: #ddd;
}

tr td  {
  opacity: 0.9;
}

 tr:hover td  {
  opacity: 1;
}
span{
margin-top:20px;
}
.delete {
  align-items: center;
  background-color: #FFE7E7;
  background-position: 0 0;
  border: 1px solid #FEE0E0;
  border-radius: 11px;
  box-sizing: border-box;
  color: #D33A2C;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  list-style: outside url(https://www.smashingmagazine.com/images/bullet.svg) none;
  padding: 2px 12px;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-underline-offset: 1px;
  transition: border .2s ease-in-out,box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;
}

.delete:active,
.delete:hover,
.delete:focus {
  outline: 0;
}


.delete:active {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}

.delete:hover {
  background-color: #FFE3E3;
  border-color: #FAA4A4;
}

.delete:active:hover,
.delete:focus:hover,
.delete:focus {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}

`




