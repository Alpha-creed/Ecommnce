import { Stack, TextField, Typography } from "@mui/material"
import { Container } from "@mui/material"

const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));
  const Side = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    display:"flex",
    flexDirection:"column",
  }));

export default function SideComp(props,items) {
    const {company,shipping,colors,price} = props
    const {filterItems} = items
  return (
    <Container>
    <TextField id="filled-basic" label="Filled" variant="filled" />
       <Stack>
        <Item>
        <Typography variant="h3" fontSize="20px">
            Category
        </Typography>
         {company.map((com,index)=>{
            return(
            <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                         Company
                    </InputLabel>
                <NativeSelect
                defaultValue={10}
                inputProps={{
                name: 'all',
                id: 'uncontrolled-native',
                }}
                 >
                <option value={index}>{com}</option>
                </NativeSelect>
            </FormControl>
    
             )})}
       </Item>
       </Stack>

    </Container>
  )
}