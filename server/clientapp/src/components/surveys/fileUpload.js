import React, { Component } from 'react'

export default class FieldFileInput extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    async onChange(e) {
        const { input: { onChange } } = this.props
        const text = await e.target.files[0].text();
        console.log('xiwenlwefi ' + text)
        onChange(text)
    }

    render() {
        // const { input: { value } } = this.props
        //const { input, label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
        return (
            <div>
                <div>
                    <input
                        type='file'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}