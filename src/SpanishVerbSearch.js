import React from 'react';


export class SpanishVerbSearch extends React.Component {
    render() {
        return (
            <div>
                <h3>Spanish Verb Search</h3>
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search verb forms" />
                    </div>
                </div>
            </div>
        )
    }
}


export default SpanishVerbSearch;