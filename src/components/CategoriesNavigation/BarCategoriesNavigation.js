import Grid from '@material-ui/core/Grid';
import { ButtonGroup, Button } from '@material-ui/core';

function BarCategoriesNavigation({ theme, categories, chageCategory }) {
    return(
        <Grid container style={theme.globalStyles.center}>
            <Grid item xs={12}>
            <ButtonGroup aria-label="outlined button group" style={theme.header.navigationCategories}>
                {categories.map((category, i) =>
                    <Button key={i} onClick={() => chageCategory(category)} style={theme.header.navigationButtons}>{category}</Button>
                )}
            </ButtonGroup>
            </Grid>
        </Grid>
    )
}
export default BarCategoriesNavigation;