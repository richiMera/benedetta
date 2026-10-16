import { Grid2 } from '@mui/material';

interface Props {
    children: any;
    style: any;

}

const GridWrapper: React.FC<Props> = ({ children, style }) => {


    return (
        <Grid2 sx={style} container spacing={3}>
            {children}
        </Grid2>
    );
};

export default GridWrapper;
