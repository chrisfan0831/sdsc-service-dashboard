import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sdscLogoRed from "../images/sdsc-logo-red.jpeg";
import {TbDashboard, TbHome} from 'react-icons/tb';
import {MdOutlineExplore} from "react-icons/md"
import {FiSettings, FiHelpCircle} from "react-icons/fi"

export default function SideNavBar() {
    return (
        <ProSidebar >
            <SidebarHeader>
                <img src={sdscLogoRed} alt="logo" height="50" style={{margin:"15px", border:"solid #1d1d1d", borderRadius:"12px"}}/>
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
                        <MenuItem>Recommendations</MenuItem>
                    </SubMenu>
                    <SubMenu title="Help" icon={<FiHelpCircle size={20}/>}>
                        <MenuItem>FAQs</MenuItem>
                        <MenuItem>Contact</MenuItem>
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

