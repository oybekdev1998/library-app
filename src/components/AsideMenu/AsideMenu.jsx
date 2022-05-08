import React from 'react'

import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MonitorIcon from '@mui/icons-material/Monitor';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { common } from '@mui/material/colors';

import avatarIcon from '../../assets/man.png'
import styles from './AsideMenu.module.css';
import { Link } from 'react-router-dom';

const AsideMenu = () => {
  return (

    <div className={styles.container}>
      <div className={styles.asideMenu}>
      
      <div className={styles.avatar}>
      <Avatar
        alt="Remy Sharp"
        src={avatarIcon}
        sx={{ width: 100, height: 100 }}
      />
      <span className={styles.avatarName}>John Doe</span>
      </div>
      <ul className={styles.menu__items}>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <HomeIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Asosiy Sahifa</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <MonitorIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Xizmatlar</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <SettingsIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Sozlamalar</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <MenuBookIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Mavjud Kitoblar</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <GroupsIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Kitobxonlar</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <EqualizerIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Statistika</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <EmailIcon  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Xabar qoldirish</span>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__item_nav} to={''}>
            <PhoneIcon className={styles.icon}  sx={{ color: common[100] }} /> 
            <span className={styles.menu__title}>Aloqa</span>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default AsideMenu