import React from 'react'
import { useState } from "react";
import styles from "../css/page.module.css"
export default function Card({ text, onEdit, onDelete, isEditing, editedText, onTextChange, onSave }) {

    
  return (
    <> 
    {isEditing ? (
      <div className={styles.card}>
        <input
          value={editedText}
          onChange={(e) => onTextChange(e.target.value)}
          className={styles.textareaCard}
        />
        <button onClick={onSave} className={styles.btns}>Guardar</button>
      </div>
    ) : (
      <div className={styles.card}>
        <div className={styles.cardText}>
        <p className={styles.text}>{text}</p>
        </div>
      
        <div className={styles.cardBtns}>
        <button onClick={onDelete} className={styles.btns}>Eliminar</button>
        <button onClick={onEdit} className={styles.btns}>Editar</button>
        </div>
       
      </div>
    )}
  </>
  )
}
