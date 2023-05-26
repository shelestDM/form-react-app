import Button from '@mui/material/Button';

const CustomButton = (props) => {
    return (
        <Button disabled={props.disabled} type={props.type} sx={{maxWidth: 320}} variant="contained" color="success">
            {props.title}
        </Button>
    );
}

export default CustomButton;