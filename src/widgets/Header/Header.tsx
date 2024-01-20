import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { CategoryType } from '../../api/categoriesApi';
import logo from '../../static/logo.png'

interface HeaderProps {
    sections: CategoryType[]
}

export default function Header({ sections }: HeaderProps) {

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small">Subscribe</Button>
                <img src={logo} style={{ width: 50, height: 50, margin: 'auto' }} />
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections.map((section) => {
                    const categoryHref = '/' + section.name.toLowerCase()

                    return (
                        <Link
                            color="inherit"
                            key={section.id}
                            to={categoryHref}
                            style={{ padding: 1, flexShrink: 0 }}
                        >
                            {section.name}
                        </Link>
                    )
                })}
            </Toolbar>
        </React.Fragment>
    );
}