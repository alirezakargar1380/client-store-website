import Headers from './components/header/header'
import LandingProducts from './components/products/landingProducts'
import * as homeApi from './api/home.api'
import React, { use, useEffect, useState } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import TextField from '@mui/material/TextField';

export default async function Page() {
  return <TextField />
}