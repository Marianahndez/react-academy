import React from 'react';
import { Button, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export function ButtonAddAndEdit({ buttonType, clickOpen, theme, clickOpenEdit }){

    return (
        <React.Fragment>
            {
            buttonType ? 
            <Fab style={theme.dialog.circleBtn} aria-label="add" onClick={clickOpen}>
                <EditIcon />
            </Fab> :
            <Button style={theme.dialog.flatBtn} onClick={clickOpenEdit}>
                <EditIcon />
            </Button>
        }
        </React.Fragment>
    )
}
export default ButtonAddAndEdit;