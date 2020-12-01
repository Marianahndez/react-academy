import Grid from '@material-ui/core/Grid';
import { ButtonGroup, Button } from '@material-ui/core';
import { useState } from 'react';

function ListCategory({categories, theme, chageCategory}){
    const [category, setCategory] = useState(categories[0])

    // useEffect(()=>{
    //     console.log('category : ', category)
    // }, [category])

    const handleCategories = (e) => {
        setCategory(e)
        chageCategory = category;
    }
    return(
        <ButtonGroup aria-label="outlined button group" style={theme.header.navigationCategories}>
            {categories.map((category, i) =>
                <Button key={i} onClick={() => handleCategories()} style={theme.header.navigationButtons}>{category}</Button>
            )}
        </ButtonGroup>
    )
}

function BarCategoriesNavigation({theme, categories}) {
    return(
        <Grid container style={theme.globalStyles.center}>
            <Grid item xs={12}>
                <ListCategory categories={categories} theme={theme} />
            </Grid>
        </Grid>
    )
}
export default BarCategoriesNavigation;