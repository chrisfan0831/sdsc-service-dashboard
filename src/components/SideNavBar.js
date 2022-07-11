import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sdscLogoRed from "../images/sdsc-logo-red.jpeg";
import sdscLogoWhite from "../images/sdsc-logo-white.png"
import {TbDashboard, TbHome} from 'react-icons/tb';
import {MdOutlineExplore} from "react-icons/md"
import {IoMdContacts} from "react-icons/io"
import {FiSettings} from "react-icons/fi"

export default function SideNavBar() {
    return (
        <ProSidebar >
            <SidebarHeader>
                <img src={sdscLogoRed} height="50" style={{margin:"15px"}}/>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle" popperArrow="true">
                    <MenuItem icon={<TbDashboard size={20}/>}>Dashboard</MenuItem>
                    <SubMenu title="Home" icon={<TbHome size={20}/>}>
                        <MenuItem>Current Service</MenuItem>
                        <MenuItem>Service History</MenuItem>
                        <MenuItem>Saved</MenuItem>
                    </SubMenu>
                    <SubMenu title="Explore" icon={<MdOutlineExplore size={20}/>}>
                        <MenuItem>All Services</MenuItem>
                        <MenuItem>Recommend Services</MenuItem>
                    </SubMenu>
                    <SubMenu title="Contact" icon={<IoMdContacts size={20}/>}>
                        <MenuItem>Methods</MenuItem>
                        <MenuItem>FAQs</MenuItem>
                        <MenuItem>Report</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape="circle">
                    <MenuItem icon={<FiSettings/>} size={20}>Settings</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    )
}

