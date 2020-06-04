import React from "react";
import './emergency-alert.scss';
import InfoModal from "../../modals/InfoModal/InfoModal";

class EmergencyAlert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false};
    }

    showSymptoms = () => {
        console.log('click')
        this.setState({showModal: true});
    }

    render() {
        const {showModal} = this.state;
        return (
            <div id={'emergency-alert'} className={'alert-container'}>
                <div className={'message'}>
                    <p>Ante la presencia</p>
                    <p>de <a className={'button'} onClick={() => this.showSymptoms()}>síntomas</a></p>
                </div>
                <div className={'phone-number'}>
                    <p>Llamá al 148</p>
                </div>
            </div>
        )
    }

}

export default EmergencyAlert;