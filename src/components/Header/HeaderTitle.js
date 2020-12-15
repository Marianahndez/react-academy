import Grid from '@material-ui/core/Grid';

function HeaderTitle({ theme }) {
    return (
        <Grid item xs={12} style={theme.globalStyles.center}>
            <h3 style={theme.header.decorativeTitle}>
                <span style={theme.header.decorativeTitle.before}></span>
                Making your Life Easier
                <span style={theme.header.decorativeTitle.after}></span>  
            </h3> 
            <h1 style={theme.header.mainTitle}>Discovering the World</h1>
        </Grid>
    )
}

export default HeaderTitle;