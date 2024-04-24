import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import keys from '../constants/keys'
import Modal from './Modal'

export default function Wordle({ solution }) {
    const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            window.removeEventListener('keyup', handleKeyup)
        }
        if (turn > 5) {
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }
        if (turn > 5) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])


    return (
        <div>
            <h2>Current Guess - {currentGuess}</h2>

            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />

            <Keypad keys={keys} usedKeys={usedKeys} />

            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}