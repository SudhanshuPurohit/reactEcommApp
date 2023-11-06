import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Categories = () => {
    return (
        <div className='m-5 p-5'>
            <h1 className='text-center mb-4'>Categories</h1>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 6">
                        <Card sx={{}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="500"
                                image="mediamodifier-kJXGTOY1wLQ-unsplash.jpg"
                            />

                            <CardActions className='d-flex justify-content-end'>
                                <Link to={"/allproduct"} type="button" className="btn btn-outline-primary">Explore</Link>

                            </CardActions>
                        </Card>
                    </Box>
                    <Box gridColumn="span 6">
                        <Card sx={{}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="500"
                                image="claire-abdo-aWLTXw6kbDw-unsplash.jpg"
                            />

                            <CardActions className='d-flex justify-content-end'>
                            <Link to={"/allproduct"} type="button" className="btn btn-outline-primary">Explore</Link>

                            </CardActions>
                        </Card>
                    </Box>
                    <Box gridColumn="span 6">
                        <Card sx={{}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="400"
                                image="lea-ochel-nsRBbE6-YLs-unsplash.jpg"
                            />

                            <CardActions className='d-flex justify-content-end'>
                                <Link to={"/allproduct"} type="button" className="btn btn-outline-primary">Explore</Link>

                            </CardActions>
                        </Card>
                    </Box>
                    <Box gridColumn="span 6">
                        <Card sx={{}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="400"
                                image="fauzan-fathullah-hLwkfi3oPp0-unsplash.jpg"
                            />

                            <CardActions className='d-flex justify-content-end'>
                                <Link to={"/allproduct"} type="button" className="btn btn-outline-primary">Explore</Link>

                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Categories