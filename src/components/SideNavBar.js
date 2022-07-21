import React from "react"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sdscLogoRed from "../resources/sdsc-logo-red.jpeg";
import {TbDashboard, TbHome} from 'react-icons/tb';
import {MdOutlineExplore} from "react-icons/md"
import {FiSettings, FiHelpCircle} from "react-icons/fi"

export default function SideNavbar() {

    const [collapsed, setCollapsed] = React.useState("true")
    function logoClick() {
        if(collapsed=="false") {
            setTimeout(()=>{
                setCollapsed("true")
            }, 20)   
        }
        else {
            setTimeout(() => {
                setCollapsed("false")
            }, 20)
        }
    }
    
    if(collapsed == "false") {
        return (
            <ProSidebar>
                <SidebarHeader>
                    <img onClick={logoClick} className="logo" src={sdscLogoRed} alt="logo" height="50" 
                    style={{margin:"15px", border:"solid #adadad 2px", borderRadius:"12px"}}/>
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
    else {
        return (
            <ProSidebar collapsed="true">
                <SidebarHeader>
                    <img onClick={logoClick} className="logo" src={sdscLogoRed} alt="logo" height="50" 
                    style={{margin:"15px", border:"solid #adadad 1px", borderRadius:"12px"}}/>
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
    
}

