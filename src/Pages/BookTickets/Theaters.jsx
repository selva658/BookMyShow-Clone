import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCinemas } from "../Redux/cinemas/action";
import {BookMovie} from "../../Redux/BookSingleM/action"
import {useParams} from "react-router-dom"
import {Header} from "../../Components/BookTickets/Header"
import Seating from "./Seating"
import {getCinemas} from "../../Redux/cinemas/action"
import {CinemasBody} from "../../Components/BookTickets/CinemasBody"

const Theaters=()=>{
  // const {id} = useParams()
  const dispatch = useDispatch()
  const bookdata = useSelector((store)=>store.theators.cinemasReducer)

  useEffect(()=>{
      dispatch(getCinemas())
  },[bookdata])
 
  console.log(bookdata)
  // useEffect(()=>{
  //   dispatch(BookMovie(id))
   
  // },[bookdata])

  // console.log(id)
  //  console.log("booked:",bookdata)
  return <>
       <Header/>
       <CinemasBody/>
       {/* <Seating /> */}
  </>
}
export {Theaters}