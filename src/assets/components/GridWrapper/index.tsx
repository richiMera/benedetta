import Button from '../Button';
import hamburgerIcon from '../../../assets/img/burger.svg';
import { Grid2 } from '@mui/material';

interface Props {
    isMedium?: boolean;
    isMobile?: boolean;
    children: any;
    style: any;

}

const GridWrapper: React.FC<Props> = ({ isMedium, isMobile, children, style }) => {


    return (
        <Grid2 sx={style} container spacing={3}>
            {children}
        </Grid2>
    );
};

export default GridWrapper;
