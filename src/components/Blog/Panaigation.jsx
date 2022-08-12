import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={2} className='pagination_1'>
      {/* <Pagination count={10} shape="rounded" /> */}
      <Pagination color='primary' count={3} variant="outlined" shape="rounded" />
    </Stack>
  );
}