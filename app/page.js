"use client"
import React from "react"
import { useState } from "react";
import ContenedorCard from "@/components/ContenedorCard";
import styles from "../css/page.module.css"
export default function Home() {
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState('');

  const titulo = "Cards Web"
 

  const handleAddCard = (text) => {
    setCards([...cards, { text }]);
  };

  const handleEditCard = (index) => {
    setEditIndex(index);
    setEditedText(cards[index].text); 
  };

  const handleSaveCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].text = editedText;
    setCards(updatedCards);
    setEditIndex(null);
    setEditedText(''); 
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      handleAddCard(inputText);
      setInputText('');
    }
  };
  return (
    <main className={styles.mainPage}>
        <h1  className={styles.tituloP}>{titulo} </h1>
        
        
        <form onAddCard={handleAddCard} onSubmit={handleSubmit} className={styles.form} >
      <input
        placeholder="Escriba lo que guste"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.btnForm}>Agregar</button>
    </form>
        <ContenedorCard 
          cards={cards}
          onEditCard={handleEditCard}
          onSaveCard={handleSaveCard}
          onDeleteCard={handleDeleteCard}
          editIndex={editIndex}
          editedText={editedText} 
          onTextChange={(text) => setEditedText(text)}
        />
        
    </main>
  )
}
