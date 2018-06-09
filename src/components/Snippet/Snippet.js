import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Icon from '../Icon/Icon'
import Button from '../Button/Button'

import './Snippet.css'

const Snippet = ({ snippet, onDelete }) => (
    <div className="Snippet">
        <div className="Snippet__info">
            <div className="Snippet__delete-icon">
                <Icon cursor="pointer" name="delete" size="15px" onClick={e => onDelete(snippet.id)} />
            </div>

            <div className="Snippet__hours">
                <CopyToClipboard text={snippet.inHours} onCopy={() => console.log('copied')}>
                    <Button text={snippet.inHours} />
                </CopyToClipboard>
            </div>
            <div className="Snippet__massage">{snippet.massage}</div>
        </div>

        <div className="Snippet__when">{snippet.when}</div>
    </div>
)

Snippet.propTypes = {
    onDelete: PropTypes.func,
    snippet: PropTypes.shape({
        id: PropTypes.number,
        inHours: PropTypes.number,
        massage: PropTypes.string,
        when: PropTypes.string,
    }),
}

export default Snippet
