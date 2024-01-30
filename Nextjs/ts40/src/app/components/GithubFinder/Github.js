"use client"
import React, { useState } from 'react'
import Inputform from './Inputform'
import DataDisplay from './DataDisplay';
import RepoList from './RepoList';
import Pagination from './Pagination';

export default function Github() {
    const [userData,setUserData] = useState(null);
    const [repoData,setRepoData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [perPage] = useState(5)
    const fetchData = async (username)=>{
    try {
      const userresponse = await fetch(`https://api.github.com/users/${username}`);
      if(userresponse.ok){
        const userData = await userresponse.json()
        setUserData(userData)
        const reposResponse = await fetch(userData.repos_url)
        if(reposResponse.ok){
          const reposData = await reposResponse.json()
          setRepoData(reposData)
        }
      }
    } catch(err){
        console.log(err)
    }
    }
    const lastIndex = currentPage*perPage;
    const startIndex = lastIndex - perPage;
    const currentRepos = repoData.slice(startIndex,lastIndex)
   const paginate =(currentNumber) =>{
    setCurrentPage(currentNumber)
   }
  return (
    <div>
       <h1>Github Finder</h1>
       <Inputform fetchData={fetchData} />
      {userData && <DataDisplay user={userData}/>} 
     {repoData.length > 0 && <RepoList repos ={currentRepos}/>}
     {repoData.length > 0 && <Pagination 
     total = {repoData.length}
     perPage = {perPage}
     paginate = {paginate}/>}
    </div>
  )
}
