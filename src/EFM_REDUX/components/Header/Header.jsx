import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.bg}>
        <ul>
            <li><Link to='/'><span>List des stagiares</span></Link></li>
            <li><Link to ='add'><span>Ajouter un stagiaire</span></Link></li>
        </ul>
    </div>
  )
}
