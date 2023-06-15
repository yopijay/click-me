// Libraries
import { Box, Container, Stack, Typography } from "@mui/material";
import { clicked, count } from "core/api";
import { useGet, usePost } from "core/function/global";
import dayjs from "dayjs";

// Constants
const btntxt = { 
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#204c6f',
    color: '#ffffff',
    borderRadius: '7px',
    padding: '10px 50px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#1b405d' }
}

const App = () => {
    const date = `${dayjs(new Date()).year()}-${dayjs(new Date()).month() + 1}-${dayjs(new Date()).date()}`;
    const { data: counts, refetch } = useGet({ key: ['counter'], fetch: count(date), options: { refetchOnWindowFocus: true, refetchInterval: 1000 } });
    const { mutate: clicking, isLoading } = usePost({ fetch: clicked, onSuccess: data => refetch() });

    return (
        <Container maxWidth= "sm">
            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ height: '100vh' }} spacing= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                    <Typography variant= "h4" sx= {{ fontWeight: 'bold' }}>Welcome!</Typography>
                    <Typography sx= {{ textAlign: 'center' }}>This project shows a number that increases each time the button is pressed.</Typography>
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "center" spacing= { 3 }>
                    <Typography variant= "h1" data-testid= "counter">{ counts !== undefined ? counts.length : 0 }</Typography>
                    { !isLoading ? <Box sx= { btntxt } onClick= { () => clicking({ date_clicked: date }) }>Click Me!</Box> : '' }
                </Stack>
            </Stack>
        </Container>
    );
}

export default App;