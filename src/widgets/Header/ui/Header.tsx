import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../../api/categoriesApi';
import logo from '../../../static/logo.png'
import cl from './Header.module.css'

interface HeaderProps {
    sections: CategoryType[]
}

export const Header = ({ sections }: HeaderProps) => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between'}}>
                <Button size="small">Subscribe</Button>
                <img src={logo} style={{ width: 50, height: 50, margin: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer'}} onClick={() => navigate('/')}/>
                <div>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Button variant="outlined" size="small">
                        Sign up
                    </Button>
                </div>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'start', overflowX: 'auto', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', alignItems: "stretch"}}
            >
                {sections.map(({ id, name }) => {

                    const categoryHref = '/' + name.toLowerCase()

                    return (
                        <a
                            color="inherit"
                            key={id}
                            onClick={() => navigate(categoryHref)}
                            className={cl.link}
                        >
                            {name}
                        </a>
                    )
                })}
            </Toolbar>
        </React.Fragment>
    );
}