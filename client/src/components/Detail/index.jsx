import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Detail() {

    const { id } = useParams();
    const allBooks = useSelector(state => state.books)
    
    let bookID = allBooks.books.filter(e => id === e.id)

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(bookID.length === 0){
            navigate("/");
        }
    },[bookID])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10rem',
            maxWidth: '60%',
        }}>
            {
                bookID && bookID.map((e, i) => (
                    <Card sx={{ minWidth: 275, display: 'flex', alignItems: 'center', justifyContent: 'center' }} key={i}>
                        <img src={e.imagelink} alt="" height='400px' />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {e.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                AUTOR
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                {e.authors}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                SINOPSIS
                            </Typography>
                            <Typography variant="body2">
                                {e.description}
                                <br />
                                <br />
                                Language:
                                <br />
                                {e.language}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><ShoppingCartIcon /></Button>
                        </CardActions>
                    </Card>
                ))
            }

        </Box>
    )
}
