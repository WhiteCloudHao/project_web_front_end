import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ProductChildren from './ProductChildren';


const List = () => {
    let  datas = [
        {
            id: 1,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 2,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 3,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 4,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 5,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 6,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 7,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 8,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 9,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
        {
            id: 10,
            name: 'C++',
            shortDescription: "Django Masterclass : Build 9 Real World Django Projects"
        },
    ]
    return (
            <div>
                <h2>Danh sách khóa học</h2>
            <Box>
                <Grid container>
                    {datas.map((data) =>  (
                        <Grid item key={data.id} xs ={12} sm ={6} md ={4} lg={3}>
                           <ProductChildren data ={data} />
                        </Grid>
                    )
                    )}
                </Grid>
            </Box>
            </div>
    );
};

export default List;