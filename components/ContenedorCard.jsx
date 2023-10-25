import React from 'react'
import Card from './Card'
import styles from "../css/page.module.css"
export default function ContenedorCard({ cards, onEditCard, onSaveCard, onDeleteCard, editIndex, editedText, onTextChange }) {
    const tituloCont = "Aqui estan tus Cards"
    return (
        <div className={styles.contCards} >
        <h2 className={styles.tituloCard}>{tituloCont}</h2>
        <div className={styles.allCards}> 
      {cards.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          onEdit={() => onEditCard(index)}
          onDelete={() => onDeleteCard(index)}
          isEditing={index === editIndex}
          editedText={editedText}
          onTextChange={onTextChange}
          onSave={() => onSaveCard(index)}
        />
      ))}
           </div>
    </div>
  )
}
