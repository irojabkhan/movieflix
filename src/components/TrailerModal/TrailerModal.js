import React, {useState} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
};

function TrailerModal(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Watch Trailer</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <iframe title='watch trailer' src={props.url} width="1110" height="630" autoplay="1" frameBorder="0" allowfullscreen="1"></iframe>
                <button className='modal__close' onClick={closeModal}>X</button>
            </Modal>
        </div>
    );
}

export default TrailerModal;