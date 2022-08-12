import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {Cartbutton, Carth1, Cartinput, Cartp, Div, Divcart, Divcenter, Divend, DIvh11, Divh21, Divimg, Divimg2, Divinput, Divleft, Divnumber, Divp, Divp2, Endbutton, Exesimg, H3, Hr, Link1, Numberh1} from './StyleDrawer';

//rasm
import exes from "../Navbar/photo/exes.png"
import phone1 from "../Navbar/photo/1.png"
import phone2 from "../Navbar/photo/02(1).png"
import phone3 from "../Navbar/photo/02.png"
import phone4 from "../Navbar/photo/03.png"



// type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer({state, setState}) {

  const toggleDrawer =
  (anchor, open) =>
  (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
    sx= {{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400, backgroundColor:"color", color:"", height:"100vh" }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >

      <Div>
         <H3>Shopping bag</H3>
         <Divp>5 items</Divp>
       </Div>

      <Divcenter>
        
        <Divimg>
          <Divimg2 src={phone1} alt="" />
        </Divimg>
        <Divleft>
          <DIvh11>Lira Earrings</DIvh11>
          <Divh21>Black / Medium</Divh21>
          <Divp2>$ 20,00</Divp2>
          <Numberh1>QTY: - 1 +</Numberh1>
        </Divleft>
        <Divend>

       <Endbutton>X</Endbutton>

        </Divend>
      </Divcenter>

      <Divcenter>
        <Divimg>
          <Divimg2 src={phone2} alt="" />
        </Divimg>
        <Divleft>
          <DIvh11>Ollie Earrings</DIvh11>
          <Divh21>Black / Medium</Divh21>
          <Divp2>$ 20,00</Divp2>
          <Numberh1>QTY: - 3 +</Numberh1>
        </Divleft>
        <Divend>
        <Endbutton>X</Endbutton>
        </Divend>
      </Divcenter>

      <Divcenter>
        <Divimg>
          <Divimg2 src={phone3} alt="" />
        </Divimg>
        <Divleft>
          <DIvh11>Kaede Hair Pin</DIvh11>
          <Divh21>Black / Medium</Divh21>
          <Divp2>$ 20,00</Divp2>
          <Numberh1>QTY: - 1 +</Numberh1>
        </Divleft>
        <Divend>
        <Endbutton>X</Endbutton>
        </Divend>
      </Divcenter>

      <Divcenter>
        <Divimg>
          <Divimg2 src={phone4} alt="" />
        </Divimg>
        <Divleft>
          <DIvh11>Ollie Earrings</DIvh11>
          <Divh21>Black / Medium</Divh21>
          <Divp2>$ 20,00</Divp2>
          <Numberh1>QTY: - 1 +</Numberh1>
        </Divleft>
        <Divend>
        <Endbutton>X</Endbutton>
        </Divend>
      </Divcenter>

       <Hr>
       </Hr>

       <Divcart>
        <Carth1>  Subtotal (5 items) </Carth1>
        <Cartp>$ 100,00</Cartp>
      </Divcart>
      <Link1 to='/cart'>
        <Cartbutton>VIEW CART</Cartbutton>
      </Link1>

    </Box>
  );

  return (
    <div>
      {([ 'left', 'right', 'top', 'bottom']).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
