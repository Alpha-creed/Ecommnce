import { Button, FormControl, InputLabel, NativeSelect, Stack, styled, TextField, Typography } from "@mui/material"
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
    paddingRight: 150,
    textAlign: 'start',
    color: theme.palette.text.secondary,
    display:"flex",
    flexDirection:"column",
  }));

  // const generateRan=()=>{
  //   Math.floor(Math.random() * 100);
  // }
export default function SideBar({filter}) {
  // const [age, setAge] = useState({filter});

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Container>
               <Side>
               <Button variant="text" onClick={()=> filter("all")}>all</Button>
                   <Button variant="text" onClick={()=> filter("office")}>Office</Button>
                   <Button variant="text" onClick={()=> filter("living room")}>Living Room</Button>
                   <Button variant="text" onClick={()=> filter("kitchen")}>Kitchen</Button>
                   <Button variant="text" onClick={()=> filter("bedroom")}>Bedroom</Button>
                   <Button variant="text" onClick={()=> filter("dining")}>Dining</Button>
                   <Button variant="text" onClick={()=> filter("kids")}>Kids</Button>
               </Side>
        
               {/* <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                         Company
                    </InputLabel>
                <NativeSelect
                defaultValue={10}
                value={age}
                onChange={handleChange}
                inputProps={{
                name: 'all',
                id: 'uncontrolled-native',
                }}
                 >
                <option value={10}>all</option>
                <option value={20}>Kitchen</option>
                <option value={30}>Bedroom</option>
                <option value={40}>Dining</option>
                <option value={50}>Kids</option>

                </NativeSelect>
            </FormControl> */}
    </Container>
  )
}