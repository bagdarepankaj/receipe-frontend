import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    }
]

export default function Home() {
  return (
    <div>
        {itemData.map( item => (
            <Paper elevation={6} key={item.img} className="receipe">
                <div><b>{item.title}</b></div>
                <img 
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: "100%", height: "auto"}}
                    />
                <footer>
                    <IconButton>Like</IconButton>
                    <IconButton>Comment</IconButton>
                </footer>
            </Paper>
        ))}
    </div>
  );
}
