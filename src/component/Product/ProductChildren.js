import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useNavigate } from 'react-router';


const ProductChildren = ({data}) => {
    const thumbnailsUrl ='https://img-c.udemycdn.com/course/750x422/823546_a941.jpg';

        const navigate = useNavigate();
        
        const handleClick = () => {
            navigate(`/products/${data.id}`)
        }

        return (
        <Box padding ={1} margin = {1} onClick = {handleClick} style={{padding: '10px'}}>
            
        <Skeleton animation="wave" variant="circle" width={40} height={40} />     
        <img src={thumbnailsUrl} alt = {data.name} width ="100%" height="205" />
       <Typography variant="body2">{data.name}</Typography>
       <Typography variant="body2">
           {data.shortDescription}
        </Typography>
                            
        </Box>
    )
};

export default ProductChildren;